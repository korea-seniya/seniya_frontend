import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { GetMyInfoResponseDto } from "../../dtos/userInfo/response/getMyInfo.response.dto";
import {
  axiosInstance,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import { DELETE_USER_URL, PUT_USER_URL, USER_URL } from "../constants";
import type { updateMyInfoRequestDto } from "../../dtos/userInfo/request/updateMyInfoRequest.dto";

export const getMyInfo = async (token: string): Promise<ResponseDto<GetMyInfoResponseDto>> => {
  try {
    const response = await axiosInstance.get(USER_URL, {
      headers: {
        Authorization: token,
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const updateMyInfo = async (
  dto: updateMyInfoRequestDto,
  token: string
): Promise<ResponseDto<GetMyInfoResponseDto>> => {
  try {
    const response = await axiosInstance.put(PUT_USER_URL, dto, {
      headers: { Authorization: token },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const deleteMyInfo = async (token: string): Promise<ResponseDto<null>> => {
  try {
    const response = await axiosInstance.delete(USER_URL, {
      headers: { Authorization: token },
    });
    if (response.status === 204) {
      return { code: 'SU', message: '회원 탈퇴 완료', data: null };
    }

    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};