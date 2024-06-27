import FormAddBlog from '@/components/blog/formAddBlog';
import React from 'react';

const AddBlogPage = () => {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="w-full flex flex-row items-center justify-between p-6 rounded-lg border border-gray-500 bg-gray-800">
        <p className="font-medium">Tambah Blog Baru</p>
      </div>
      <FormAddBlog />
    </div>
  );
};

export default AddBlogPage;
