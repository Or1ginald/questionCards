import { AxiosResponse } from 'axios';

import { instance } from './apiConfig';

export const register = (email: string, password: string): Promise<AxiosResponse> =>
  instance.post('/auth/register', { email, password });
