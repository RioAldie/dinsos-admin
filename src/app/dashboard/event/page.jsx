import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

const EventPage = () => {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="w-full flex flex-row items-center justify-between p-6 rounded-lg border border-gray-500 bg-gray-800">
        <p className="font-medium">Kegiatan</p>
        <button
          type="button"
          class="px-5 py-2.5 text-sm font-medium text-white inline-flex gap-2 items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          <PlusIcon className="size-4 text-white" />
          Tambah
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2 border-gray-500">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
                Detail
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Sosialisasi Bully
              </th>
              <td className="px-6 py-4">SMPN 1 Nganjuk</td>
              <td className="px-6 py-4">12-06-2024 (09:00-11:00)</td>
              <td className="px-6 py-4">
                {' '}
                <p className="p-1 rounded-lg bg-green-700/30 text-center text-gray-300">
                  active
                </p>{' '}
              </td>
              <td className="px-6 py-4">siswa</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-green-600 dark:text-green-500 hover:underline">
                  View
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-yellow-500 dark:text-yellow-500 hover:underline">
                  Hide
                </a>
                <a
                  href="#"
                  className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventPage;
