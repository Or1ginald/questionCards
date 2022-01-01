import { AxiosResponse } from 'axios';

import { Nullable } from '../types';

import { instance } from './apiConfig';

export type loginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};

export const authApi = {
  register(email: string, password: string): Promise<AxiosResponse> {
    return instance.post('/auth/register', { email, password });
  },
  login(
    email: Nullable<string>,
    password: Nullable<string>,
    rememberMe: Nullable<boolean>,
  ) {
    return instance.post<any, AxiosResponse<loginResponseType>>('/auth/login', {
      email,
      password,
      rememberMe,
    });
  },
};
