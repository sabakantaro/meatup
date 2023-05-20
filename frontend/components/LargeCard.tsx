import React, { useEffect, useState } from "react";

function LargeCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "";
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <section className='relative py-16 cursor-pointer'>
      {!imageLoaded ? (
        <div className='animate-pulse bg-gray-200 rounded-2xl h-96 min-w-[300px]' />
      ) : (
        <div className='relative h-96 min-w-[300px]'>
          <img alt='' src='' className='rounded-2xl' />
        </div>
      )}
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>The Greatest Outdoors</h3>
        <p>Wishlist curated by Gym-go</p>
        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>
          Get Inspired
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
