import React from 'react';
import Avatar from '../users/Avatar';
import Modal from '../Modal';
import { Comment } from '@/typings';

type CommentsProps = {
  comment: Comment;
  handleDeleteComment: () => void;
};

const Comments: React.FC<CommentsProps> = ({
  comment,
  handleDeleteComment,
}) => {
  const [isVisible, setIsVisivle] = React.useState(false);
  const currentDate = new Date() as unknown as number;
  const createdDate = new Date(comment?.createdAt) as unknown as number;
  const timeDifference = Math.floor(
    (currentDate - createdDate) / (1000 * 60 * 60 * 24)
  );
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const formattedTimeDifference = formatter.format(-timeDifference, 'day');

  return (
    <>
      <div className='relative py-5'>
        <div className='flex'>
          <div className='hidden md:block'>
            <Avatar userName={comment?.user?.name} />
          </div>
          <div className='flex-1'>
            <div className='bg-white px-4 pt-4 pb-5 ml-2 rounded-lg'>
              <div className='flex justify-between'>
                <div>
                  <a className='text-xs sm:text-sm text-titleColor font-semibold hover:no-underline cursor-pointer'>
                    {comment?.user?.name}
                  </a>
                </div>
                <div className='cursor-pointer'>
                  <div className='relative inline-block'>
                    <button
                      className='flex flex-row items-center space-x-2'
                      onClick={() => setIsVisivle(true)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                      >
                        <path d='M6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z'></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className='mt-2.5 text-xs sm:text-sm text-titleColor font-normal'>
                  {comment?.content}
                </p>
              </div>
            </div>
            <div className='flex justify-end px-3 pt-1 items-center'>
              <div className='flex items-center'>
                <div className='pl-2'>
                  <p className='text-xs sm:text-sm text-gray6 pr-1'>
                    {formattedTimeDifference}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pl-12 sm:pl-15'></div>
      {isVisible && (
        <Modal
          children={
            <>
              <div
                className='hover:text-gray-500 cursor-pointer p-1'
                onClick={() => {
                  console.log('Reported');
                  setIsVisivle(false);
                }}
              >
                Report
              </div>
              <div
                className='hover:text-gray-500 cursor-pointer p-1'
                onClick={() => {
                  handleDeleteComment();
                  setIsVisivle(false);
                }}
              >
                Delete
              </div>
            </>
          }
          onClose={() => setIsVisivle(false)}
        />
      )}
    </>
  );
};

export default Comments;
