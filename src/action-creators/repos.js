import axios from 'axios';
import { browserHistory } from 'react-router';

//\//\//\//\//\ ACTION CREATORS //\//\//\//\//\

export const getRepos = function(repos) {
  return {
    type: 'GET_REPOS',
    repos: repos
  }
}

//\//\//\//\//\ DISPATCHERS //\//\//\//\//\

export const fetchRepos = function(userId) {
  return function(dispatch) {
    return axios.get(`https://api/github.com/users/${userId}/repos`)
      .then(res => dispatch(getRepos(res.data)))
  }
}

