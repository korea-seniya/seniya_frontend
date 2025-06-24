import axios, { AxiosError, type AxiosResponse } from "axios";
import type ResponseDto from "../dtos/response.dto";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_DOMAIN || "http://localhost:8080",
  timeout: 5000,
});

export const responseSuccessHandler = <T = any>(response: AxiosResponse<ResponseDto<T>>) => {
  return response.data;
};

/** 에러 핸들링 함수 (unknown 타입 대응 포함) */
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

  // Axios 에러가 아닌 경우
  return {
    code: 'UNKNOWN_ERROR',
    message: '알 수 없는 오류가 발생했습니다.',
    data: null,
  };
};

//& function: Authorization Bearer 헤더 //
export const bearerAuthorization = (accessToken: string) => ({
  headers: { 'Authorization': `Bearer ${accessToken}` },
});

//? EX) axios.get(URL, bearerAuthorization(token));
