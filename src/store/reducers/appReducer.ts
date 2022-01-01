export type appReducerInitialStateType = {
  isLoading: boolean;
  isAuth: boolean;
};

export const setIsLoading = 'APP/SET_IS_LOADING';
export type appReducerActionsType = setIsLoadingACType;
export type setIsLoadingACType = ReturnType<typeof setIsLoadingAC>;

export const appReducerInitState = {
  isLoading: false,
  isAuth: true,
};

export const appReducer = (
  state: appReducerInitialStateType = appReducerInitState,
  action: appReducerActionsType,
): appReducerInitialStateType => {
  switch (action.type) {
    case setIsLoading:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export const setIsLoadingAC = (isLoading: boolean) =>
  ({
    type: setIsLoading,
    isLoading,
  } as const);
