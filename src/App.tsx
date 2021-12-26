import React, { ReactElement } from 'react';

import './App.scss';
import { Header, RoutesComponent } from 'components';

export const App = (): ReactElement => (
  <div className="App">
    <Header />
    <RoutesComponent />
  </div>
);
