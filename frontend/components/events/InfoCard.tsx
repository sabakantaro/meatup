import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function InfoCard({ item }: any) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src = item?.place?.image?.url;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [item]);

  return (
    <div
      className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'
      onClick={() => router.push(`/events/${item.id}/show`)}
    >
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        {!imageLoaded && (
          <div className='animate-pulse bg-gray-200 rounded-2xl w-full h-full' />
        )}
        {imageLoaded && (
          <img
            alt=''
            src={item?.place?.image?.url}
            className='rounded-2xl w-full h-full object-cover image-loaded'
          />
        )}
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{item.location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h4 className='text-xl'>{item.title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow overflow-ellipsis line-clamp-3'>
          {item.description}
        </p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            {item.score}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>
              {item.price}
            </p>
            <p className='text-right font-extralight'>{item.total}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-loaded {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default InfoCard;
