import React, { useContext } from "react";
import moment from "moment";
import { createParticipant } from "@/pages/api/participant";
import { AuthContext } from "@/pages/_app";
import { useRouter } from "next/router";

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
              <div>
                <div className='flex flex-col uppercase text-sm leading-5 tracking-tight lg:text-base'>
                  <time>
                    {event?.meetingDatetime &&
                      moment(new Date(event?.meetingDatetime)).format(
                        "dddd, MMMM DD, YYYY HH:mm"
                      )}
                  </time>
                </div>
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
                  <div className='flex items-center'>
                    <div>
                      <button className='py-3.5 px-4 border border-viridian rounded-lg leading-8 font-semibold transition-all fill-current text-viridian hover:bg-viridian hover:text-gray-500'>
                        <div className='flex items-center flex-row-reverse'>
                          <div>
                            <svg width={24} height={24}>
                              <path d='M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319 7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761 11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z'></path>
                            </svg>
                          </div>
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
