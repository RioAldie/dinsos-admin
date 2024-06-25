'use client';

import { deleteEvent } from '@/lib/event';
import { useState } from 'react';

const Itemevent = (props) => {
  const {
    title,
    date,
    time,
    location,
    audience,
    index,
    status,
    id,
    setError,
    setIsChange,
  } = props;

  const handleDelete = async () => {
    try {
      await deleteEvent(id);

      setIsChange((prev) => (prev = !prev));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th scope="row" className="px-6 py-4 ">
        {index + 1}
      </th>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {title}
      </td>
      <td className="px-6 py-4">{location}</td>
      <td className="px-6 py-4">
        {date}({time})
      </td>
      <td className="px-6 py-4">
        {' '}
        <p className="p-1 rounded-lg bg-green-700/30 text-center text-gray-300">
          active
        </p>{' '}
      </td>
      <td className="px-6 py-4">{audience}</td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="font-medium text-yellow-500 dark:text-yellow-500 hover:underline">
          Hide
        </button>
        <button
          type="button"
          className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline"
          onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Itemevent;
