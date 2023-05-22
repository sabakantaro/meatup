import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { AuthContext } from "@/pages/_app";
import { signUp } from "@/pages/api/auth";
import { SignUpData } from "@/typings";
import Header from "@/components/Header";
import Head from "next/head";

const SignUp: React.FC = () => {
  const router = useRouter();
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data: SignUpData = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    try {
      const res = await signUp(data);
      console.log(res);

      if (res.status === 200) {
        // Account creation and signing in simultaneously
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        router.push("/");

        console.log("Signed in successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Meatup | Sign Up Page</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header />
      <form
        noValidate
        autoComplete='off'
        className='flex justify-center items-center h-screen'
      >
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <h2 className='text-center text-2xl font-bold mb-6'>Sign Up</h2>
          <div className='mb-4'>
            <input
              className='border border-gray-300 rounded-md px-4 py-2 w-full'
              type='text'
              placeholder='Name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='mb-4'>
            <input
              className='border border-gray-300 rounded-md px-4 py-2 w-full'
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='mb-4'>
            <input
              className='border border-gray-300 rounded-md px-4 py-2 w-full'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className='mb-6'>
            <input
              className='border border-gray-300 rounded-md px-4 py-2 w-full'
              type='password'
              placeholder='Confirm Password'
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </div>
          <div className='text-center'>
            <button
              className='bg-red-500 text-white py-2 px-4 rounded-md w-full'
              disabled={!name || !email || !password || !passwordConfirmation}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
