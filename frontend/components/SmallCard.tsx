import React, { useEffect, useState } from "react";

function SmallCard({ item }: any) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = item.image;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [item.image]);

  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {!imageLoaded ? (
        <div className="animate-pulse bg-gray-200 rounded-lg h-16 w-16" />
      ) : (
        <div className="relative h-16 w-16">
          <img alt="" src={item.image} className="rounded-lg" />
        </div>
      )}
      <div>
        <h2>{item.location}</h2>
        <h3>{item.distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
