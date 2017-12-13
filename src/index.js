import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRedirect, browserHistory } from 'react-router'
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import store from './store'
import Routes from './Routes'


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
