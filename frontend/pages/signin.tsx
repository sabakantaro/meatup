import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { AuthContext } from "@/pages/_app";
import { signIn } from "@/pages/api/auth";
import { SignInData } from "@/typings";
import Header from "@/components/Header";

const SignIn: React.FC = () => {
  const router = useRouter();
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data: SignInData = {
      email: email,
      password: password,
    };

    try {
      const res = await signIn(data);
      console.log(res);

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto'>
        <h2 className='text-2xl font-bold text-center mb-6'>Sign In</h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            disabled={!email || !password}
            onSubmit={handleSubmit}
          >
            Sign In
          </button>
          <a
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
            href='/signup'
          >
            Create an account
          </a>
        </div>
      </form>
    </>
  );
};

export default SignIn;
