// src/apis/auth/CheckUsername.ts

import { axiosInstance } from '../axiosConfig';

export const checkUsername = async (username: string): Promise<boolean> => {
  const response = await axiosInstance.get('/api/v1/auth/check-username', {
    params: { username },
  });

  return response.data.data;
};
