import { getSession } from '@/actions';
import CardDashboard from '@/components/dashboard/card';
import { getAllEvents } from '@/lib/event';
import { getAllPosts } from '@/lib/post';
import { getAllReports } from '@/lib/report';
import { redirect } from 'next/navigation';

const MainPage = async () => {
  const session = await getSession();
  const events = await getAllEvents();
  const posts = await getAllPosts();
  const reports = await getAllReports();

  if (!session.isLoggedin) {
    redirect('/login');
  }
  return (
    <div>
      <div className="p-4 border-2 text-2xl font-bold text-white border-gray-600 rounded-lg ">
        <h1>Dashboard Admin Dinson Lapak KTPA</h1>
      </div>
      <div className="mt-10 flex flex-row gap-5">
        <CardDashboard
          value={events?.data.length}
          name={'Kegiatan'}
          url={'/dashboard/event'}
        />
        <CardDashboard
          value={posts?.data.length}
          name={'Laporan'}
          url={'/dashboard/report'}
        />
        <CardDashboard
          value={reports?.data.length}
          name={'Berita'}
          url={'/dashboard/blog'}
        />
      </div>
    </div>
  );
};

export default MainPage;
