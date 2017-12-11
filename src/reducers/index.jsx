import { combineReducers } from 'redux';

import issuesReducer from './issues-reducer';
import reposReducer from './repos-reducer';
import repoReducer from './repo-reducer';
import userReducer from './user-reducer';

// intial state moved to separate reducer files?

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({
  issues: issuesReducer
  , repos: reposReducer
  , selectedRepo: repoReducer
  , user: userReducer
});
