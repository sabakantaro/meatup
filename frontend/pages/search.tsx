import React, { useEffect, useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoCard from '@/components/events/InfoCard';
import Map from '@/components/Map';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getEvents } from './api/event';
import moment from 'moment';

function Search(): React.ReactElement {
  const router = useRouter();
  const { location, date }: any = router.query;
  const formattedDate = date && moment(new Date(date)).format('DD MMMM');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const formattedPlaceholders = useMemo(() => {
    return location
      ? formattedDate
        ? `${location} | ${formattedDate}`
        : location
      : formattedDate;
  }, [location, formattedDate]);

  useEffect(() => {
    const handleGetEvents = async () => {
      try {
        const res = await getEvents();
        if (res?.status === 200) {
          setEvents(res?.data.events as any[]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    handleGetEvents();
  }, []);

  const filteredEvents = events?.filter((item: any) => {
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
      <Header placeholder={formattedPlaceholders} />
      <main className='flex min-h-[400px]'>
        <section className='flex-grow pt-14'>
          {loading ? (
            <div className='text-center'>
              <div
                className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                role='status'
              >
                <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                  Loading...
                </span>
              </div>
            </div>
          ) : (
            <>
              <p className='text-xs px-6'>
                {filteredEvents.length}+ Events - {formattedDate}
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
                {filteredEvents.map((item: any) => (
                  <InfoCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </section>
        {!loading && filteredEvents.length > 0 && (
          <section className='hidden xl:inline-flex xl:min-w-[600px]'>
            <Map events={filteredEvents} />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Search;
