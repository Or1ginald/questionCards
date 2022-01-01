import React, { ReactElement } from 'react';

import './App.scss';
import { useSelector } from 'react-redux';

import { Snackbar, Header, RoutesComponent } from 'components';
import { getError } from 'store';

export const App = (): ReactElement => {
  const error = useSelector(getError);
  return (
    <div className="App">
      <Header />
      <RoutesComponent />
      {error && <Snackbar />}
    </div>
  );
};
