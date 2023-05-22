import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useCallback, useContext, useState } from "react";
import AvatarLarge from "@/components/users/AvatarLarge";
import { AuthContext } from "@/pages/_app";
import { useRouter } from "next/router";
import { updateUser } from "@/pages/api/user";
import moment from "moment";

type Props = {
  result: any;
};

const show = ({ result }: Props) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState(result?.user?.name);
  const [profile, setProfile] = useState(result?.user?.profile);
  const [image, setImage] = useState(result?.user?.image?.url);
  const [preview, setPreview] = useState(result?.user?.image?.url);
  const [birthDate, setBirthDate] = useState(
    result?.user?.birth_date &&
      moment(result?.user?.birth_date).format("YYYY-MM-DD")
  );
  const [gender, setGender] = useState(result?.user?.gender);
  console.log(birthDate);

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

    formData.append("user[name]", name);
    formData.append("user[profile]", profile as any);
    formData.append("user[birth_date]", birthDate as any);
    formData.append("user[gender]", gender as any);
    if (image !== result?.user?.image?.url) {
      formData.append("user[image]", image);
    }

    return formData;
  };

  const handleEditProfile = async (e: any) => {
    e.preventDefault();

    const data = createFormData();

    try {
      const res = await updateUser(id as string, data);
      if (currentUser?.id == id && res) {
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
      <Header />
      <div className='w-full max-w-screen-sm mx-auto px-4 md:px-8 my-6'>
        <main className='flex flex-col space-y-3 items-start flex-grow lg:px-15'>
          <h1 className='text-3xl font-bold mb-6'>Edit profile</h1>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-3 md:space-y-0 items-center w-full'>
            <div className='relative flex flex-col'>
              <AvatarLarge
                userName={result?.user?.name}
                src={preview || ""}
                size={32}
              />
            </div>
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
                <p className='w-100 whitespace-nowrap rounded-lg border p-3 text-gray-500 hover:text-gray-400 hover:border-gray-400'>
                  Choose from library
                </p>
              </label>
            </div>
          </div>
          <h4 className='text-xl font-bold'>Name</h4>
          <input
            type='text'
            id='name'
            placeholder='Your name'
            name='name'
            className='w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4 className='text-xl font-bold'>Profile</h4>
          <textarea
            rows={4}
            id='profile'
            placeholder='Your profile'
            name='profile'
            className='w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5'
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />
          <h4 className='text-xl font-bold'>Birth date</h4>
          <input
            type='date'
            id='birthDate'
            placeholder='Your birth date'
            name='birthDate'
            className='w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5'
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <h4 className='text-xl font-bold'>Gender</h4>
          <select
            id='gender'
            name='gender'
            className='w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5'
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
          >
            Save Changes
          </button>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default show;

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { id } = query;

  try {
    const result = await fetch(
      (process.env.NEXT_PUBLIC_AUTH_URL as string) + `/users/${id}`
    ).then((res) => res.json());

    return {
      props: {
        result,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        result: {},
      },
    };
  }
}
