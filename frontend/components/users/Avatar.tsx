import React from "react";

const Avatar = ({ src, userName, size = 12 }: any) => {
  return (
    <div
      className={`inline-block rounded-full overflow-hidden bg-red-400 w-${size} h-${size}`}
    >
      {src ? (
        <img
          src={src}
          alt='User Avatar'
          className={`object-cover w-${size} h-${size}`}
        />
      ) : (
        <div
          className={`flex items-center justify-center text-white text-xl font-bold uppercase w-${size} h-${size}`}
        >
          {userName.charAt()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
