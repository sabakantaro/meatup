import React from 'react';
import { Event } from '@/typings';
import moment from 'moment';
import Map from '../Map';
import HostInfoCard from './HostInfoCard';

type SummaryProps = {
  event: Event;
};

const Summary: React.FC<SummaryProps> = ({ event }) => {
  return (
    <>
      <div className='bg-white lg:rounded-2xl p-4 mb-4'>
        <HostInfoCard
          user={event?.user}
        />
      </div>
      <div className='bg-white lg:rounded-2xl'>
        <div className='p-4'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              strokeWidth={1.5}
              stroke='gray'
              className='w-8 h-6 mr-2'
            >
              <path d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            <p className='text-base text-gray-700'>
              {event?.meetingDatetime &&
                moment(new Date(event?.meetingDatetime)).format(
                  'dddd, MMMM DD, YYYY HH:mm'
                )}
            </p>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              strokeWidth={1.5}
              stroke='gray'
              className='w-8 h-6 mr-2'
            >
              <path d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
              <path d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
            </svg>
            <p className='text-base text-gray-700'>{event?.place?.location}</p>
          </div>
        </div>
        <div style={{ width: '100%', height: 240 }}>
          <Map events={[event]} />
        </div>
      </div>
    </>
  );
};

export default Summary;
