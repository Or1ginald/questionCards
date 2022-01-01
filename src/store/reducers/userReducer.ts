import { Dispatch } from 'redux';

import { setIsLoadingAC } from './appReducer';

import { authApi } from 'api';
import { AppThunk, Nullable } from 'types';

const setUserProfileData = 'USER_REDUCER/SET_USER_PROFILE_DATA';

export type userReducerInitialStateType = {
  _id: Nullable<string>;
  email: Nullable<string>;
  name: Nullable<string>;
  avatar?: Nullable<string>;
  publicCardPacksCount: Nullable<number>; // количество колод
  created: Nullable<Date>;
  updated: Nullable<Date>;
  isAdmin: Nullable<boolean>;
  verified: Nullable<boolean>; // подтвердил ли почту
  rememberMe: Nullable<boolean>;
  error?: Nullable<string>;
};

export type userReducerActionsType = setUserProfileDataACType;

export type setUserProfileDataACType = ReturnType<typeof setUserProfileDataAC>;

const userReducerInitialState = {
  _id: null,
  email: null,
  name: null,
  avatar: null,
  publicCardPacksCount: null, // количество колод
  created: null,
  updated: null,
  isAdmin: null,
  verified: null, // подтвердил ли почту
  rememberMe: null,
  error: null,
};

export const userReducer = (
  state: userReducerInitialStateType = userReducerInitialState,
  action: userReducerActionsType,
): userReducerInitialStateType => {
  switch (action.type) {
    case setUserProfileData:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setUserProfileDataAC = (payload: any) =>
  ({
    type: setUserProfileData,
    payload,
  } as const);

export const setUserProfileDataTC = (): AppThunk => (dispatch: Dispatch, getState) => {
  const { email, password, rememberMe } = getState().userAuthForm;
  dispatch(setIsLoadingAC(true));
  authApi.login(email, password, rememberMe).then(res => {
    dispatch(setUserProfileDataAC(res.data));
  });
};
