'use client';

import BlogDisplay from '@/components/blog/blogDisplay';
import { getPost } from '@/lib/post';
import React, { useEffect, useState } from 'react';

const ViewBlogPage = ({ params }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getPost(params.id);

        setPost(data.data);
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
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="w-full flex flex-row items-center justify-between p-6 rounded-lg border border-gray-500 bg-gray-800">
        Berita
      </div>

      <BlogDisplay
        title={post.title}
        writer={post.writer}
        image={post.image}
        content={post.content}
        createAt={post.createAt}
      />
    </div>
  );
};

export default ViewBlogPage;
