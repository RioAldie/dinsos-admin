'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const CLOUDINARY_URL =
  'https://api.cloudinary.com/v1_1/dh0hztmki/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'yv7oonhb';

const ImageUploader = (props) => {
  const [imageUrl, setImageUrl] = useState('');
  const { setImage } = props;

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios
      .post(CLOUDINARY_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImageUrl(response.data.secure_url);
        setImage(response.data.secure_url);
      })
      .catch((error) => {
        console.error('Upload failed:', error);
      });
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });
  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #cccccc',
          padding: '20px',
          textAlign: 'center',
        }}>
        <input {...getInputProps()} />
        <p>Tambahkan Photo / Gambar disini</p>
      </div>
      {imageUrl && (
        <div className="mt-2">
          <p>Image URL:</p>

          <p className="text-gray-500 overflow-hidden w-full h-10 block ">
            {imageUrl}
          </p>

          <img
            src={imageUrl}
            alt="Uploaded Preview"
            style={{ width: '300px', marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
