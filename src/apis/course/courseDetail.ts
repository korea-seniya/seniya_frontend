import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetCourseDetailResponseDto } from "../../dtos/course/response/GetCourseDetail.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { COURSE_LIST_URL } from "../constants";
import type { UpdateCourseRequestDto } from "../../dtos/course/request/UpdateCourse.request.dto";
import type { CourseResponseDto } from "../../dtos/course/response/Course.response.dto";

export const tmp = '';

export const getCourseDetail = async (id: number): Promise<ResponseDto<GetCourseDetailResponseDto>> => {
  try {
    const response = await axiosInstance.get(COURSE_LIST_URL + '/' + `${id}`);
    console.log(response);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const createCourse = async (dto: CourseResponseDto): Promise<ResponseDto<CourseResponseDto>> => {
  try {
    const response = await axiosInstance.post(COURSE_LIST_URL, dto);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }

}

export const updateCourse = async (id: number, dto: UpdateCourseRequestDto): Promise<ResponseDto<GetCourseDetailResponseDto>> => {
  try {
    const response = await axiosInstance.put(COURSE_LIST_URL + '/' + `${id}`, dto);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const deleteCourse = async (id: number): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.delete(COURSE_LIST_URL + '/' + `${id}`);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}