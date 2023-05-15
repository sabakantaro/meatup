import React, { useEffect, useState } from "react";

function Banner() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "";
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      {!imageLoaded ? (
        <div className='animate-pulse bg-gray-200 h-full w-full' />
      ) : (
        <img alt='' src='' className='h-full w-full object-cover' />
      )}
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible.
        </button>
      </div>
    </div>
  );
}

export default Banner;
