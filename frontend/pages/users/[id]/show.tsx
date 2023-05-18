import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useContext } from "react";
import Avatar from "@/components/users/Avatar";
import moment from "moment";
import { AuthContext } from "@/pages/_app";
import { useRouter } from "next/router";

type Props = {
  result: any;
};

const show = ({ result }: Props) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div className='w-full max-w-screen-sm mx-auto px-4 md:px-8 my-6'>
        <div className='flex flex-col items-center justify-center mt-5 border-b-2 pb-10'>
          <Avatar
            userName={result?.user?.name || ""}
            src={result?.user?.image.url}
            size={32}
          />
          <h1 className='text-4xl font-bold mt-5'>{result?.user?.name}</h1>
          <p className='text-xl font-semibold mt-2 text-center'>
            Member since{" "}
            {result?.user?.created_at
              ? moment(result?.user?.created_at).format("LL")
              : "--"}
          </p>
          <p className='text-base text-gray-500 mt-3 max-w-[600px]'>
            {result?.user?.profile || "Np profile yet..."}
          </p>
          <div className='flex flex-col items-center md:items-start space-y-2 pt-2'>
            <div className='flex flex-row space-x-2 items-center fill-current font-normal text-gray-500'>
              <div className='fill-current'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span>{result?.user?.gender || "Not specified"}</span>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start space-y-2 pt-3'>
            <div className='flex flex-row space-x-2 items-center fill-current font-normal text-gray-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z' />
              </svg>
              <span>
                {result?.user?.birth_date
                  ? moment(result?.user?.birth_date).format("LL")
                  : "Not detected"}
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col border-b-2'>
          <div className='px-6 sm:px-4 xl:px-0 md:max-w-screen py-4 w-full flex flex-row justify-between'>
            <div className='flex flex-row space-x-2 md:space-x-4 items-center'>
              <a className='font-normal hover:no-underline hover:text-teal-700 text-center space-x-2 cursor-pointer'>
                <div className='inline-block bg-teal-700 text-white text-sm rounded-full px-2 pt-0.5'>
                  {result?.user?.events?.length > 0
                    ? result?.user?.events?.length
                    : 0}
                </div>
                <span>
                  {result?.user?.events?.length > 0
                    ? "Organised"
                    : "Become a Host"}
                </span>
              </a>
            </div>
            <div className='flex flex-row items-center'>
              {currentUser?.id === result?.user?.id && (
                <button
                  className='text-white bg-red-400 rounded-lg p-4 cursor-pointer'
                  onClick={() => router.push(`/users/${id}/edit`)}
                >
                  Edit profile
                </button>
              )}
            </div>
          </div>
        </div>
        {result?.user?.events?.length > 0 && (
          <div className='flex flex-col mt-5 pb-10'>
            <h2 id='groups-title' className='text-3xl font-bold mb-6'>
              Organised
            </h2>
            <ul className='grid grid-cols-1 gap-y-4 gap-x-4 md:gap-x-6'>
              {result?.user?.events?.map((event: any) => (
                <li className='flex flex-row'>
                  <a
                    className='flex flex-row w-full items-center border rounded-lg border-gray3 p-3  space-x-4 hover:no-underline hover:opacity-75 min-h-[94px] cursor-pointer'
                    onClick={() => router.push(`/events/${event.id}/show`)}
                  >
                    <div className='relative min-w-[68px]'>
                      <div className='w-full h-full'>
                        <img
                          alt={`Image of ${event?.title}`}
                          src={event?.place?.image.url}
                          className='rounded-md object-cover object-center w-16 h-16'
                        />
                      </div>
                    </div>
                    <span className='font-semibold text-xl leading-6'>
                      {event?.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default show;

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { id } = query;

  try {
    const result = await fetch(
      (process.env.NEXT_PUBLIC_AUTH_URL as string) + `/users/${id}`
    ).then((res) => res.json());

    return {
      props: {
        result,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        result: {},
      },
    };
  }
}
