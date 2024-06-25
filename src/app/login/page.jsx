import Navbar from '@/components/login/navbar';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full p-20">
        <form className="max-w-md mx-auto border p-5">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium ">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="username..."
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Password"
              className="block mb-2 text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <button
            type="button"
            className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
            Login
          </button>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
