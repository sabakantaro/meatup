import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import { createEvent } from '@/pages/api/event';
import { getPlaces } from '@/pages/api/place';
import { AuthContext } from '../_app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Place } from '@/typings';
import moment from 'moment';

const PostForm: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [placeId, setPlaceId] = useState<number>(0);
  const [places, setPlaces] = useState<Place | Place[]>();
  const [meetingDatetime, setMeetingDatetime] = useState<string>('');
  const postDisabled =
    title === '' ||
    description == '' ||
    description.length > 500 ||
    Array(places).length === 0;
  const descriptionInvalid = description && 500 < description.length;
  const titleInvalid = title && 50 < title.length;

  useEffect(() => {
    const handleGetPlaces = async () => {
      try {
        const res = await getPlaces();
        if (res?.status === 200) {
          setPlaces(res?.data.places);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetPlaces();
  }, []);

  const createFormData = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('meeting_datetime', meetingDatetime.toString());
    formData.append('description', description.toString());
    formData.append('userId', currentUser?.id?.toString()!);
    formData.append('placeId', placeId.toString());

    return formData;
  };

  const handleCreatePost = async (e: any) => {
    e.preventDefault();

    const data = createFormData();

    await createEvent(data).then(() => {
      setDescription('');
      setTitle('');
      setMeetingDatetime('');
    });
  };

  const filteredPlaces = Array.isArray(places)
    ? places.filter((place) => place.location)
    : [];

  return (
    <>
      <Head>
        <title>Meatup | Become a Host Page</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header />
      <div className='container mx-auto px-4 py-8 max-w-screen-sm'>
        <form onSubmit={handleCreatePost}>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-lg font-medium text-gray-700'
            >
              Title*
            </label>
            <input
              type='text'
              id='title'
              className={`border ${
                titleInvalid ? 'border-red-500' : 'border-gray-300'
              } rounded-md p-2 w-full`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {titleInvalid && (
              <p className='text-red-500 text-xs italic'>
                Please write text within 20 letters
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-lg font-medium text-gray-700'
            >
              Description*
            </label>
            <textarea
              id='description'
              className={`border ${
                descriptionInvalid ? 'border-red-500' : 'border-gray-300'
              } rounded-md p-2 w-full h-32 resize-none `}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {descriptionInvalid && (
              <p className='text-red-500 text-xs italic'>
                Please write text within 200 letters
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='meetingDatetime'
              className='block text-lg font-medium text-gray-700'
            >
              Meeting Datetime*
            </label>
            <input
              type='datetime-local'
              id='meetingDatetime'
              className='border border-gray-300 rounded-md p-2 w-full'
              value={meetingDatetime as unknown as string}
              onChange={(e) => setMeetingDatetime(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='placeId'
              className='block text-lg font-medium text-gray-700'
            >
              Select a Place*
            </label>
            <select
              id='placeId'
              className='border border-gray-300 rounded-md p-2 w-full'
              value={placeId}
              onChange={(e) =>
                setPlaceId(e.target.value as unknown as SetStateAction<number>)
              }
            >
              <option value=''>Select a place</option>
              {filteredPlaces.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.location}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-4'>
            <button
              type='submit'
              className='bg-red-500 text-white py-2 px-4 rounded-md self-start'
              disabled={postDisabled}
              style={postDisabled ? { cursor: 'not-allowed' } : {}}
            >
              Post
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PostForm;
