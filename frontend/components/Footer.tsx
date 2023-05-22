import { useContext } from "react";
import { AuthContext } from "@/pages/_app";

function Footer() {
  const { currentUser } = useContext(AuthContext);
  return (
    <footer className='grid grid-cols-1 md:grid-cols-3 gap-y-4 px-8 md:px-32 py-14 bg-slate-800 text-white'>
      <div className='space-y-4 text-xs text-gray-300'>
        <h5 className='font-bold'>ACCOUNT</h5>
        <a
          className='hover:text-gray-400 cursor-pointer block'
          href={`/users/${currentUser?.id}/show`}
        >
          My Page
        </a>
        <a
          className='hover:text-gray-400 cursor-pointer block'
          href='/events/create'
        >
          Become a Host
        </a>
        <a
          className='hover:text-gray-400 cursor-pointer block'
          href='/notifications'
        >
          Notifications
        </a>
        <a
          className='hover:text-gray-400 cursor-pointer block'
          href='/chatrooms'
        >
          Messages
        </a>
        <a className='hover:text-gray-400 cursor-pointer block' href='/signout'>
          Logout
        </a>
      </div>
      <div className='space-y-4 text-xs text-gray-300'>
        <h5 className='font-bold pt-3 md:pt-0'>DISCOVER</h5>
        <a className='hover:text-gray-400 cursor-pointer block' href='/search'>
          Search Events
        </a>
        <a className='hover:text-gray-400 cursor-pointer block' href='/search'>
          Workout place
        </a>
        <a className='hover:text-gray-400 cursor-pointer block' href='/search'>
          Sponsored Event
        </a>
      </div>
      <div className='space-y-4 text-xs text-gray-300'>
        <h5 className='font-bold pt-3 md:pt-0'>MEATUP</h5>
        <a className='hover:text-gray-400 cursor-pointer block' href='/'>
          About Us
        </a>
        <a className='hover:text-gray-400 cursor-pointer block' href='/'>
          Privacy & Policy
        </a>
        <a className='hover:text-gray-400 cursor-pointer block' href='/'>
          Terms of Service
        </a>
      </div>
    </footer>
  );
}

export default Footer;
