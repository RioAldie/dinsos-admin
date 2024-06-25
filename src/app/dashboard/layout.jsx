import Appbar from '@/components/dashboard/appbar';
import Sidebar from '@/components/dashboard/sidebar';

const Layout = ({ children }) => {
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
