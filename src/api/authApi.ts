import { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

import { Nullable } from 'types';
import { passwordRequestForm } from 'utils';

export type LoginResponseType = {
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

export type ResponseTypeModel = {
  info: string;
  error: string;
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
    return instance.post<any, AxiosResponse<LoginResponseType>>('/auth/login', {
      email,
      password,
      rememberMe,
    });
  },
  authMe() {
    return instance.post<any, AxiosResponse<LoginResponseType>>('/auth/me');
  },
  logout() {
    return instance.delete<any, AxiosResponse<ResponseTypeModel>>('/auth/me');
  },
  createNewPassword(password: string, resetPasswordToken: string) {
    return instance.post<any, AxiosResponse<ResponseTypeModel>>(
      '/auth/set-new-password',
      { password, resetPasswordToken },
    );
  },
  forgotPassword(userEmail: string) {
    return instance.post<any, AxiosResponse<ResponseTypeModel>>(
      '/auth/forgot',
      passwordRequestForm(userEmail, 'GuessCards.com'),
    );
  },
};
