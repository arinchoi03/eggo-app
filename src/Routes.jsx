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

import { fetchRepos } from './action-creators/repos'

const Routes = (props) => {
  debugger
  return(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/users/:userId/repos" component={Repos} onEnter={() => {
      props.fetchUserRepos(props.user.id, props.user.key)}
    }/>
    <Route path="/users/:userId/:repoId/issues" component={Issues} />
    <Route path='*' component={NotFound} />
  </Router>
)}

/* ------------- CONTAINER ---------------- */
const mapStateToProps = ({user}) => ({user})
const mapDispatch = dispatch => ({
  fetchUserRepos: (userId, apiKey) => {
    dispatch(fetchRepos('arinchoi03', 'fd86605bf8811aa841be957757dd6064d209aa33'))
  }
})

export default connect(mapStateToProps, mapDispatch)(Routes)

