'use client';

import { editStatusReport, getReport } from '@/lib/report';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const DetailReportPage = ({ params }) => {
  const [report, setReport] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChange, setIsChange] = useState(false);

  const handleStatus = async (status) => {
    try {
      const data = { _id: params.id, newStatus: status };
      await editStatusReport(data);

      setIsChange((prev) => (prev = !prev));

      return data;
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getReport(params.id);

        setReport(data.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [isChange]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p>Error:</p>;
  return (
    <div className="text-white flex  flex-col gap-5 ">
      <div className="w-full flex flex-row items-center justify-between p-6 rounded-lg border border-gray-500 bg-gray-800">
        Detail Laporan
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-4/6 flex flex-col items-start justify-start p-6 rounded-lg border border-gray-500 gap-6 bg-gray-800">
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Pelapor{' '}
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.name}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              NIK
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.NIK}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Umur pelapor
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.age}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Alamt pelapor
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.address}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Judul Laporan
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.title}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Pekerjaan pelapor
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.job}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Hubungan pelapor
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.relation}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Laporan dibuat
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.createAt}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Terlapor
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6">
              {report?.suspectName}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-10 ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Status Laporan
            </p>
            <p className=" text-yellow-500 border-b-2 border-gray-600 w-4/6">
              {report?.status}
            </p>
          </div>
          <div className="w-full flex flex-row gap-20  justify-start h-max-fit ">
            <p className=" text-gray-400 border-b-2 w-2/6 border-gray-600">
              Isi Laporan
            </p>
            <p className=" border-b-2 border-gray-600 w-4/6 h-fit p-2">
              {report?.content}
            </p>
          </div>
        </div>
        <div className="w-2/6 flex flex-col items-start justify-start  h-fit gap-3">
          <div className="flex w-full flex-col items-start justify-start p-6 rounded-lg border border-gray-500 bg-gray-800 h-fit gap-3">
            <button
              type="button"
              onClick={() => handleStatus('Laporan Diterima')}
              className="text-black bg-green-400 w-56 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-green-900">
              Terima Laporan
            </button>
            <button
              type="button"
              onClick={() => handleStatus('Pelapor Dihubungi')}
              className="text-white bg-yellow-600 w-56 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
              Hubungi Pelapor
            </button>
            <button
              type="button"
              onClick={() => handleStatus('Dalam Pendampingan')}
              className="text-white bg-blue-700 w-56 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Dampingi Pelapor
            </button>
            <button
              type="button"
              onClick={() => handleStatus('Laporan Selesai')}
              className="text-white bg-green-700 w-56 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Laporan Selesai
            </button>
            <button
              type="button"
              onClick={() => handleStatus('Laporan Ditolak')}
              className="text-white bg-red-700 w-56 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Tolak Laporan
            </button>
          </div>
          <div className=" w-full flex flex-col items-start justify-start p-6 rounded-lg border border-gray-500 bg-gray-800 h-fit gap-3">
            <button
              type="button"
              class="text-white w-64 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-2 items-center me-2 mb-2">
              <PhoneIcon className="size-6 " />
              Hubungi Lewat Whatsapp
            </button>
            <button
              type="button"
              class="text-white w-64 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-2 items-center me-2 mb-2">
              <PhoneIcon className="size-6 " />
              Hubungi Lewat Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReportPage;
