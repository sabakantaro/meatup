import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Banner() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src = "/banner.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      {!imageLoaded ? (
        <div className='animate-pulse bg-gray-200 h-full w-full' />
      ) : (
        <div className='bg-gray-200 h-full w-full opacity-[65%]'>
          <img
            alt=''
            src='/banner.jpg'
            className='h-full w-full object-cover'
          />
        </div>
      )}
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-base sm:text-xl  opacity-[90%]'>
          Not sure where to go? Perfect.
        </p>
        <button
          className='text-orange-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150'
          onClick={() => router.push("/search")}
        >
          Seach your place.
        </button>
      </div>
    </div>
  );
}

export default Banner;
