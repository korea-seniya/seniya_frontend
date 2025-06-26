import axios, { AxiosError, type AxiosResponse } from "axios";
import Cookies from "js-cookie";
import type ResponseDto from "../dtos/response.dto";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_DOMAIN || "http://localhost:8080",
  timeout: 5000,
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export const responseSuccessHandler = <T = any>(response: AxiosResponse<ResponseDto<T>>) => {
  return response.data;
};

export const responseErrorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return {
        code: 'NETWORK_ERROR',
        message: '네트워크 오류가 발생했습니다.',
        data: null,
      };
    }
    return error.response.data;
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: '알 수 없는 오류가 발생했습니다.',
    data: null,
  };
};

export const bearerAuthorization = (accessToken: string) => ({
  headers: { 'Authorization': `Bearer ${accessToken}` },
});
