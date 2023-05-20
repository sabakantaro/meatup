import React, { useCallback, useState } from "react";
import { createPlace } from "@/pages/api/place";

const borderStyles = {
  borderColor: "gray-400",
  borderWidth: 1,
};

const PostForm = () => {
  const [location, setLocation] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const uploadImage = useCallback((e: any) => {
    const file = e.target.files[0];
    setImage(file);
  }, []);

  const previewImage = useCallback((e: any) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  }, []);

  const createFormData = () => {
    const formData = new FormData();

    formData.append("location", location);
    formData.append("longitude", longitude as any);
    formData.append("latitude", latitude as any);
    if (image) formData.append("image", image);

    return formData;
  };

  const handleCreatePost = async (e: any) => {
    e.preventDefault();

    const data = createFormData();

    await createPlace(data).then(() => {
      setLocation("");
      setLongitude(0);
      setLatitude(0);
      setPreview("");
      setImage(null);
    });
  };

  return (
    <>
      <form className='flex flex-col' onSubmit={handleCreatePost}>
        <textarea
          placeholder='Hello World'
          className='border border-gray-300 rounded-md p-2 mb-4'
          rows={4}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type='float'
          placeholder='Hello World'
          className='border border-gray-300 rounded-md p-2 mb-4'
          value={latitude}
          onChange={(e: any) => setLatitude(e.target.value)}
        />
        <input
          type='float'
          placeholder='Hello World'
          className='border border-gray-300 rounded-md p-2 mb-4'
          value={longitude}
          onChange={(e: any) => setLongitude(e.target.value)}
        />
        <div className='mb-4'>
          <label htmlFor='icon-button-file' className='cursor-pointer'>
            <input
              accept='image/*'
              id='icon-button-file'
              type='file'
              className='hidden'
              onChange={(e) => {
                uploadImage(e);
                previewImage(e);
              }}
            />
            Upload Image
          </label>
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded-md self-start'
          disabled={!location || location.length > 140}
        >
          Post
        </button>
      </form>
      {preview && (
        <div className='border border-gray-400 rounded-md mt-8 p-2'>
          <button
            className='absolute top-0 right-0 p-2 text-red-500 hover:text-red-700'
            onClick={() => setPreview("")}
          >
            Remove
          </button>
          <img src={preview} alt='Preview' className='w-full' />
        </div>
      )}
    </>
  );
};

export default PostForm;
