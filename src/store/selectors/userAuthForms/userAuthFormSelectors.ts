import { RootStateType } from 'store';
import { Nullable } from 'types';

export const getEmail = (state: RootStateType): Nullable<string> =>
  state.userAuthForm.email;
export const getPassword = (state: RootStateType): Nullable<string> =>
  state.userAuthForm.password;
export const getConfirmPassword = (state: RootStateType): Nullable<string> =>
  state.userAuthForm.confirmPassword;
