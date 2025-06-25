import { axiosInstance } from '../axiosConfig';

export const checkEmail = async (email: string): Promise<boolean> => {
  const response = await axiosInstance.get('/api/v1/auth/check-email', {
    params: { email },
  });
  return response.data;
};
