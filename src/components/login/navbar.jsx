import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-gray-600 border-b-2 bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Admin
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
