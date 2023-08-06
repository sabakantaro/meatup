import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Avatar from "@/components/users/Avatar";
import { getNotifications, updateNotification } from "@/pages/api/notification";
import { Notification } from "@/typings";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const NotificationsList = () => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const history = useRouter();

  const handleGetNotifications = async () => {
    try {
      const res = await getNotifications();
      if (res?.status === 200) {
        setNotifications(res.data.notifications);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetNotifications();
  }, []);

  const handleIsChecked = async (notification: Notification) => {
    try {
      const res = await updateNotification(String(notification.id));
      if (res?.status === 200) {
        history.push(notification.linkUrl);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Meatup | Notification Page</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header />
      <div className='bg-gray-100 gap-4 h-screen max-w-screen-md m-auto'>
        {!loading && (
          notifications.length > 0 ? (
            notifications.map((notification) => {
              return (
                <div
                  key={notification?.id}
                  className='bg-white rounded-lg shadow-md cursor-pointer transition duration-300 hover:shadow-lg m-1'
                >
                  <div
                    onClick={() => {
                      handleIsChecked(notification);
                    }}
                    className='relative p-4 flex items-start'
                  >
                    {!notification?.isChecked && (
                      <div className='absolute top-0 right-0 w-4 h-4 bg-red-400 rounded-full' />
                    )}
                    <div className='flex items-center p-0'>
                      <div className='mr-3'>
                        <Avatar alt='avatar' src={notification.imageUrl} />
                      </div>
                      <div className='flex flex-col flex-grow'>
                        <h4 className='text-xl pb-2 overflow-ellipsis line-clamp-2'>
                          {notification.content}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='flex flex-col items-center justify-center pt-10'>
              <div>
                <img
                  src='/meatup_logo.png'
                  alt='empty'
                  className='object-contain h-10 grayscale'
                />
              </div>
              <p className='text-gray-500 pt-3'>No notifications for now.</p>
            </div>
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default NotificationsList;
