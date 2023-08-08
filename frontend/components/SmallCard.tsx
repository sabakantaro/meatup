import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Event } from '@/typings';

type SmallCardProps = {
  item: Event;
};

const SmallCard: React.FC<SmallCardProps> = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!item?.place?.image?.url) {
      return;
    }
    const img = new Image();
    img.src = item?.place?.image?.url;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [item]);

  return (
    <div
      className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'
      onClick={() => router.push(`/events/${item.id}/show`)}
    >
      {!imageLoaded ? (
        <div className='animate-pulse bg-gray-200 rounded-lg h-16 w-16' />
      ) : (
        <div className='relative h-16 w-16'>
          <img
            alt=''
            src={item?.place?.image?.url}
            className='rounded-lg h-16 w-16'
          />
        </div>
      )}
      <div>
        <h2 className='overflow-ellipsis line-clamp-1'>{item.title}</h2>
        <h3 className='overflow-ellipsis line-clamp-1'>
          {item.place.location}
        </h3>
      </div>
    </div>
  );
};

export default SmallCard;
