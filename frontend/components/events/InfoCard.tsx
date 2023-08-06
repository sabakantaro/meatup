import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import BookmarkButton from './BookmarkButton';
import ShareButton from './ShareButton';

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
            alt='Place Image'
            src={item?.place?.image?.url}
            className='rounded-2xl w-full h-full object-cover'
            style={{ opacity: 1 }}
          />
        )}
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between text-orange-700 pb-1'>
          <p className=''>
            {item?.meeting_datetime &&
              moment(new Date(item?.meeting_datetime)).format(
                'dddd, MMMM DD, YYYY HH:mm'
              )}
          </p>
        </div>
        <h4 className='text-xl pb-2'>{item.title}</h4>
        <div className='w-10' />
        <p className='text-sm text-gray-500 flex-grow overflow-ellipsis line-clamp-3'>
          {item.description}
        </p>
        <div className='flex justify-between items-end pt-5'>
          <div>
            <p className='text-right font-extralight'>
              {item?.price && item?.price > 0 ? item.price : 'FREE'}
            </p>
          </div>
          <div className='flex items-center space-x-5 ml-5'>
            <button className='text-gray-500 hover:text-gray-400'>
              <ShareButton />
            </button>
            <BookmarkButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
