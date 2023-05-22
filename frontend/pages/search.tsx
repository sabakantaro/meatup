import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/events/InfoCard";
import Map from "@/components/Map";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Head from "next/head";

function Search({ searchResults = [] }: any) {
  const router = useRouter();
  const { location, date }: any = router.query;
  const formattedDate = date && format(new Date(date), "dd MMMM");

  let searchEvents = searchResults?.events?.filter((item: any) => {
    const itemDate = new Date(item?.meeting_datetime);
    const searchDate = date ? new Date(date) : null;
    const lowercaseLocation = location?.toLowerCase();

    return (
      (!lowercaseLocation ||
        item?.place?.location?.toLowerCase().includes(lowercaseLocation)) &&
      (!searchDate ||
        (itemDate.getFullYear() === searchDate.getFullYear() &&
          itemDate.getMonth() === searchDate.getMonth() &&
          itemDate.getDate() === searchDate.getDate()))
    );
  });

  return (
    <>
      <Head>
        <title>Meatup | Search Events Page</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header placeholder={`${location} | ${formattedDate}`} />
      <main className='flex min-h-[400px]'>
        <section className='flex-grow pt-14'>
          <p className='text-xs px-6'>
            {searchEvents.length}+ Events - {formattedDate}
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6 px-6'>
            Events in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap px-6'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
          </div>
          <div className='flex flex-col'>
            {searchEvents.map((item: any) => (
              <InfoCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {searchEvents.length > 0 && (
          <section className='hidden xl:inline-flex xl:min-w-[600px]'>
            <Map events={searchResults?.events} />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  try {
    const searchResults = await fetch(
      (process.env.NEXT_PUBLIC_AUTH_URL as string) + "/events"
    ).then((res) => res.json());
    return {
      props: {
        searchResults,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        searchResults: {},
      },
    };
  }
}
