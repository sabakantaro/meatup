import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/events/InfoCard";
import Map from "@/components/Map";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search({ searchResults = [] }: any) {
  console.log(searchResults.events);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests }: any = router.query;
  const formattedStartDate = startDate && format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}guests`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stay in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Type of Place</p>
          </div>
          <div className='flex flex-col'>
            {searchResults?.events?.map((item: any) => (
              <InfoCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {searchResults?.events?.length > 0 && (
          <section className='hidden xl:inline-flex xl:min-w-[600px]'>
            <Map events={searchResults?.events} />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  try {
    const searchResults = await fetch("http://127.0.0.1:5000").then((res) =>
      res.json()
    );
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
