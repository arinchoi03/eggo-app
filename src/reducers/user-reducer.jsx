'use strict'
//\//\//\//\//\ CAMPUS INITIAL STATE //\//\//\//\//\

const user = {
  id: ''
  , key: ''
};

//\//\//\//\//\ CAMPUS CONSTANTS //\//\//\//\//\

const SET_USER = 'SET_USER'
// const GET_USER = 'GET_USER'


//\//\//\//\//\ CAMPUS REDUCERS //\//\//\//\//\

export default function ( state = user, action) {
  switch (action.type) {
    case SET_USER:
      debugger
      return { id: action.userId, key: action.apiKey }
    // case GET_USER:
      // debugger
      // return
    default:
      return state
  }
}

