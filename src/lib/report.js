import axios from 'axios';

export const getAllReports = async () => {
  try {
    const response = await axios.get(
      'https://dinsos-server.vercel.app/api/reports'
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};

export const getReport = async (id) => {
  try {
    const response = await axios.get(
      `https://dinsos-server.vercel.app/api/report/${id}`
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const editStatusReport = async (data) => {
  try {
    const response = await axios.post(
      'https://dinsos-server.vercel.app/api/report/edit',
      data
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const deleteReport = async (id) => {
  try {
    const response = await axios.delete(
      `https://dinsos-server.vercel.app/api/report/${id}`
    );

    if (response.status > 300) {
      throw new Error('Not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};