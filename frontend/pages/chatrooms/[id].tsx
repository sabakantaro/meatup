import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import Avatar from '@/components/users/Avatar';
import { getChatroom } from '@/pages/api/chatroom';
import { createMessage } from '@/pages/api/message';
import { User, Message } from '@/typings';
import { AuthContext } from '@/pages/_app';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';

const Chatroom: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const numericId = Number(id);
  const [loading, setLoading] = useState<boolean>(true);
  const [otherUser, setOtherUser] = useState<User>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState<string>('');

  const handleGetChatroom = useCallback(async () => {
    try {
      if (!numericId) {
        return;
      }
      const res = await getChatroom(numericId);
      if (res?.status === 200) {
        setOtherUser(res?.data.otherUser);
        setMessages(res?.data.messages);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [numericId]);

  useEffect(() => {
    handleGetChatroom();
  }, [handleGetChatroom]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: Message = {
      chatroomId: numericId,
      userId: currentUser?.id,
      content: content,
    };
    try {
      const res = await createMessage(data);
      if (res?.status === 200) {
        setMessages([...messages, res.data.message]);
        setContent('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Meatup | Chatroom - {otherUser?.name}</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header />
      {!loading ? (
        <div className='flex flex-col flex-grow bg-gray-100 max-w-screen-md m-auto shadow-sm'>
          <div className='flex items-center justify-between bg-white shadow-sm'>
            <span onClick={() => router.back()} className='cursor-pointer'>
              <ArrowLeftIcon className='h-6 w-6 m-2' />
            </span>
            <h1 className='text-2xl font-bold m-4'>{otherUser?.name}</h1>
            <div className='w-6 m-2'></div>
          </div>
          <div className='container mx-auto px-4 py-6'>
            <div className='space-y-4'>
              {messages.map((message, index) => {
                const isSentByCurrentUser = message.userId === currentUser?.id;
                const messageClass = isSentByCurrentUser
                  ? 'flex justify-end'
                  : 'flex justify-start';
                const bubbleClass = isSentByCurrentUser
                  ? 'bg-red-400 text-white'
                  : 'bg-gray-200';
                const timeClass = isSentByCurrentUser
                  ? 'text-gray-400'
                  : 'text-gray-400';
                return (
                  <div key={index} className={`flex ${messageClass}`}>
                    {!isSentByCurrentUser && (
                      <div className='flex items-end justify-center pr-3'>
                        <Avatar
                          userName={otherUser?.name}
                          src={otherUser?.image?.url || ''}
                        />
                      </div>
                    )}
                    <div>
                      {!isSentByCurrentUser && (
                        <p className='text-sm text-gray-600 mb-1'>
                          {otherUser?.name}
                        </p>
                      )}
                      <div
                        className={`max-w-md py-3 px-5 rounded-lg shadow ${bubbleClass}`}
                      >
                        <p className='text-base'>{message.content}</p>
                      </div>
                    </div>
                    <div className='flex items-end justify-center pl-2'>
                      <p className={`text-xs mt-1 ${timeClass}`}>
                        {moment(message.createdAt).format('h:mm a')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='container mx-auto mt-2 p-4 '>
            <div className='flex items-center'>
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Type your message...'
                className='flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none'
              />
              <button
                disabled={!content}
                onClick={handleSubmit}
                className='ml-2 p-2 rounded-full bg-red-400 text-white hover:bg-red-600 focus:outline-none'
              >
                <PaperAirplaneIcon className='h-6' />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default Chatroom;
