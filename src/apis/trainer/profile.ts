import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import {
  axiosInstance,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import { CREATE_PROFILE_URL, GET_PROFILE_URL, UPDATE_PROFILE_URL } from "../constants";
import type { TrainerProfileRequestDto } from "../../dtos/trainer/request/trainerProfile.request.dto";
import type { TrainerProfileResponseDto } from "../../dtos/trainer/response/trainerProfile.response.dto";

export const createProfile = async (
  dto: TrainerProfileRequestDto
): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.post(CREATE_PROFILE_URL, dto, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getMyProfile = async (): Promise<
  ResponseDto<TrainerProfileResponseDto>
> => {
  try {
    const response = await axiosInstance.get(GET_PROFILE_URL, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const updateProfile = async (
  dto: TrainerProfileRequestDto
): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.put(UPDATE_PROFILE_URL, dto, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
