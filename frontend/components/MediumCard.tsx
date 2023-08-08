import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Place } from "@/typings";

type MediumCardProps = {
  item: Place;
};

const MediumCard: React.FC<MediumCardProps> = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!item?.image?.url) {
      return;
    }
    const img = new Image();
    img.src = item?.image?.url;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [item.image]);

  return (
    <div
      className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'
      onClick={() => router.push(`/search?location=${item.location}`)}
    >
      {!imageLoaded ? (
        <div className='animate-pulse bg-gray-200 rounded-lg h-80 w-80' />
      ) : (
        <div className='relative h-80 w-80'>
          <img
            alt=''
            src={item?.image?.url}
            className='rounded-lg object-cover h-80 w-80'
          />
        </div>
      )}
      <div>
        <h2>{item.location}</h2>
      </div>
    </div>
  );
}

export default MediumCard;
