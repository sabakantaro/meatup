import React, { SetStateAction } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Smallcard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';
import Head from 'next/head';
import { getEvents } from './api/event';
import { getPlaces } from './api/place';
import { Event, Place } from '@/typings';

const Home = () => {
  const [events, setEvents] = React.useState<Event>();
  const [places, setPlaces] = React.useState<Place>();

  React.useEffect(() => {
    const handleGetEvents = async () => {
      try {
        const res = await getEvents();
        if (res?.status === 200) {
          setEvents(res?.data.events as unknown as SetStateAction<Event | undefined>);
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
        if (res?.status === 200) {
          setPlaces(res?.data.places as unknown as SetStateAction<Place | undefined>);
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
            {events &&
              events.map((item: any) => (
                <Smallcard key={item.id} item={item} />
              ))}
          </div>
        </section>
        {places && places.length > 0 && (
          <section>
            <h2 className='text-4xl font-semibold py-8'>Workout Places</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {places.map((item: any) => (
                <MediumCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
        <LargeCard />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
