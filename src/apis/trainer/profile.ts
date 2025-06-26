import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import {
  axiosInstance,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import {
  CREATE_PROFILE_URL,
  GET_PROFILE_URL,
  UPDATE_PROFILE_URL,
} from "../constants";
import type { TrainerProfileRequestDto } from "../../dtos/trainer/request/trainerProfile.request.dto";
import type { TrainerProfileResponseDto } from "../../dtos/trainer/response/trainerProfile.response.dto";
import type { updateTrainerProfileRequestDto } from "../../dtos/trainer/request/updateTrainerProfile.request.dto";
import type { TrainerProfileCreateResponseDto } from "../../dtos/trainer/response/trainerProfileCreate.response.dto";

export const tmp = "";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export const createProfile = async (
  dto: TrainerProfileRequestDto,
  file?: File | null
): Promise<ResponseDto<TrainerProfileCreateResponseDto>> => {
  try {
    const token = getCookie("token");
    const formData = new FormData();
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );
    if (file) {
      formData.append("file", file);
    }
    const response = await axiosInstance.post(CREATE_PROFILE_URL, formData, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
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
    const token = getCookie("token");
    const response = await axiosInstance.get(GET_PROFILE_URL, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const updateProfile = async (
  dto: updateTrainerProfileRequestDto,
  file?: File | null
): Promise<ResponseDto<TrainerProfileResponseDto>> => {
  try {
    const token = getCookie("token");
    const formData = new FormData();
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );
    if (file) {
      formData.append("file", file);
    }
    const response = await axiosInstance.put(UPDATE_PROFILE_URL, formData, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
