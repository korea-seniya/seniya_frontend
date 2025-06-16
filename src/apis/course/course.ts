import { axiosInstance } from "../axiosConfig";
import type ResponseDto from "../../dtos/response.dto";
import type { CourseListResponseDto } from "../../dtos/response/courseList.response.dto";
import type { AxiosResponse } from "axios";
import { COURSE_LIST_URL } from "../constants";

// src/apis/course/course.ts
export const courseList = async (): Promise<ResponseDto<CourseListResponseDto>> => {
  const response = await axiosInstance.get(COURSE_LIST_URL);
  return response.data;
};

