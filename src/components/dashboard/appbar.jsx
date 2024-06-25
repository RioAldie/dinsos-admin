import {
  BeakerIcon,
  BellIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
const Appbar = () => {
  return (
    <nav className="bg-white z-40 sticky top-0 border-b-2 border-gray-700 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-10  p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-start  space-x-3 rtl:space-x-reverse">
          <span className="self-center  text-2xl font-semibold whitespace-nowrap text-white">
            Lapak KTPA
          </span>
        </a>

        <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1  -mr-28">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <BellIcon className="size-6 text-gray-300" />
            </li>
            <li>
              <EnvelopeIcon className="size-6 text-gray-300" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
