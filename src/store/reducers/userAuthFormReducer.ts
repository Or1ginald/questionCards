import { Nullable } from 'types';

const setEmail = 'REGISTRATION/SET_EMAIL';
const setPassword = 'REGISTRATION/SET_PASSWORD';
const setConfirmPassword = 'REGISTRATION/SET_CONFIRM_PASSWORD';
const setIsRegistered = 'REGISTRATION/SET_IS_REGISTERED';
const setRememberMe = 'REGISTRATION/SET_REMEMBER_ME';

export type userAuthFormReducerActionsType =
  | setEmailACType
  | setPasswordACType
  | setConfirmPasswordACType
  | setIsRegisteredACType
  | setRememberMeACType;

export type setEmailACType = ReturnType<typeof setEmailAC>;
export type setPasswordACType = ReturnType<typeof setPasswordAC>;
export type setConfirmPasswordACType = ReturnType<typeof setConfirmPasswordAC>;
export type setIsRegisteredACType = ReturnType<typeof setIsRegisteredAC>;
export type setRememberMeACType = ReturnType<typeof setRememberMeAC>;

export type UserAuthFormInitStateType = {
  email: Nullable<string>;
  password: Nullable<string>;
  confirmPassword: Nullable<string>;
  rememberMe: Nullable<boolean>;
  isRegistered: boolean;
};

export const userAuthFormReducerInitState = {
  email: null,
  password: null,
  confirmPassword: null,
  rememberMe: null,
  error: null,
  isRegistered: false,
};

export const userAuthFormReducer = (
  state: UserAuthFormInitStateType = userAuthFormReducerInitState,
  action: userAuthFormReducerActionsType,
): UserAuthFormInitStateType => {
  switch (action.type) {
    case setEmail:
      return { ...state, email: action.email };
    case setPassword:
      return { ...state, password: action.password };
    case setConfirmPassword:
      return { ...state, confirmPassword: action.confirmPassword };
    case setRememberMe:
      return { ...state, rememberMe: action.doRemember };
    case setIsRegistered:
      return { ...state, isRegistered: action.isRegistered };
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
export const setRememberMeAC = (doRemember: Nullable<boolean>) =>
  ({
    type: setRememberMe,
    doRemember,
  } as const);
export const setIsRegisteredAC = (isRegistered: boolean) =>
  ({
    type: setIsRegistered,
    isRegistered,
  } as const);
