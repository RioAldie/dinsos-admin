'use client';

import { getAllReports } from '@/lib/report';
import ItemReport from './itemReport';
import { useEffect, useState } from 'react';
import Loading from '../dashboard/loading';

const TableReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getAllReports();

        setReports(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [isChange]);

  if (loading) return <Loading />;
  if (error) return <p>Error:</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2 border-gray-500">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Judul
            </th>
            <th scope="col" className="px-6 py-3">
              Pelapor
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reports?.map((report, i) => {
            return (
              <ItemReport
                index={i}
                key={i}
                name={report.name}
                title={report.title}
                createAt={report.createAt}
                address={report.address}
                status={report?.status}
                id={report?._id}
                setIsChange={setIsChange}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableReport;
