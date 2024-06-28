import Link from 'next/link';

const ItemReport = (props) => {
  const { title, id, name, status, createAt, address, index } = props;
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th scope="row" className="px-6 py-4 ">
        {index + 1}
      </th>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {title}
      </td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">
        {' '}
        {createAt?.toString().slice(0, 10)}
      </td>
      <td className="px-6 py-4">
        <p className="p-1 rounded-lg bg-green-700/30 text-center text-gray-300">
          {status}
        </p>
      </td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">
        <Link href={`/dashboard/report/${id}`}>
          <button
            type="button"
            className="font-medium text-green-500 dark:text-green-500 hover:underline">
            Lihat
          </button>
        </Link>
        <button
          type="button"
          className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemReport;
