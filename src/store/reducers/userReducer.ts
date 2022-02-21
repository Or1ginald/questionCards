import { Dispatch } from 'redux';

import {
  setErrorAC,
  setIsAuthAC,
  setIsInitializedAC,
  setIsLoadingAC,
  setNotificationAC,
} from './appReducer';
import {
  setConfirmPasswordAC,
  setIsRegisteredAC,
  setPasswordAC,
} from './userAuthFormReducer';

import { authApi } from 'api';
import { AppThunk, Nullable } from 'types';

const setUserProfileData = 'USER_REDUCER/SET_USER_PROFILE_DATA';
const setStateToDefault = 'USER_REDUCER/SET_STATE_TO_DEFAULT';

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

export type userReducerActionsType = setUserProfileDataACType | setStateToDefaultACType;

export type setUserProfileDataACType = ReturnType<typeof setUserProfileDataAC>;
export type setStateToDefaultACType = ReturnType<typeof setStateToDefaultAC>;

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
    case setUserProfileData: {
      return { ...state, ...action.payload };
    }
    case setStateToDefault: {
      const newState = { ...state };
      // Object.keys(state).forEach(el => newState[el] === null);
      Object.fromEntries(Object.entries(newState).map(([k]) => [k, null]));
      return newState;
    }
    default:
      return state;
  }
};

export const setUserProfileDataAC = (payload: any) =>
  ({
    type: setUserProfileData,
    payload,
  } as const);

export const setStateToDefaultAC = () =>
  ({
    type: setStateToDefault,
  } as const);

export const setUserProfileDataTC = (): AppThunk => (dispatch: Dispatch, getState) => {
  const { email, password, rememberMe } = getState().userAuthForm;
  dispatch(setIsLoadingAC(true));
  authApi
    .login(email, password, rememberMe)
    .then(res => {
      dispatch(setUserProfileDataAC(res.data));
      dispatch(setIsAuthAC(true));
      dispatch(setIsInitializedAC(true));
    })
    .catch(e => dispatch(setErrorAC(e.response.data.error)))
    .finally(() => dispatch(setIsLoadingAC(false)));
};
export const authMeTC = (): AppThunk => (dispatch: Dispatch) => {
  dispatch(setIsLoadingAC(true));
  authApi
    .authMe()
    .then(res => {
      dispatch(setUserProfileDataAC(res.data));
      dispatch(setIsAuthAC(true));
    })
    .catch(e => {
      // console.log(JSON.stringify(e));
      dispatch(setErrorAC(e.message));
    })
    .finally(() => dispatch(setIsLoadingAC(false)));
};
export const logoutTC = (): AppThunk => (dispatch: Dispatch) => {
  dispatch(setIsLoadingAC(true));
  authApi
    .logout()
    .then(res => {
      console.log(res);
      dispatch(setStateToDefaultAC());
      dispatch(setIsAuthAC(false));
      dispatch(setNotificationAC('You have been successfully logged out!'));
    })
    .catch(() => {
      // dispatch(setErrorAC(e.response.data.error));
      dispatch(setStateToDefaultAC());
      dispatch(setIsAuthAC(false));
      dispatch(setNotificationAC('You have been successfully logged out!'));
    })
    .finally(() => dispatch(setIsLoadingAC(false)));
};
export const registerTC = (): AppThunk => (dispatch: Dispatch, getState) => {
  const email = getState().userAuthForm.email as string;
  const password = getState().userAuthForm.password as string;
  dispatch(setIsLoadingAC(true));
  authApi
    .register(email, password)
    .then(() => {
      dispatch(setIsRegisteredAC(true));
      dispatch(setNotificationAC('You have been registered!'));
      // dispatch(setStateToDefaultAC());
    })
    .catch(e => {
      dispatch(setErrorAC(e.response.data.error));
    })
    .finally(() => dispatch(setIsLoadingAC(false)));
};
export const forgotPasswordTC = (): AppThunk => (dispatch: Dispatch, getState) => {
  const email = getState().userAuthForm.email as string;
  dispatch(setIsLoadingAC(true));
  authApi
    .forgotPassword(email)
    .then(() => {
      // dispatch(setIsRegisteredAC(true));
      dispatch(setNotificationAC('Recovery mail was sent'));
      // dispatch(setStateToDefaultAC());
    })
    .catch(e => {
      dispatch(setErrorAC(e.response.data.error));
    })
    .finally(() => dispatch(setIsLoadingAC(false)));
};
export const createNewPasswordTC =
  (resetPasswordToken: string): AppThunk =>
  (dispatch: Dispatch, getState) => {
    const password = getState().userAuthForm.password as string;
    dispatch(setIsLoadingAC(true));
    authApi
      .createNewPassword(password, resetPasswordToken)
      .then(() => {
        // dispatch(setIsRegisteredAC(true));
        dispatch(setNotificationAC('New password was created'));
        // dispatch(setStateToDefaultAC());
      })
      .catch(e => {
        dispatch(setErrorAC(e.response.data.error));
      })
      .finally(() => {
        dispatch(setPasswordAC(null));
        dispatch(setConfirmPasswordAC(null));
        dispatch(setIsLoadingAC(false));
      });
  };
