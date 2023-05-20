import React, { useState, useCallback, useEffect, useContext } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutlineIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import moment from "moment";
import { AuthContext } from "@/pages/_app";
import { createBookmark, deleteBookmark } from "@/pages/api/bookmark";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";

function InfoCard({ item }: any) {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const router = useRouter();

  const setUsersBookmarks = useCallback(() => {
    if (isSignedIn) {
      setBookmark(
        currentUser?.bookmarks?.some((b: any) => b?.eventId === item?.id)
      );
    }
  }, [isSignedIn, currentUser, item]);

  useEffect(() => {
    const img = new Image();
    img.src = item?.place?.image?.url;
    img.onload = () => {
      setImageLoaded(true);
    };
    setUsersBookmarks();
  }, [item, setUsersBookmarks]);

  const handleBookmarks = useCallback(
    async (e: any) => {
      e.stopPropagation();
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

  return (
    <div
      className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'
      onClick={() => router.push(`/events/${item.id}/show`)}
    >
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        {!imageLoaded && (
          <div className='animate-pulse bg-gray-200 rounded-2xl w-full h-full' />
        )}
        {imageLoaded && (
          <img
            alt='Place Image'
            src={item?.place?.image?.url}
            className='rounded-2xl w-full h-full object-cover image-loaded'
          />
        )}
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between text-orange-700 pb-1'>
          <p className=''>
            {item?.meeting_datetime &&
              moment(new Date(item?.meeting_datetime)).format(
                "dddd, MMMM DD, YYYY HH:mm"
              )}
          </p>
        </div>
        <h4 className='text-xl pb-2'>{item.title}</h4>
        <div className='w-10' />
        <p className='text-sm text-gray-500 flex-grow overflow-ellipsis line-clamp-3'>
          {item.description}
        </p>
        <div className='flex justify-between items-end pt-5'>
          <div>
            <p className='text-right font-extralight'>
              {item?.price && item?.price > 0 ? item.price : "FREE"}
            </p>
          </div>
          <div className='flex items-center space-x-5 ml-5'>
            <button className='text-gray-500 hover:text-gray-400'>
              <ShareButton />
            </button>
            <BookmarkButton item={item} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-loaded {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default InfoCard;
