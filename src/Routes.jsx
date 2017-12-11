import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Route, Router, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import queryString from 'query-string';

import './index.css';
import App from './App';
import Repos from './components/Repos';
import Issues from './components/Issues';
import NotFound from './components/NotFound';

// import { fetchRepos } from './action-creators/repos'

const Routes = () => {
  return(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/users/:userId/repos" component={Repos} />
    <Route path="/users/:userId/:repoId/issues" component={Issues} />
    <Route path='*' component={NotFound} />
  </Router>
)}

/* ------------- CONTAINER ---------------- */

export default Routes
