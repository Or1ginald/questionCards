import React, { ReactElement, useEffect } from 'react';

import './App.scss';
import { useDispatch, useSelector } from 'react-redux';

import { Notification } from './components/common/notification/Notification';
import { initializeTC } from './store/reducers/appReducer';

import { Snackbar, Header, RoutesComponent, Spinner } from 'components';
import { getError, getIsInitialized, getIsLoading, getNotification } from 'store';

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const notification = useSelector(getNotification);
  // const isAuth = useSelector(getIsAuth);
  const isInitialized = useSelector(getIsInitialized);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(initializeTC());
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <Header />
        <Spinner />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <RoutesComponent />
      {error && <Snackbar />}
      {notification && <Notification />}
    </div>
  );
};
