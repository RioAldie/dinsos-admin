'use client';

import { useEffect, useState } from 'react';
import ItemBlog from './itemBlog';
import { getAllPosts } from '@/lib/post';

const TableBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getAllPosts();

        setPosts(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p>Error:</p>;

  console.log(posts);

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
              Penulis
            </th>
            <th scope="col" className="px-6 py-3">
              tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Gambar
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.data?.map((post, i) => {
            return (
              <ItemBlog
                title={post.title}
                writer={post.writer}
                image={post.image}
                createAt={post.createAt}
                index={i}
                key={i}
                content={post.content}
                id={post._id}
                setIsChange={setIsChange}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBlog;
