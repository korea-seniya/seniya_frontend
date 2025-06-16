import axios, { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetUserListResponseDto } from "../../dtos/response/GetUserList.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { USER_LIST_URL } from "../constants";

export const tmp = '';

// const response = await axios.get<ResponseDto<GetUserListResponseDto[]>>('/api/users');
// return response.data;
export const getUserList = async (): Promise<ResponseDto<GetUserListResponseDto[]>> => {

  try {
    const response = await axiosInstance.get(USER_LIST_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}
