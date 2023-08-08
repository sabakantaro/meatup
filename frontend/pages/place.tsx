import React, { useState } from 'react';
import { createPlace } from '@/pages/api/place';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrashIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';

const PostForm = () => {
  const [location, setLocation] = useState('');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const file = e.target.files[0];
    setImage(String(file));
  };

  const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  const createFormData = () => {
    const formData = new FormData();

    formData.append('location', location);
    formData.append('longitude', longitude as any);
    formData.append('latitude', latitude as any);
    if (image) formData.append('image', image);

    return formData;
  };

  const handleCreatePost = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const data = createFormData();

    await createPlace(data).then(() => {
      setLocation('');
      setLongitude(0);
      setLatitude(0);
      setPreview('');
      setImage('');
    });
  };

  return (
    <>
      <Head>
        <title>Meatup | Create Place Page</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header />
      <form
        className='flex flex-col max-w-screen-sm mx-auto py-5'
        onSubmit={handleCreatePost}
      >
        <h1 className='text-2xl font-semibold mb-4'>Create Place</h1>
        <h4 className='text-lg font-semibold mb-4'>Location</h4>
        <textarea
          placeholder='location'
          className='border border-gray-300 rounded-md p-2 mb-4'
          rows={4}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <h4 className='text-lg font-semibold mb-4'>Latitude</h4>
        <input
          type='float'
          placeholder='latitude'
          className='border border-gray-300 rounded-md p-2 mb-4'
          value={latitude}
          onChange={(e) => setLatitude(Number(e.target.value))}
        />
        <h4 className='text-lg font-semibold mb-4'>Longitude</h4>
        <input
          type='float'
          placeholder='longitude'
          className='border border-gray-300 rounded-md p-2 mb-4'
          value={longitude}
          onChange={(e) => setLongitude(Number(e.target.value))}
        />
        <h4 className='text-lg font-semibold mb-4'>Image</h4>
        <div className='mb-4'>
          {preview && (
            <div className='border border-gray-300 rounded-md p-2 mb-4'>
              <img src={preview} alt='Preview' className='w-full' />
            </div>
          )}
          <div className='flex items-center mb-4'>
            <label htmlFor='icon-button-file' className='cursor-pointer'>
              <input
                accept='image/*'
                id='icon-button-file'
                type='file'
                className='hidden'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  uploadImage(e);
                  previewImage(e);
                }}
              />
              <span className='bg-gray-200 text-gray-500 p-3 rounded-md'>
                Upload Image
              </span>
            </label>
            <div className='flex items-center'>
              {preview && (
                <button
                  type='button'
                  id='removeImage'
                  className='bg-gray-200 text-gray-500 p-2.5 rounded-md ml-4'
                  onClick={() => {
                    setImage('');
                    setPreview('');
                  }}
                >
                  <TrashIcon className='h-6 w-6' />
                </button>
              )}
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='bg-red-500 text-white py-2 px-4 rounded-md self-start'
          disabled={!location || location.length > 140}
        >
          Post
        </button>
      </form>
      <Footer />
    </>
  );
};

export default PostForm;
