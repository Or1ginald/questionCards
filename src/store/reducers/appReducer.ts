export type appReducerInitialStateType = {
  isLoading: boolean;
  isAuth: boolean;
};

export const appReducer = (
  state: appReducerInitialStateType,
  action: any,
): appReducerInitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
