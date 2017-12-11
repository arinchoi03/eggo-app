'use strict'
//\//\//\//\//\ CAMPUS INITIAL STATE //\//\//\//\//\

const issues = [];

//\//\//\//\//\ CAMPUS CONSTANTS //\//\//\//\//\

const GET_ISSUES = 'GET_ISSUES'
const REORDER_ISSUES = 'REORDER_ISSUES';


//\//\//\//\//\ CAMPUS REDUCERS //\//\//\//\//\

export default function ( state = issues, action) {

  switch (action.type) {
    case GET_ISSUES:
      // retrieves all campuses from db & sets it to store.state's campuses
      return action.issues
    case REORDER_ISSUES:
      // updates the current selectedCampus
      return action.issues
      // case SELECT_CAMPUS:
      // // sets selectedCampus on state
      // return state.set('selectedCampus', Immutable.fromJS(action.campus))
    default:
      return state
  }
  // return state
}
