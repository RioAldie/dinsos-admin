import axios from 'axios';

export const getAllPosts = async () => {
  try {
    const response = await axios.get(
      'https://dinsos-server.vercel.app/api/posts'
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
