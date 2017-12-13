'use strict';

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

// export const fetchProduct = (id) => dispatch => {
  // axios.get(`/api/products/${id}`)
  // .then(res => dispatch(selectProduct(res.data)))
  // .catch(err => console.error('Error fetching the product', err))
// }

export const fetchRepos = (userId, apiKey) => dispatch => {
  axios.get(`https://api.github.com/users/${userId}/repos?access_token=${apiKey}`)
    .then(res => {
      localStorage.setItem('repos', JSON.stringify(res.data))
      dispatch(getRepos(res.data))
    })
    .catch(err => console.error('error fetching repos'))
}

