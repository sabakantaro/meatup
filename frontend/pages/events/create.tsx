import React, { useContext, useEffect, useState } from "react";
import { createEvent } from "@/pages/api/event";
import { getPlaces } from "@/pages/api/place";
import { AuthContext } from "../_app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const PostForm = () => {
  const { currentUser } = useContext(AuthContext);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [placeId, setPlaceId] = useState(0);
  const [places, setPlaces] = useState([]);
  const [meetingDatetime, setMeetingDatetime] = useState(new Date());

  useEffect(() => {
    const handleGetPlaces = async () => {
      try {
        const res = await getPlaces();
        console.log(res);

        if (res?.status === 200) {
          setPlaces(res?.data.places as any);
        } else {
          console.log("No places");
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetPlaces();
  }, []);

  const createFormData = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("meeting_datetime", meetingDatetime as any);
    formData.append("description", description);
    formData.append("userId", currentUser?.id as any);
    formData.append("placeId", placeId as any);

    return formData;
  };

  const handleCreatePost = async (e: any) => {
    e.preventDefault();

    const data = createFormData();

    await createEvent(data).then(() => {
      setDescription("");
      setTitle("");
      setMeetingDatetime(new Date());
    });
  };

  return (
    <>
    <Head>
        <title>Meatup | Create Event Page</title>
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
              Title
            </label>
            <input
              type='text'
              id='title'
              className='border border-gray-300 rounded-md p-2 w-full'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-lg font-medium text-gray-700'
            >
              Description
            </label>
            <textarea
              id='description'
              className='border border-gray-300 rounded-md p-2 w-full h-32 resize-none'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='meetingDatetime'
              className='block text-lg font-medium text-gray-700'
            >
              Meeting Datetime
            </label>
            <input
              type='datetime-local'
              id='meetingDatetime'
              className='border border-gray-300 rounded-md p-2 w-full'
              value={meetingDatetime as any}
              onChange={(e) => setMeetingDatetime(e.target.value as any)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='placeId'
              className='block text-lg font-medium text-gray-700'
            >
              Select a Place
            </label>
            <select
              id='placeId'
              className='border border-gray-300 rounded-md p-2 w-full'
              value={placeId}
              onChange={(e) => setPlaceId(e.target.value as any)}
            >
              <option value=''>Select a place</option>
              {places?.map((place: any) => (
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
              disabled={!description || description.length > 140}
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
