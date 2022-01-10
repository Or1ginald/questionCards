import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { store } from './store/store';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
