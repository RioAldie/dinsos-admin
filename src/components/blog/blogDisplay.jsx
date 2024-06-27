import { CalendarIcon, UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const BlogDisplay = (props) => {
  const { title, createAt, writer, content, image } = props;
  return (
    <div className="w-full flex flex-col items-center justify-between p-6 rounded-lg border border-gray-500 bg-gray-800 gap-3">
      <p className="w-4/5 border-b-2 p-2 border-gray-500 text-center text-2xl font-bold">
        {title}
      </p>
      <div className="flex flex-row gap-3">
        <p className="flex flex-row justify-center items-center">
          <CalendarIcon className="size-4" />
          <span className="flex-1 ms-3 whitespace-nowrap">
            {createAt?.toString().slice(0, 10)}
          </span>
        </p>
        /
        <p className="flex flex-row justify-center items-center">
          <UserIcon className="size-4" />
          <span className="flex-1 ms-3 whitespace-nowrap">
            {writer}
          </span>
        </p>
      </div>
      <Image src={image} alt="" width={500} height={200} />
      <div
        className="mt-10 px-48"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogDisplay;
