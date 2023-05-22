import React, { useEffect, useState, useCallback } from "react";
import Avatar from "@/components/users/Avatar";
import { getChatrooms } from "@/pages/api/chatroom";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const Chatrooms = () => {
  const [loading, setLoading] = useState(true);
  const [chatrooms, setChatrooms] = useState([]);
  const router = useRouter();

  const handleGetChatrooms = useCallback(async () => {
    try {
      const res = await getChatrooms();
      if (res.status === 200) {
        setChatrooms(res.data.chatrooms);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    handleGetChatrooms();
  }, [handleGetChatrooms]);

  return (
    <>
      <Head>
        <title>Meatup | Chatrooms Page</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <div className='bg-gray-100'>
        <Header />
        {!loading ? (
          chatrooms.length > 0 ? (
            <div className='gap-4 h-screen max-w-screen-md m-auto'>
              {chatrooms.map((chatroom: any) => (
                <div
                  key={chatroom.id}
                  className='bg-white rounded-lg shadow-md cursor-pointer transition duration-300 hover:shadow-lg m-1'
                  onClick={() =>
                    router.push(`/chatrooms/${chatroom.chatroom.id}`)
                  }
                >
                  <div className='p-4 flex items-start'>
                    <div className='mr-3'>
                      <Avatar
                        src={chatroom.otherUser?.image.url}
                        userName={chatroom.otherUser?.name}
                      />
                    </div>
                    <div className='flex flex-col flex-grow'>
                      <h4 className='text-lg font-semibold'>
                        {chatroom.otherUser?.name}
                      </h4>
                      <p className='text-gray-500 line-clamp-3'>
                        {chatroom.lastMessage === null
                          ? "No messages"
                          : chatroom.lastMessage.content.length > 30
                          ? chatroom.lastMessage.content.substr(0, 30) + "..."
                          : chatroom.lastMessage.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center min-h-[400px]'>
              <div>
                <img
                  src='/meatup_logo.png'
                  alt='empty'
                  className='object-contain h-10 grayscale'
                />
              </div>
              <p className='text-gray-500 pt-3'>No chat for now.</p>
            </div>
          )
        ) : null}
        <Footer />
      </div>
    </>
  );
};

export default Chatrooms;
