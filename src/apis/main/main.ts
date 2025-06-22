import type { AxiosError } from "axios";
import type { QuickSearchRequestDto } from "../../dtos/main/quickSearch/request/QuickSearch.request.dto";
import type { QuickSearchResponseDto } from "../../dtos/main/quickSearch/response/QuickSearch.response.dto";
import type ResponseDto from "../../dtos/response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { QUICK_SEARCH_URL } from "../constants";

export const tmp = '';

export const quickSearch = async (
  dto: QuickSearchRequestDto
): Promise<ResponseDto<QuickSearchResponseDto[]>> => {
  try {
    // 불필요한 빈 값은 제외하고 params 구성
    const params: Record<string, string> = {};
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