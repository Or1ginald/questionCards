import { Nullable } from 'types';

const setEmail = 'REGISTRATION/SET_EMAIL';
const setPassword = 'REGISTRATION/SET_PASSWORD';
const setConfirmPassword = 'REGISTRATION/SET_CONFIRM_PASSWORD';
const setError = 'REGISTRATION/SET_ERROR';

export type RegistrationReducerActionsType =
  | setEmailACType
  | setPasswordACType
  | setConfirmPasswordACType
  | setErrorACType;

export type setEmailACType = ReturnType<typeof setEmailAC>;
export type setPasswordACType = ReturnType<typeof setPasswordAC>;
export type setConfirmPasswordACType = ReturnType<typeof setConfirmPasswordAC>;
export type setErrorACType = ReturnType<typeof setErrorAC>;

export type RegistrationReducerInitStateType = {
  email: Nullable<string>;
  password: Nullable<string>;
  confirmPassword: Nullable<string>;
  error: Nullable<string>;
};

export const registrationReducerInitState = {
  email: null,
  password: null,
  confirmPassword: null,
  error: null,
};

export const registrationReducer = (
  state: RegistrationReducerInitStateType = registrationReducerInitState,
  action: RegistrationReducerActionsType,
): RegistrationReducerInitStateType => {
  switch (action.type) {
    case setEmail:
      return { ...state, email: action.email };
    case setPassword:
      return { ...state, password: action.password };
    case setConfirmPassword:
      return { ...state, confirmPassword: action.confirmPassword };
    case setError:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export const setEmailAC = (email: Nullable<string>) =>
  ({
    type: setEmail,
    email,
  } as const);
export const setPasswordAC = (password: Nullable<string>) =>
  ({
    type: setPassword,
    password,
  } as const);
export const setConfirmPasswordAC = (confirmPassword: Nullable<string>) =>
  ({
    type: setConfirmPassword,
    confirmPassword,
  } as const);
export const setErrorAC = (error: Nullable<string>) =>
  ({
    type: setError,
    error,
  } as const);
