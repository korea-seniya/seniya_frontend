import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetCourseListResponseDto } from "../../dtos/response/GetCourseList.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { COURSE_LIST_URL } from "../constants";

export const tmp = '';

export const getCourseList = async (): Promise<ResponseDto<GetCourseListResponseDto[]>> => {

  try {
    const response = await axiosInstance.get(COURSE_LIST_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }


}