import { getSession } from '@/actions';
import { redirect } from 'next/navigation';
import axios from 'axios';

export const postLogin = async (formData) => {
  const session = await getSession();

  const res = await axios.post(
    'https://dinsos-server.vercel.app/api/auth/login',
    {
      username: formData.username,
      password: formData.password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (res.status === 401) {
    return { error: 'Password salah' };
  }
  if (res.status === 402) {
    return { error: 'email salah' };
  }

  const user = res.data;

  session.userId = user.data._id;
  session.username = user.data.username;
  session.isLoggedin = true;
  session.email = user.data.email;

  await session.save();

  redirect('/profile');
};
