import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function LargeCard() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const image = new Image();
    image.src = "/largeCard.jpg";
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
          <img
            alt=''
            src='/largeCard.jpg'
            className='rounded-2xl h-96 w-full object-cover'
          />
        </div>
      )}
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>The Greatest Workout Places</h3>
        <p>Wishlist curated by Meatup</p>
        <button
          className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'
          onClick={() => router.push("/events/create" )}
        >
          Get Inspired
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
