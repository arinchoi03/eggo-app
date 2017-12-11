'use strict'
//\//\//\//\//\ CAMPUS INITIAL STATE //\//\//\//\//\

const repos = [];

//\//\//\//\//\ CAMPUS CONSTANTS //\//\//\//\//\

const GET_REPOS = 'GET_REPOS'


//\//\//\//\//\ CAMPUS REDUCERS //\//\//\//\//\

export default function ( state = repos, action) {

  switch (action.type) {
    case GET_REPOS:
      // retrieves all campuses from db & sets it to store.state's campuses
      return action.repos
    default:
      return state
  }
  // return state
}

