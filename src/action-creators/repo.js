import axios from 'axios';
import { browserHistory } from 'react-router';

//\//\//\//\//\ ACTION CREATORS //\//\//\//\//\

export const selectRepo = function(repo) {
  return {
    type: 'SELECT_REPO',
    selectedRepo: repo
  }
}

//\//\//\//\//\ DISPATCHERS //\//\//\//\//\

export const fetchRepos = function(repo) {
  return function(dispatch) {
    return axios.get(`https://api/github.com/users/${repo.full_name}`)
      .then(res => dispatch(selectRepo(res.data)))
  }
}

