import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { ALL_APPLY_URL, APPLY_CHANGE_URL, APPLY_DETAIL_URL, CREATE_APPLY_URL, MY_APPLY_URL } from "../constants";
import type { TrainerApplicationStatusResponseDto } from "../../dtos/trainer/response/trainerApplyStatus.response.dto";
import type { TrainerApplicationResponseDto } from "../../dtos/trainer/response/trainerApply.response.dto";
import type { TrainerApplicationDetailResponseDto } from "../../dtos/trainer/response/trainerApplyDetail.response.dto";
import type { ApprovalStatus } from "../../dtos/trainer/approvalStatus";

export const trainerApply = async (): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.post(CREATE_APPLY_URL,{},{
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      }
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const getMyApply = async (): Promise<ResponseDto<TrainerApplicationStatusResponseDto>> => {
  try {
    const response = await axiosInstance.get(MY_APPLY_URL,{
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      }
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const getAllTrainerApplications = async (): Promise<ResponseDto<TrainerApplicationResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(ALL_APPLY_URL, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getTrainerApplicationById = async (
  id: number
): Promise<ResponseDto<TrainerApplicationDetailResponseDto>> => {
  try {
    const response = await axiosInstance.get(APPLY_DETAIL_URL(id), {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const updateTrainerApplicationStatus = async (
  id: number,
  status: ApprovalStatus
): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.put(APPLY_CHANGE_URL(id), 
      { approvalStatus: status }, 
      {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        }
      }
    );
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};