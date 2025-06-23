import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetCourseListResponseDto } from "../../dtos/course/response/GetCourseList.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { COURSE_LIST_URL, USER_COURSE_LIST_URL } from "../constants";

export const getCourseList = async (): Promise<GetCourseListResponseDto[]> => {
  try {
    const response = await axiosInstance.get(USER_COURSE_LIST_URL);
    const result = responseSuccessHandler(response); // result는 ResponseDto<GetCourseListResponseDto[]>

    // 여기서 result.data가 실제 배열임
    if (result && Array.isArray(result.data)) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('getCourseList error:', error);
    return [];
  }
}
