import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetUserDetailResponseDto } from "../../dtos/adminUser/response/GetUserDetail.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { USER_DETAIL_URL } from "../constants";

export const tmp = '';

export const getUserDetail = async (id: number): Promise<ResponseDto<GetUserDetailResponseDto>> => {
  try {
    const response = await axiosInstance.get(USER_DETAIL_URL + '/' + `${id}`);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}