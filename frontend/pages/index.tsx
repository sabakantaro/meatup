import React from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Smallcard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Head from "next/head";
import { getEvents } from "./api/event";
import { getPlaces } from "./api/place";

export default function Home() {
  const [events, setEvents] = React.useState<any>([]);
  const [places, setPlaces] = React.useState<any>([]);

  React.useEffect(() => {
    const handleGetEvents = async () => {
      try {
        const res = await getEvents();
        console.log(res);

        if (res) {
          setEvents(res?.data.events as any);
        } else {
          console.log("No events");
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetEvents();
  }, []);

  React.useEffect(() => {
    const handleGetPlaces = async () => {
      try {
        const res = await getPlaces();
        console.log(res);

        if (res) {
          setPlaces(res?.data.places as any);
        } else {
          console.log("No places");
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleGetPlaces();
  }, []);

  return (
    <div>
      <Head>
        <title>Meatup</title>
        <link rel='icon' href='/meatup_logo.png' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Upcoming Event</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {events.map((item: any) => (
              <Smallcard key={item.image} item={item} />
            ))}
          </div>
        </section>
        {places.length > 0 && (
          <section>
            <h2 className='text-4xl font-semibold py-8'>Workout Places</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {places.map((item: any) => (
                <MediumCard key={item.image} item={item} />
              ))}
            </div>
          </section>
        )}
        <LargeCard />
      </main>
      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   try {
//     const eventData = await fetch(
//       (process.env.NEXT_PUBLIC_AUTH_URL as string) + "/events"
//     ).then((res) => res.json());

//     const cardsData = await fetch(
//       (process.env.NEXT_PUBLIC_AUTH_URL as string) + "/places"
//     ).then((res) => res.json());

//     return {
//       props: {
//         eventData,
//         cardsData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         eventData: {},
//         cardsData: {},
//       },
//     };
//   }
// }
