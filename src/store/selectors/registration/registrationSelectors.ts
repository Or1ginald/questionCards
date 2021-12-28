import { RootStateType } from 'store';
import { Nullable } from 'types';

export const getEmail = (state: RootStateType): Nullable<string> =>
  state.registration.email;
export const getPassword = (state: RootStateType): Nullable<string> =>
  state.registration.password;
export const getConfirmPassword = (state: RootStateType): Nullable<string> =>
  state.registration.confirmPassword;
export const getError = (state: RootStateType): Nullable<string> =>
  state.registration.error;
