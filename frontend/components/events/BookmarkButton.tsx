import React, { useState, useCallback, useEffect, useContext } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutlineIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "@/pages/_app";
import { createBookmark, deleteBookmark } from "@/pages/api/bookmark";

type Props = {
  item: any;
};

const BookmarkButton = ({ item }: Props) => {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  const [bookmark, setBookmark] = useState(false);

  const setUsersBookmarks = useCallback(() => {
    if (isSignedIn) {
      setBookmark(
        currentUser?.bookmarks?.some((b: any) => b?.eventId === item?.id)
      );
    }
  }, [isSignedIn, currentUser, item]);

  const handleBookmarks = useCallback(
    async (e: any) => {
      e.stopPropagation();
      if (!isSignedIn) {
        return;
      }
      if (bookmark) {
        await deleteBookmark(
          String(item?.id),
          currentUser?.bookmarks.filter((b: any) => b?.eventId === item?.id)[0]
            ?.id
        );
        setBookmark(false);
      } else {
        const data: any = {
          eventId: String(item?.id),
          userId: currentUser?.id,
        };
        await createBookmark(String(item?.id), data);
        setBookmark(true);
      }
    },
    [currentUser, item, bookmark]
  );

  useEffect(() => {
    setUsersBookmarks();
  }, [setUsersBookmarks]);

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
