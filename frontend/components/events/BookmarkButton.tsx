import React, { useState, useEffect, useContext } from 'react';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon as BookmarkOutlineIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '@/pages/_app';
import { createBookmark, deleteBookmark } from '@/pages/api/bookmark';
import { getCurrentUser } from '@/pages/api/auth';
import { Event } from '@/typings';

type BookmarkButtonProps = {
  item: Event;
};

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ item }) => {
  const { isSignedIn, currentUser, setCurrentUser } = useContext(AuthContext);
  const [bookmark, setBookmark] = useState(false);

  const handleBookmarks = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isSignedIn) {
      return;
    }

    if (bookmark) {
      const bookmarkId = currentUser?.bookmarks?.find(
        (b) => b?.eventId === item?.id
      )?.id;
      if (bookmarkId) {
        await deleteBookmark(item?.id, bookmarkId);
        setBookmark(false);
      }
    } else {
      const data: any = {
        eventId: String(item?.id),
        userId: currentUser?.id,
      };
      await createBookmark(item?.id, data);
      setBookmark(true);

      try {
        const res = await getCurrentUser();
        if (res?.status === 200) {
          setCurrentUser(res?.data.currentUser);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      setBookmark(
        currentUser?.bookmarks?.some((b: any) => b?.eventId === item?.id)!
      );
    }
  }, [isSignedIn, currentUser]);

  return (
    <div>
      <div
        className='flex items-center z-10'
        onClick={(e: any) => handleBookmarks(e)}
      >
        {isSignedIn && bookmark ? (
          <BookmarkIcon className='h-6 text-teal-700 cursor-pointer' />
        ) : (
          <BookmarkOutlineIcon className='h-6 text-gray-500 hover:text-gray-400 cursor-pointer' />
        )}
      </div>
    </div>
  );
};

export default BookmarkButton;
