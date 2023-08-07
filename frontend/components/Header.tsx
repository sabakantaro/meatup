import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { AuthContext } from '@/pages/_app';
import UtilityMenu from './Menu';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';
import useResize from '@/hooks/useResize';
import useLoading from '@/hooks/useLoading';
import { ParsedUrlQuery } from 'querystring';

function Header({ placeholder }: any): React.ReactElement {
  const router = useRouter();
  const { location, date }: any = router.query;
  const { currentUser, isSignedIn } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState<string>(location || '');
  const [open, setOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const isMobile = useResize();
  const isLoading = useLoading();

  useEffect(() => {
    if (date) {
      setStartDate(new Date(date));
    }
  }, [date]);

  const search = () => {
    const query: ParsedUrlQuery = {};

    if (searchInput) {
      query.location = searchInput;
    }

    if (startDate) {
      query.date = startDate.toISOString();
    }

    router.push({
      pathname: '/search',
      query,
    });
  };

  const handleSetDate = (date: Date) => {
    if (
      startDate &&
      date.getFullYear() === startDate.getFullYear() &&
      date.getMonth() === startDate.getMonth() &&
      date.getDate() === startDate.getDate()
    ) {
      return setStartDate(null);
    }
    setStartDate(date);
  };

  const searchBar = (
    <div className='flex items-center border-2 rounded-full py-2 shadow-sm m-auto max-w-[400px] w-full mt-5 md:mt-0'>
      <input
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          setOpen(true);
        }}
        className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full'
        type='text'
        placeholder={placeholder || 'Search by location'}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            search();
          }
        }}
      />
      <MagnifyingGlassIcon
        className='inline-flex h-8 w-9 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2'
        onClick={search}
      />
    </div>
  );

  const menuButton = isSignedIn ? (
    <UtilityMenu
      items={[
        {
          key: 'profile',
          name: 'Profile',
          href: `/users/${currentUser && currentUser.id}/show`,
        },
        {
          key: 'become-a-host',
          name: 'Become a Host',
          href: '/events/create',
        },
        {
          key: 'notifications',
          name: 'Notifications',
          href: '/notifications',
        },
        {
          key: 'messages',
          name: 'Messages',
          href: `/chatrooms`,
        },
        {
          key: 'logout',
          name: 'Logout',
          href: '/signout',
        },
      ]}
      button={
        isMobile ? (
          <Menu.Button>
            <Bars3Icon className='h-6' />
          </Menu.Button>
        ) : (
          <>
            <Menu.Button className='flex items-center space-x-2 border-2 p-2 rounded-full'>
              <Bars3Icon className='h-6' />
              <UserCircleIcon className='h-6' />
            </Menu.Button>
          </>
        )
      }
    />
  ) : (
    <button
      className='inline cursor-pointer'
      onClick={() => router.push('/signin')}
    >
      Sign In
    </button>
  );

  if (isLoading) {
    return (
      <header className='top-0 z-50 bg-white shadow-mb p-5 px-10 border-b border-s-gray-500'>
        <div className='grid grid-cols-3 md:grid-cols-3'>
          {isMobile && <div className='w-5' />}
          <div className='animate-pulse flex items-center justify-center md:justify-start h-10 cursor-pointer my-auto'>
            <div className='bg-gray-300 h-4 w-16 rounded-full' />
          </div>
          {!isMobile && (
            <div className='animate-pulse flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
              <div className='bg-gray-300 h-4 w-40 rounded-full' />
            </div>
          )}
          <div className='flex items-center space-x-0 justify-end text-gray-500'>
            <div className='animate-pulse bg-gray-300 h-4 w-20 rounded-full' />
            <div className='animate-pulse bg-gray-300 h-4 w-20 rounded-full' />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className='top-0 z-50 bg-white shadow-mb p-5 px-10 border-b border-s-gray-500'>
      <div className='grid grid-cols-3 md:grid-cols-3'>
        {isMobile && <div className='w-5' />}
        <div
          onClick={() => router.push('/')}
          className='relative flex item-center justify-center md:justify-start h-10 cursor-pointer my-auto'
        >
          <picture>
            <img
              src='/meatup_title.png'
              alt='Meatup Logo'
              className='h-10 object-contain cursor-pointer'
            />
          </picture>
        </div>
        {!isMobile && searchBar}
        <div className='flex items-center space-x-0 justify-end text-gray-500'>
          <p
            className='hidden md:inline cursor-pointer mr-5'
            onClick={() => router.push('/events/create')}
          >
            Become a host
          </p>
          {menuButton}
        </div>
      </div>
      {isMobile && searchBar}
      {open && (
        <div className='flex flex-col col-span-3 mx-auto items-center'>
          <Calendar
            date={startDate!}
            minDate={new Date()}
            color='#FD5B61'
            onChange={(date) => handleSetDate(date)}
          />
          <div className='flex'>
            <button
              className='flex-grow text-gray-500'
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <div className='w-40' />
            <button className='flex-grow text-red-400' onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
