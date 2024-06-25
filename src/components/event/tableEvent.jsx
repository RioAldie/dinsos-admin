'use client';
import { getAllEvents } from '@/lib/event';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Itemevent from './itemEvent';

const TableEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getAllEvents();

        setEvents(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [isChange]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2 border-gray-500">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Judul
            </th>
            <th scope="col" className="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Peserta
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {events.data?.map((event, i) => {
            return (
              <Itemevent
                index={i}
                key={i}
                title={event.title}
                date={event.date}
                location={event.location}
                time={event.time}
                audience={event.audience}
                status={event?.status}
                id={event?._id}
                setIsChange={setIsChange}
                setError={setError}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableEvents;
