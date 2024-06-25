import axios from 'axios';

export const getAllEvents = async () => {
  try {
    const response = await axios.get(
      'https://dinsos-server.vercel.app/api/events'
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};

export const postNewEvent = async (formData) => {
  try {
    const response = await axios.post(
      'https://dinsos-server.vercel.app/api/event',
      formData
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(
      `https://dinsos-server.vercel.app/api/event/${id}`
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
