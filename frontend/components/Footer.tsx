function Footer() {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-3 gap-y-4 px-8 md:px-32 py-14 bg-slate-800 text-white'>
      <div className='space-y-4 text-xs text-gray-300'>
        <h5 className='font-bold'>ACCOUNT</h5>
        <p className='hover:text-gray-400 cursor-pointer'>My Page</p>
        <p className='hover:text-gray-400 cursor-pointer'>Become a Host</p>
        <p className='hover:text-gray-400 cursor-pointer'>Notifications</p>
        <p className='hover:text-gray-400 cursor-pointer'>Messages</p>
        <p className='hover:text-gray-400 cursor-pointer'>Logout</p>
      </div>
      <div className='space-y-4 text-xs text-gray-300'>
        <h5 className='font-bold'>DISCOVER</h5>
        <p className='hover:text-gray-400 cursor-pointer'>Search Events</p>
        <p className='hover:text-gray-400 cursor-pointer'>Favorite Gym</p>
        <p className='hover:text-gray-400 cursor-pointer'>Sponsored Event</p>
        <p className='hover:text-gray-400 cursor-pointer'>Sitemap</p>
      </div>
      <div className='space-y-4 text-xs text-gray-300'>
        <h5 className='font-bold'>MEATUP</h5>
        <p className='hover:text-gray-400 cursor-pointer'>About Us</p>
        <p className='hover:text-gray-400 cursor-pointer'>Privacy & Policy</p>
        <p className='hover:text-gray-400 cursor-pointer'>Terms of Service</p>
      </div>
    </footer>
  );
}

export default Footer;
