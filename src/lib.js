export const sessionOptions = {
  password: process.env.AUTH_SECRET,
  cookieName: 'dinsos-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
};
export const defaultSession = {
  isLoggedin: false,
};
