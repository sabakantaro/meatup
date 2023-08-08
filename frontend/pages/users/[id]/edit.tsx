import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useContext, useState, useEffect } from 'react';
import AvatarLarge from '@/components/users/AvatarLarge';
import { AuthContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import { updateUser } from '@/pages/api/user';
import moment from 'moment';
import Head from 'next/head';
import { getUser } from '@/pages/api/user';
import { User } from '@/typings';

const Edit = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = React.useState<User>();
  const router = useRouter();
  const { id } = router.query;
  const numericId = Number(id);
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const saveDisabled = name === '';
  const nameInvalid = name && 20 < name.length;

  useEffect(() => {
    const handleGetUser = async () => {
      if (!numericId) {
        return;
      }

      try {
        const res = await getUser(numericId);
        if (res?.status === 200) {
          const { user } = res.data;
          setUser(user);
          setName(user.name);
          setProfile(user.profile);
          setImage(user.image?.url);
          setPreview(user.image?.url);
          setBirthDate(moment(user.birthDate)?.format('YYYY-MM-DD'));
          setGender(user.gender);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetUser();
  }, [numericId, router]);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const file = e.target.files[0]
    setImage(file as unknown as string);
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

    formData.append('user[name]', name);
    formData.append('user[profile]', profile);
    formData.append('user[birth_date]', birthDate);
    formData.append('user[gender]', gender);
    if (image !== user?.image?.url) {
      formData.append('user[image]', image);
    }

    return formData;
  };

  const handleEditProfile = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!numericId) {
      return;
    }

    const data = createFormData();

    try {
      const res = await updateUser(numericId, data);
      if (currentUser?.id === numericId && res?.status === 200) {
        setTimeout(() => {
          router.push(`/users/${id}/show`);
        }, 500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Meatup | User Edit page</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header />
      <div className='w-full max-w-screen-sm mx-auto px-4 md:px-8 my-6'>
        <main className='flex flex-col space-y-3 items-start flex-grow lg:px-15'>
          <h1 className='text-3xl font-bold mb-6'>Edit profile</h1>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-3 md:space-y-0 items-center w-full'>
            <div className='relative flex flex-col'>
              <AvatarLarge
                userName={user?.name}
                src={preview || ''}
              />
            </div>
            <div className='mb-4'>
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
                <p className='w-100 whitespace-nowrap rounded-lg border p-3 text-gray-500 hover:text-gray-400 hover:border-gray-400'>
                  Choose from library
                </p>
              </label>
            </div>
          </div>
          <h4 className='block text-lg font-medium text-gray-700'>Name*</h4>
          <input
            type='text'
            id='name'
            placeholder='Your name'
            name='name'
            className={`w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray-400 hover:border-gray-500 focus:border-teal-700 pr-7 border-gray-400`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameInvalid && (
            <p className='text-red-500 text-xs italic'>
              Please write text within 20 letters
            </p>
          )}
          <h4 className='block text-lg font-medium text-gray-700'>Profile</h4>
          <textarea
            rows={4}
            id='profile'
            placeholder='Your profile'
            name='profile'
            className='w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray-400 hover:border-gray-500 focus:border-teal-700 pr-7 border-gray-400'
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />
          <h4 className='block text-lg font-medium text-gray-700'>
            Birth date
          </h4>
          <input
            type='date'
            id='birthDate'
            placeholder='Your birth date'
            name='birthDate'
            className='w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray-400 hover:border-gray-500 focus:border-teal-700 pr-7 border-gray-400'
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <h4 className='block text-lg font-medium text-gray-700'>Gender</h4>
          <select
            id='gender'
            name='gender'
            className='w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray-400 hover:border-gray-500 focus:border-teal-700 pr-7 border-gray-400'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='other'>other</option>
          </select>
          <button
            className='text-white bg-red-500 rounded-lg p-4 cursor-pointer'
            onClick={handleEditProfile}
            disabled={saveDisabled}
            style={saveDisabled ? { cursor: 'not-allowed' } : {}}
          >
            Save Changes
          </button>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
