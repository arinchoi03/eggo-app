import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Route, Router, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import Repos from './components/Repos';
import Issues from './components/Issues';
import NotFound from './components/NotFound';

import { fetchRepos } from './action-creators/repos'

const Routes = ({ getUserRepos }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={getUserRepos}>
      <IndexRoute component={Repos} />
      <Route path="/users/:userId/repos" component={Repos} />
      <Route path="/users/:userId/:repoId/issues" component={Issues} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

/* ------------- CONTAINER ---------------- */

const mapStateToProps = null
const mapDispatch = dispatch => ({
  getUserRepos: (userId) => {
    dispatch(fetchRepos(userId))
  }
})

export default connect(mapStateToProps, mapDispatch)(Routes)

