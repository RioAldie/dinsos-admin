import TableEvents from '@/components/event/tableEvent';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const EventPage = () => {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="w-full flex flex-row items-center justify-between p-6 rounded-lg border border-gray-500 bg-gray-800">
        <p className="font-medium">Kegiatan</p>
        <Link
          href={'/dashboard/event/add'}
          className="px-5 py-2.5 text-sm font-medium text-white inline-flex gap-2 items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          <PlusIcon className="size-4 text-white" />
          Tambah
        </Link>
      </div>
      <TableEvents />
    </div>
  );
};

export default EventPage;
