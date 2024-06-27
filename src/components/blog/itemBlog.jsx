import { deletePost } from '@/lib/post';
import Image from 'next/image';
import Link from 'next/link';

const ItemBlog = (props) => {
  const { title, writer, createAt, image, id, index, setIsChange } =
    props;

  const handleDelete = async () => {
    try {
      await deletePost(id);

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
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white max-w-56 ">
        {title}
      </td>
      <td className="px-6 py-4">{writer}</td>
      <td className="px-6 py-4">
        {createAt?.toString().slice(0, 10)}
      </td>
      <td className="px-6 py-4">
        <Image src={image} alt="blog-img" width={50} height={50} />
      </td>
      <td className="px-6 py-4">
        <Link href={`/dashboard/blog/${id}`}>
          <button
            type="button"
            className="font-medium ml-2 text-green-600 dark:text-green-500 hover:underline">
            Lihat
          </button>
        </Link>

        <button
          type="button"
          onClick={handleDelete}
          className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemBlog;
