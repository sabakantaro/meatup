import React from 'react';
import Avatar from '../users/Avatar';
import { User } from '@/typings';

interface HostInfoCardProps {
  user: User;
}

const HostInfoCard: React.FC<HostInfoCardProps> = ({ user }) => {
  return (
    <>
      <div className='flex flex-row items-center'>
        <div className='pr-4'>
          <Avatar src={user?.image?.url} userName={user?.name} />
        </div>
        <div className=''>
          <h4 className='text-sm font-medium leading-5'>{user?.name}</h4>
          <p className='flex flex-row text-gray-600 text-sm mt-1 h-5 overflow-ellipsis overflow-hidden'>
            {user?.profile
              ? user?.profile
              : "Hi there! I'm " + user?.name + '.'}
          </p>
        </div>
      </div>
    </>
  );
};

export default HostInfoCard;
