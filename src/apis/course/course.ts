import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import type ResponseDto from "../../dtos/response.dto";
import type { CourseListResponseDto } from "../../dtos/response/courseList.response.dto";
import { COURSE_LIST_URL } from "../constants";
import type { AxiosError } from "axios";

// export const courseList = async (): Promise<ResponseDto<CourseListResponseDto>> => {
//   const response = await axiosInstance.get(COURSE_LIST_URL);
//   return response.data;
// };

export const courseList = async (): Promise<ResponseDto<CourseListResponseDto>> => {
  try {
    const response = await axiosInstance.get(COURSE_LIST_URL, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    });
    return responseSuccessHandler(response)
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>)
  }
}