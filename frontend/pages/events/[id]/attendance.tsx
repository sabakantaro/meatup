import React, { useState, useEffect, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../_app";
import { getEvent } from "@/pages/api/event";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AttendanceFooter from "@/components/events/AttendanceFooter";
import moment from "moment";

const Attendance = () => {
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

  return (
    <>
      <Header />
      <div className='bg-gray-100 w-full'>
        <div className='max-w-screen-lg w-full mx-auto pt-3'>
          <div>
            <div className='ml-0'>
              <button
                className='pt-4 border-none hover:no-underline flex items-center hover:cursor-pointer gap-2.5 font-medium ml-7'
                onClick={() => router.back()}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 19l-7-7m0 0l7-7m-7 7h18'
                  ></path>
                </svg>
                <span>Back</span>
              </button>
              <div className='bg-white rounded-lg p-7 mt-7'>
                <div className='text-3xl font-semibold'>
                  You're going to attend!
                </div>
                <div className='md:flex'>
                  <div className='relative overflow-hidden block rounded-lg mt-3'>
                    <img
                      className='h-64 md:h-80 w-full md:w-[500px] object-cover rounded-t-lg rounded-lg'
                      src={event?.place?.image.url}
                      alt='event image'
                    />
                  </div>
                  <div className='gap-4 mt-6 md:ml-10'>
                    <p className='leading-6 font-semibold'>
                      {event?.title} - {event?.user?.name}
                    </p>
                    <span className='flex text-primary items-center my-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          fillRule='evenodd'
                          d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <div className='flex flex-col leading-5 tracking-tight text-sm md:text-base normal-case ml-1'>
                        <time
                          dateTime={
                            event?.meetingDatetime &&
                            moment(new Date(event?.meetingDatetime)).format(
                              "dddd, MMMM DD, YYYY HH:mm"
                            )
                          }
                        >
                          {event?.meetingDatetime &&
                            moment(new Date(event?.meetingDatetime)).format(
                              "dddd, MMMM DD, YYYY HH:mm"
                            )}
                        </time>
                      </div>
                    </span>
                    <div className='gap-4 my-2.5'>
                      <div className='text-center sm:w-auto w-[150px]'>
                        <div>
                          <button
                            disabled={!event?.user}
                            className='py-1 w-full flex flex-row justify-center bg-teal-700 rounded-lg border-2 border-link leading-8 text-link whitespace-nowrap font-medium disabled:bg-gray-400 disabled:cursor-not-allowed text-white disabled:border-0 disabled:py-2 h-10 items-center'
                          >
                            <div className='px-4'>Chat Room</div>
                            <div>
                              <div>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='24'
                                  height='24'
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  className='fill-current'
                                >
                                  <path d='M5.5 16.5L5.5 19.8791L9.72383 16.5H20C20.2761 16.5 20.5 16.2761 20.5 16V6C20.5 5.72386 20.2761 5.5 20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V16C3.5 16.2761 3.72386 16.5 4 16.5H5.5ZM4.68765 20.5289C4.68744 20.5291 4.68786 20.5288 4.68765 20.5289V20.5289ZM4 18C2.89543 18 2 17.1046 2 16V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V16C22 17.1046 21.1046 18 20 18H10.25L5.6247 21.7002C4.96993 22.2241 4 21.7579 4 20.9194L4 18Z'></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='flex flex-row p-6 bg-white lg:rounded-2xl cursor-pointer w-full items-center my-20'
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
              <div className='bg-gray-100 w-full h-4'></div>
            </div>
          </div>
        </div>
      </div>
      <AttendanceFooter event={event} />
      <Footer />
    </>
  );
};

export default Attendance;
