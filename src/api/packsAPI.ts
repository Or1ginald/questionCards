import { AxiosResponse } from 'axios';

import { instance } from './apiConfig';
import { ResponsePacksType } from './types';

export const packsAPI = {
  getPacks(
    packName: string,
    min: number,
    max: number,
    sortPacks: string,
    page: number,
    pageCount: number,
    user_id: string,
  ) {
    return instance.get<any, AxiosResponse<ResponsePacksType>>('/cards/pack', {
      params: {
        packName,
        min,
        max,
        sortPacks,
        page,
        pageCount,
        user_id,
      },
    });
  },
  addPack(name: string) {
    return instance.post('/cards/pack', {
      cardsPack: { name },
    });
  },
};
