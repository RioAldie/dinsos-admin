'use server';
import { getIronSession } from 'iron-session';
import { defaultSession, sessionOptions } from './lib';
import { cookies } from 'next/headers';
import axios from 'axios';
import { redirect } from 'next/navigation';

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session.isLoggedin) {
    session.isLoggedin = defaultSession.isLoggedin;
  }

  return session;
};
export const login = async (prevState, formData) => {
  const session = await getSession();
  const formUsername = formData.get('username');
  const formPassword = formData.get('password');

  try {
    const res = await axios.post(
      'https://dinsos-server.vercel.app/api/auth/login',
      {
        username: formUsername,
        password: formPassword,
      }
    );
    if (res.status === 401) {
      return { error: 'Password salah' };
    }
    if (res.status === 402) {
      return { error: 'email salah' };
    }

    const user = res.data;

    session.userId = user.data.userId;
    session.username = user.data.username;
    session.isLoggedin = true;
    session.email = user.data.email;
    session.token = user.data.token;

    await session.save();
  } catch (error) {
    console.error('An error occurred:', error);
  }
  redirect('/dashboard');
};
export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect('/');
};
