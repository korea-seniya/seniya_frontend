import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetCourseListResponseDto } from "../../dtos/course/response/GetCourseList.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { COURSE_LIST_URL, COURSE_SEARCH_BY_TRAINER_URL, USER_COURSE_LIST_URL } from "../constants";
import type { GetUserCourseListResponseDto } from "../../dtos/userCourse/response/GetUserCourseList.response.dto";
import type { GetUserCourseDetailResponseDto } from "../../dtos/userCourse/response/GetUserCourseDetail.response.dto";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export const getCourseList = async (): Promise<GetUserCourseListResponseDto[]> => {
  try {
    const response = await axiosInstance.get(USER_COURSE_LIST_URL);
    const result = responseSuccessHandler(response);
    if (result && Array.isArray(result.data)) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('getCourseList error:', error);
    return [];
  }
}

export const getAdminCourseList = async (): Promise<ResponseDto<GetCourseListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(COURSE_LIST_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const searchCoursesByTrainer = async (trainerName: string): Promise<ResponseDto<GetUserCourseListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get('/api/v1/courses', {
      params: { trainerName },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const searchCoursesByCategory = async (category: string): Promise<ResponseDto<GetUserCourseListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get('/api/v1/courses', {
      params: { category },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto<GetCourseListResponseDto[]>>);
  }
}

export const getCourseById = async (id: number): Promise<ResponseDto<GetUserCourseDetailResponseDto>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/courses/${id}`);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const applyCourse = async (courseId: number): Promise<ResponseDto<any>> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.post(
      `/api/v1/courses/${courseId}`,
      {},
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        withCredentials: true, 
      }
    );
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
