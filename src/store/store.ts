import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer, userAuthFormReducer } from 'store/reducers';

export const rootReducer = combineReducers({
  app: appReducer,
  userAuthForm: userAuthFormReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore

window.store = store;
