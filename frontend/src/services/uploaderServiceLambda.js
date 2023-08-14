import axios from 'axios';

const API_URL = process.env.UPLOADER_API_URL || 'https://lpfkbegpzedfqxl7vvd46db3wq0hdftx.lambda-url.us-east-1.on.aws/';
export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file, file.name); // Pass the file name as the third parameter

    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
