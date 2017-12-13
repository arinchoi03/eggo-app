import axios from 'axios';
import { browserHistory } from 'react-router';

//\//\//\//\//\ ACTION CREATORS //\//\//\//\//\

export const setUser = function(userId, apiKey) {
  return {
    type: 'SET_USER',
    userId: userId,
    apiKey: apiKey
  }
}

//\//\//\//\//\ DISPATCHERS //\//\//\//\//\

export const setUserInfo = (userId, apiKey) => dispatch => {
  dispatch(setUser(userId, apiKey))
  browserHistory.push(`/users/${this.state.id}/repos`)
}

