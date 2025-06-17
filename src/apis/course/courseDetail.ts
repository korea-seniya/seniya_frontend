import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetCourseDetailResponseDto } from "../../dtos/response/GetCourseDetail.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { COURSE_LIST_URL } from "../constants";
import type { UpdateCourseRequestDto } from "../../dtos/request/UpdateCourse.request.dto";

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

export const updateCourse = async (id: number, dto: UpdateCourseRequestDto): Promise<ResponseDto<GetCourseDetailResponseDto>> => {
  try {
    const response = await axiosInstance.put(COURSE_LIST_URL + '/' + `${id}`, dto);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);

  }
}