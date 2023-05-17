import { useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { AuthContext } from "@/pages/_app";
import UserMenu from "./users/Menu";

function Header({ placeholder }: any) {
  const { currentUser, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  return (
    <header className='top-0 z-50 grid grid-cols-3 bg-white shadow-mb p-5 md:px-10 border-b border-s-gray-500'>
      <div
        onClick={() => router.push("/")}
        className='relative flex item-center h-10 cursor-pointer my-auto'
      >
        <h1 className='text-red-400 font-semibold text-2xl font-serif'>Meatup</h1>
      </div>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder || "Start your search"}
        />
        <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>
      <div className='flex items-center space-x-0 justify-end text-gray-500'>
        <p
          className='hidden md:inline cursor-pointer mr-2'
          onClick={() => router.push("/createEvent")}
        >
          Become a host
        </p>
        <GlobeAltIcon className='h-6 cursor-pointer pr-2' />
        {isSignedIn ? (
          <UserMenu />
        ) : (
          <button
            className='hidden md:inline cursor-pointer'
            onClick={() => router.push("/signin")}
          >
            Sign In
          </button>
        )}
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UserIcon className='h-5' />
            <input
              value={noOfGuests}
              onChange={(e: any) => setNoOfGuests(e.target.value)}
              type='number'
              min={1}
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />
          </div>
          <div className='flex'>
            <button className='flex-grow text-gray-500' onClick={resetInput}>
              Cancel
            </button>
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
