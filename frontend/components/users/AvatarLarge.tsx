import React from "react";

type AvatarProps = {
  src?: string;
  userName?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, userName = "user" }) => {
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
          {userName.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
