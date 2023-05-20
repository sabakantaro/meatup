import React, { useEffect, useState } from "react";

function MediumCard({ item }: any) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = item.image;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [item.image]);

  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      {!imageLoaded ? (
        <div className="animate-pulse bg-gray-200 rounded-lg h-80 w-80" />
      ) : (
        <div className="relative h-80 w-80">
          <img alt="" src={item.image} className="rounded-lg" />
        </div>
      )}
      <div>
        <h2>{item.title}</h2>
      </div>
    </div>
  );
}

export default MediumCard;
