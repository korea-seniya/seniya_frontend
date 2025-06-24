// src/apis/participation/participation.ts

import { axiosInstance, responseSuccessHandler, responseErrorHandler } from '../axiosConfig';
import type { Participation } from '../../pages/participation/participation';

export const getMyParticipations = async (): Promise<Participation[]> => {
  try {
    const res = await axiosInstance.get('/participations/me');
    return responseSuccessHandler(res).data;  // 여기 .data 추가!
  } catch (error) {
    throw responseErrorHandler(error);
  }
};

export const cancelParticipation = async (id: number) => {
  try {
    const res = await axiosInstance.delete(`/participations/${id}`);
    return responseSuccessHandler(res);
  } catch (error) {
    throw responseErrorHandler(error);
  }
};

export default {
  getMyParticipations,
  cancelParticipation,
};
