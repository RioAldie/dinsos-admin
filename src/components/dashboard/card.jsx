import {
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

const CardDashboard = (props) => {
  const { value, name, url } = props;
  return (
    <Link href={url}>
      <div className="block w-56  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <span className="flex flex-row items-center gap-2">
          {name === 'Kegiatan' && (
            <CalendarIcon className="size-6  text-white" />
          )}
          {name === 'Laporan' && (
            <ChatBubbleLeftRightIcon className="size-6  text-white" />
          )}
          {name === 'Berita' && (
            <DocumentTextIcon className="size-6  text-white" />
          )}
          <p className="font-bold text-white">{name}</p>
        </span>
        <p className="text-2xl w-full mt-3 ml-3 font-bold tracking-tight text-gray-900 dark:text-red-500">
          {value}
        </p>
      </div>
    </Link>
  );
};

export default CardDashboard;
