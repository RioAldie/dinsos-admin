import FormLogin from '@/components/login/formLogin';
import Navbar from '@/components/login/navbar';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full p-20 bg-gray-900 min-h-[100vh]">
        <FormLogin />
      </main>
    </>
  );
};

export default LoginPage;
