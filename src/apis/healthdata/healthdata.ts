import axios, { AxiosError } from 'axios';
import type { HealthdataRequestDto } from '../../dtos/healthdata/request/healthdata.request.dto';
import type ResponseDto from '../../dtos/response.dto';
import type { HealthdataResponseDto } from '../../dtos/healthdata/response/healthdata.response.dto';
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from '../axiosConfig';
import { CREATE_HEALTHDATA_URL, GET_HEALTHDATA_URL, PUT_HEALTHDATA_URL } from '../constants';

export const createHealthData = async (
  dto: HealthdataRequestDto
): Promise<ResponseDto<HealthdataResponseDto>> => {
  try {
      const response = await axiosInstance.post(CREATE_HEALTHDATA_URL, dto, {
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      });
      return responseSuccessHandler(response);
    } catch (error) {
      return responseErrorHandler(error as AxiosError<ResponseDto>);
    }
  };

export const getHealthData = async (token: string):
  Promise<ResponseDto<HealthdataResponseDto>> => {
  try {
    const response = await axiosInstance.get(GET_HEALTHDATA_URL, {
      headers: {
        Authorization: token,
      }
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const updateHealthData = async (
  dto: HealthdataRequestDto,
  token: string
): Promise<ResponseDto<HealthdataResponseDto>> => {
  try {
    const response = await axiosInstance.put(PUT_HEALTHDATA_URL, dto, {
      headers: {
        Authorization: token,
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
