import React, { useEffect, useState } from "react";

const TitleHeader = ({ title, hostName }: any) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 230) {
        setIsSticky(true);
      } else if (window.scrollY < 160) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky ? "sticky top-0 bg-white py-2" : "py-2 lg:py-6"
      } transition-transform duration-500 z-50 px-5 w-full border-b-[2px] bg-white`}
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='md:max-w-screen mx-auto'>
          <h1
            className={`${
              isSticky ? "text-lg" : "text-3xl"
            } overflow-ellipsis overflow-hidden font-bold leading-snug`}
          >
            {title}
          </h1>
          {!isSticky && (
            <p className='text-gray-500 text-sm mt-1'>Hosted by {hostName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
