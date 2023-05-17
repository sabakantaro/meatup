import React from "react";

const Avatar = ({ src, userName }: any) => {
  return (
    <div className='inline-block rounded-full overflow-hidden bg-red-400'>
      {src ? (
        <img src={src} alt='User Avatar' className='object-cover w-12 h-12' />
      ) : (
        <div className='flex items-center justify-center w-12 h-12 text-white text-xl font-bold uppercase'>
          {userName.charAt()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
