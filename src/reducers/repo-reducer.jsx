'use strict'
//\//\//\//\//\ CAMPUS INITIAL STATE //\//\//\//\//\

const selectedRepo = {};

//\//\//\//\//\ CAMPUS CONSTANTS //\//\//\//\//\

const SELECT_REPO = 'SELECT_REPO'


//\//\//\//\//\ CAMPUS REDUCERS //\//\//\//\//\

export default function ( state = selectedRepo, action) {

  switch (action.type) {
    case SELECT_REPO:
      // retrieves all campuses from db & sets it to store.state's campuses
      return action.selectedRepo
    default:
      return state
  }
}

