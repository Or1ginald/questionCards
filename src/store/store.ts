import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './reducers/appReducer';
import { registrationReducer } from './reducers/registrationReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore

window.store = store;
