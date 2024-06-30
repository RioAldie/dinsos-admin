'use client';

import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { login } from '@/actions';

const FormLogin = () => {
  const [state, formAction] = useFormState(login, undefined);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (state !== undefined) {
      setIsLoad(false);
    }
  }, [state]);

  console.log('state', state);
  return (
    <form
      action={formAction}
      className="max-w-md mx-auto bg-gray-800 border-2 border-gray-700 p-5">
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-white text-sm font-medium ">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="bg-gray-700 border text-white border-gray-600 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          placeholder="username..."
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="Password"
          className="block mb-2 text-sm text-white font-medium ">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
        Masuk
      </button>
    </form>
  );
};

export default FormLogin;
