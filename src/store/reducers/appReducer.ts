import { Nullable } from 'types';

export type appReducerInitialStateType = {
  isLoading: boolean;
  isAuth: boolean;
  error: Nullable<string>;
};

export const setIsLoading = 'APP/SET_IS_LOADING';
export const setError = 'APP/SET_ERROR';
export const setIsAuth = 'APP/SET_IS_AUTH';

export type appReducerActionsType = setIsLoadingACType | setErrorACType | setIsAuthACType;
export type setIsLoadingACType = ReturnType<typeof setIsLoadingAC>;
export type setErrorACType = ReturnType<typeof setErrorAC>;
export type setIsAuthACType = ReturnType<typeof setIsAuthAC>;

export const appReducerInitState = {
  isLoading: false,
  isAuth: true,
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
