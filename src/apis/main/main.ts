import type { AxiosError } from "axios";
import type { QuickSearchRequestDto } from "../../dtos/main/quickSearch/request/QuickSearch.request.dto";
import type { QuickSearchResponseDto } from "../../dtos/main/quickSearch/response/QuickSearch.response.dto";
import type ResponseDto from "../../dtos/response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { POPULARTRAINER_URL, QUICK_SEARCH_URL, TODAY_COURSE_URL } from "../constants";
import type { TodayCourseResponseDto } from "../../dtos/main/todayCourse/response/TodayCourse.response.dto";
import type { PopularTrainerResponseDto } from "../../dtos/main/popularTrainer/popularTrainer.response.dto";

export const tmp = '';

interface QuickSearchParams {
  category?: string;
  trainer?: string;
  classDate?: string;
  classStartTime?: string;
  classEndTime?: string;
}

export const quickSearch = async (
  dto: QuickSearchRequestDto
): Promise<ResponseDto<QuickSearchResponseDto[]>> => {
  try {
    const params: QuickSearchParams = {};
    if (dto.category) params.category = dto.category;
    if (dto.trainer) params.trainer = dto.trainer;
    if (dto.classDate) params.classDate = dto.classDate;
    if (dto.classStartTime) params.classStartTime = dto.classStartTime;
    if (dto.classEndTime) params.classEndTime = dto.classEndTime;

    const response = await axiosInstance.get(QUICK_SEARCH_URL, {
      params,
    });

    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getTodayCourse = async (): Promise<ResponseDto<TodayCourseResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(TODAY_COURSE_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const popularTrainer = async () : Promise<ResponseDto<PopularTrainerResponseDto>> => {
    try {
    const response = await axiosInstance.get(POPULARTRAINER_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}