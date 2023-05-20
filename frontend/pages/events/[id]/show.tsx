import React, { useState, useEffect, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../_app";
import { getEvent } from "@/pages/api/event";
import Header from "@/components/Header";
import Summary from "@/components/events/Summary";
import TitleHeader from "@/components/events/TitleHeader";
import AttendanceFooter from "@/components/events/AttendanceFooter";
import Footer from "@/components/Footer";
import Avatar from "@/components/users/Avatar";
import { createComment, deleteComment } from "@/pages/api/comment";
import { Comment } from "@/typings";
import Comments from "@/components/events/Comments";

const Show = () => {
  const { currentUser } = useContext(AuthContext);
  const [event, setEvent] = useState<any>(null);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const handleGetEvent = useCallback(async () => {
    try {
      const res = await getEvent(id as string);
      if (res?.status === 200) {
        setEvent(res?.data.event as any);
        setComments(res?.data.comments as any);
        console.log(res?.data.comments);
      } else {
        console.log("No event");
      }
    } catch (err) {
      console.log(err);
    }
  }, [id, router]);

  useEffect(() => {
    handleGetEvent();
  }, [handleGetEvent]);

  const handleCreateComment = useCallback(async () => {
    try {
      const data: any = {
        userId: currentUser?.id,
        eventId: id,
        content: content,
      };
      await createComment(id as string, data);
      setContent("");
      handleGetEvent();
    } catch (err) {
      console.log(err);
    }
  }, [currentUser, id, content]);

  const handleDeleteComment = useCallback(
    async (commentId: string) => {
      try {
        await deleteComment(id as string, commentId);
        setContent("");
      } catch (err) {
        console.log(err);
      }
    },
    [id]
  );

  return (
    <>
      <Header />
      <TitleHeader title={event?.title} hostName={event?.user?.name} />
      <div className='bg-gray-100 min-h-screen overflow-auto'>
        <div className='container mx-auto md:px-4 max-w-6xl'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='md:p-4 lg:pr-16 col-span-2'>
              <img
                className='h-64 md:h-96 w-full object-cover pt-4'
                src={event?.place?.image.url}
                alt='event image'
              />
              <div className='py-4'>
                <h3 className='text-xl font-bold mb-5'>Description</h3>
                <p className='whitespace-pre-wrap'>{event?.description}</p>
              </div>
              <div className='px-6 sm:px-4 xl:px-0 md:max-w-screen w-full mt-5'>
                <div className='flex justify-between'>
                  <h2
                    className='font-semibold text-xl mb-5'
                    data-testid='CommentsTitle'
                  >
                    Comments
                  </h2>
                </div>
                {comments.map((comment: Comment) => {
                  return (
                    <>
                      <Comments
                        comment={comment}
                        key={comment.id}
                        handleDeleteComment={() =>
                          handleDeleteComment(comment.id)
                        }
                      />
                    </>
                  );
                })}
                <div className='pl-12 sm:pl-15'>
                  <div className='w-full relative mb-8'>
                    <div className='flex'>
                      <div className='hidden md:block xmedia'>
                        {currentUser && <Avatar userName={currentUser?.name} />}
                      </div>
                      <div className='flex flex-col flex-1 ml-4 sm:ml-5'>
                        <textarea
                          rows={1}
                          id='commentInput'
                          name='commentInput'
                          className='p-4 sm:p-5 w-full overflow-hidden break-words border border-gray5 rounded text-gray7 focus:border-teal-600 focus:outline-none'
                          placeholder='Add a comment...'
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                      </div>
                      <div className='pt-4'>
                        <button
                          className='ml-4 sm:ml-5 mr-2.5'
                          disabled={content === ""}
                          onClick={handleCreateComment}
                        >
                          <svg
                            fill={content !== "" ? "outlined" : "none"}
                            strokeWidth={1.8}
                            stroke={content !== "" ? "" : "currentColor"}
                            className={`w-6 h-6 ${
                              content !== "" ? " fill-teal-600" : ""
                            }`}
                          >
                            <path d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='flex flex-row p-6 bg-white lg:rounded-2xl cursor-pointer w-100 items-center my-20'
                onClick={() => router.push("/search")}
              >
                <img
                  alt='Photo of the event place'
                  src={event?.place?.image.url}
                  className='bg-transparent rounded-md object-cover h-16 w-16'
                />
                <div className='ml-5'>
                  <div>{event?.place?.location}</div>
                  <div className='text-teal-700 hover:no-underline'>
                    See more events
                  </div>
                </div>
                <div className='ml-auto'>
                  <svg width='24' height='24'>
                    <path d='M9.46967 21.5303C9.17678 21.2374 9.17678 20.7626 9.46967 20.4697L17.7626 12.1768C17.8602 12.0791 17.8602 11.9209 17.7626 11.8232L9.46967 3.53033C9.17678 3.23744 9.17678 2.76256 9.46967 2.46967C9.76256 2.17678 10.2374 2.17678 10.5303 2.46967L18.8232 10.7626C19.5066 11.446 19.5066 12.554 18.8232 13.2374L10.5303 21.5303C10.2374 21.8232 9.76256 21.8232 9.46967 21.5303Z'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='p-4 mt-4'>{event && <Summary event={event} />}</div>
          </div>
        </div>
      </div>
      <AttendanceFooter event={event} />
      <Footer />
    </>
  );
};

export default Show;
