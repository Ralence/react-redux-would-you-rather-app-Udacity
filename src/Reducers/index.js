import { combineReducers } from 'redux';

import { loadingBarReducer } from 'react-redux-loading-bar';
import questionsReducer from './questions';
import usersReducer from './users';
import authedUserReducer from './authedUser';

const rootReducer = combineReducers({
  questions: questionsReducer,
  users: usersReducer,
  authedUser: authedUserReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
