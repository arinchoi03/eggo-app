import axios from 'axios';
import { browserHistory } from 'react-router';

//\//\//\//\//\ ACTION CREATORS //\//\//\//\//\

export const getIssues = function(issues) {
  return {
    type: 'GET_ISSUES',
    campuses: issues
  }
}

//\//\//\//\//\ DISPATCHERS //\//\//\//\//\

export const fetchIssues = function(selectedRepo) {
  return function(dispatch) {
    return axios.get(`https://api.github.com/repos/${selectedRepo.full_name}/issues`)
      .then(res => dispatch(getIssues(res.data)))
  }
}

