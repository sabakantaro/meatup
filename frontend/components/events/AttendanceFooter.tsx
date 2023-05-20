import React, { useContext } from "react";
import moment from "moment";
import { createParticipant } from "@/pages/api/participant";
import { AuthContext } from "@/pages/_app";
import { useRouter } from "next/router";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";

type Props = {
  event: any;
};

function AttendanceFooter({ event }: Props) {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const handleParticipant = () => {
    const data: any = {
      user_id: currentUser?.id,
      event_id: event?.id,
    };
    const res: any = createParticipant(data);
    if (res) {
      router.push(`/events/${event?.id}/attendance`);
    }
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Copied to clipboard");
  };

  const isEnable =
    // !event?.participants?.some((p: any) => p?.userId === currentUser?.id) && // Not already joined
    event?.participants?.length === 0 && // No participants
    event?.user?.id !== currentUser?.id; // Not the owner

  return (
    <>
      <div className='sticky bottom-0 bg-white w-full py-5 z-10 px-5 lg:px-20'>
        <div className='md:max-w-screen mx-auto'>
          <div className='flex justify-between text-gray-700'>
            <div className='hidden sm:flex flex-col justify-center'>
              <div className='flex flex-col uppercase text-sm leading-5 tracking-tight lg:text-base'>
                <time>
                  {event?.meetingDatetime &&
                    moment(new Date(event?.meetingDatetime)).format(
                      "dddd, MMMM DD, YYYY HH:mm"
                    )}
                </time>
              </div>
              <div>
                <p className='font-semibold'>{event?.title}</p>
              </div>
            </div>
            <div className='w-full sm:w-auto'>
              <div className='flex items-center justify-around'>
                <div className='flex items-center md:block'>
                  <div className='flex flex-col'>
                    <div className='font-semibold'>
                      <span>FREE</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center space-x-5 ml-5'>
                  <BookmarkButton item={event} />
                </div>
                <div className='flex items-center space-x-5 ml-5'>
                  <div className='flex items-center'>
                    <div>
                      <button className='py-3.5 px-4 border border-teal-700 rounded-lg leading-8 font-semibold transition-all fill-current text-teal-700 hover:bg-teal-700 hover:text-white'>
                        <div className='flex items-center flex-row-reverse'>
                          <ShareButton />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <button
                      className={`py-2.5 px-8  rounded-lg border leading-8 text-white font-semibold whitespace-nowrap ${
                        !isEnable
                          ? "bg-gray-400 border-gray-400"
                          : "bg-red-400 border-red-400 hover:bg-red-300 hover:border-red-300"
                      }`}
                      onClick={() => handleParticipant()}
                      disabled={!isEnable}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendanceFooter;
