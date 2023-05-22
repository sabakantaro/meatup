import React from "react";

const Avatar = ({ src, userName = "user" }: any) => {
  return (
    <div
      className={`inline-block rounded-full overflow-hidden bg-red-400 w-32 h-32`}
    >
      {src ? (
        <img src={src} alt='User Avatar' className={`object-cover w-32 h-32`} />
      ) : (
        <div
          className={`flex items-center justify-center text-white text-xl font-bold uppercase w-32 h-32`}
        >
          {userName.charAt()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
