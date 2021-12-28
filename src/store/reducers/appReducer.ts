export type appReducerInitialStateType = {
  isLoading: boolean;
  isAuth: boolean;
};

export const appReducerInitState = {
  isLoading: false,
  isAuth: true,
};

export const appReducer = (
  state: appReducerInitialStateType = appReducerInitState,
  action: any,
): appReducerInitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
