'use client';

import { useEffect, useState } from 'react';
import ImageUploader from './imageUploader';
import { postNewBlog } from '@/lib/post';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormAddBlog = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    writer: '',
    image: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await postNewBlog(formData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (formData.image !== image) {
      console.log('image berubah!');
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: image,
      }));
    }

    if (formData.content !== value) {
      console.log('content berubah!');
      setFormData((prevFormData) => ({
        ...prevFormData,
        content: value,
      }));
    }
  }, [image, value]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p>Error:</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md ml-2 p-4 rounded-md border-gray-500 border bg-gray-800">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Judul
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="writer"
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Penulis
        </label>
      </div>
      <ImageUploader setImage={setImage} />
      <div className="relative mt-5 z-0 w-full mb-5 group text-white">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          name={'content'}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        Submit
      </button>
    </form>
  );
};

export default FormAddBlog;
