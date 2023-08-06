import React from "react";
import { Event } from "@/typings";
import Avatar from "../users/Avatar";

type Props = {
  event: Event;
};

const HostInfoCard: React.FC<Props> = ({ user }: any) => {
  return (
    <>
      <div className='flex flex-row items-center'>
        <p className='pr-4'>
          <Avatar
            src={user?.image?.url}
            alt='User Avatar'
            userName={user?.name}
          />
        </p>
        <div className=''>
          <h4 className='text-sm font-medium leading-5'>{user?.name}</h4>
          <p className='flex flex-row text-gray-600 text-sm mt-1 h-5 overflow-ellipsis overflow-hidden'>
            {user?.profile
              ? user?.profile
              : "Hi there! I'm " + user?.name + "."}
          </p>
        </div>
      </div>
    </>
  );
};

export default HostInfoCard;
