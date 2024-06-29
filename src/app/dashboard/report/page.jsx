import TableReport from '@/components/report/tableReport';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ReportPage = () => {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="w-full flex flex-row items-center justify-between p-6 rounded-lg border border-gray-500 bg-gray-800">
        <p className="font-medium">Laporan Masyarakat</p>
      </div>
      <TableReport />
    </div>
  );
};

export default ReportPage;
