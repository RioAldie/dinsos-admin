import { getSession } from '@/actions';
import Appbar from '@/components/dashboard/appbar';
import Sidebar from '@/components/dashboard/sidebar';
import { redirect } from 'next/navigation';

const Layout = async ({ children }) => {
  const session = await getSession();
  if (!session.isLoggedin) {
    redirect('/login');
  }
  return (
    <>
      <Appbar />
      <Sidebar />
      <div className="p-4 sm:ml-64 bg-gray-900 min-h-[100vh]">
        {children}
      </div>
    </>
  );
};

export default Layout;
