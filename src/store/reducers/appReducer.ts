import { Dispatch } from 'redux';

import { authApi } from '../../api';

import { setUserProfileDataAC } from './userReducer';

import { AppThunk, Nullable } from 'types';

export type appReducerInitialStateType = {
  isLoading: boolean;
  isAuth: boolean;
  error: Nullable<string>;
  isInitialized: boolean;
};

export const setIsLoading = 'APP/SET_IS_LOADING';
export const setError = 'APP/SET_ERROR';
export const setIsAuth = 'APP/SET_IS_AUTH';
export const setIsInitialized = 'APP/SET_IS_INITIALIZED';

export type appReducerActionsType =
  | setIsLoadingACType
  | setErrorACType
  | setIsAuthACType
  | setIsInitializedACType;
export type setIsLoadingACType = ReturnType<typeof setIsLoadingAC>;
export type setErrorACType = ReturnType<typeof setErrorAC>;
export type setIsAuthACType = ReturnType<typeof setIsAuthAC>;
export type setIsInitializedACType = ReturnType<typeof setIsInitializedAC>;

export const appReducerInitState = {
  isInitialized: false,
  isLoading: false,
  isAuth: false,
  error: null,
};

export const appReducer = (
  state: appReducerInitialStateType = appReducerInitState,
  action: appReducerActionsType,
): appReducerInitialStateType => {
  switch (action.type) {
    case setIsLoading:
      return { ...state, isLoading: action.isLoading };
    case setError:
      return { ...state, error: action.error };
    case setIsAuth:
      return { ...state, isAuth: action.isAuth };
    case setIsInitialized:
      return { ...state, isInitialized: action.isInitialized };
    default:
      return state;
  }
};

export const setIsLoadingAC = (isLoading: boolean) =>
  ({
    type: setIsLoading,
    isLoading,
  } as const);
export const setErrorAC = (error: Nullable<string>) =>
  ({
    type: setError,
    error,
  } as const);
export const setIsAuthAC = (isAuth: boolean) =>
  ({
    type: setIsAuth,
    isAuth,
  } as const);
export const setIsInitializedAC = (isInitialized: boolean) =>
  ({
    type: setIsInitialized,
    isInitialized,
  } as const);

export const initializeTC = (): AppThunk => (dispatch: Dispatch) => {
  dispatch(setIsLoadingAC(true));
  return authApi
    .authMe()
    .then(res => {
      dispatch(setIsAuthAC(true));
      dispatch(setUserProfileDataAC(res.data));
    })
    .finally(() => {
      dispatch(setIsInitializedAC(true));
      dispatch(setIsLoadingAC(false));
    });
};
