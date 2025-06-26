// src/apis/participation/participation.ts

import { axiosInstance, responseSuccessHandler, responseErrorHandler } from '../axiosConfig';
import type { ParticipationResponseDto } from '../../dtos/participation/response/Participation.response.dto';
import type ResponseDto from '../../dtos/response.dto';
import type { AxiosError } from 'axios';
import type { Participation } from '../../pages/participation/participation';

export const getMyParticipations = async (): Promise<Participation[]> => {
  try {
    const res = await axiosInstance.get('/api/v1/participation/me');
    return res.data; 
  } catch (error) {
    throw responseErrorHandler(error);
  }
};


export const cancelParticipation = async (id: number) => {
  try {
    const res = await axiosInstance.delete(`/api/v1/participation/${id}`);
    return responseSuccessHandler(res);
  } catch (error) {
    throw responseErrorHandler(error);
  }
};

export default {
  getMyParticipations,
  cancelParticipation,
};
