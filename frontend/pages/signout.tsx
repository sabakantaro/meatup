import React, { useContext } from "react";
import { signOut } from "@/pages/api/auth";
import { AuthContext } from "@/pages/_app";
import Cookies from "js-cookie";
import router from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {};

function signout({}: Props) {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      const res = await signOut();
      if (res?.status === 200) {
        setIsSignedIn(false);
        setCurrentUser(undefined);
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");
        router.push("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className='flex flex-col items-center h-screen bg-gray-100'>
        <div className='flex flex-col items-center justify-center bg-white rounded-lg p-10 mt-10'>
          <h1 className='text-3xl font-bold mb-8'>Sign Out</h1>
          <button
            className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full'
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <button
            className='border border-red-400 hover:bg-red-600 text-red-400 py-2 px-4 rounded w-full mt-3'
            onClick={() => router.push("/")}
          >
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default signout;
