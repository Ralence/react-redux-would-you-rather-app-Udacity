import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
// import setAuthedUser from './authedUser';
import { _getUsers, _getQuestions } from '../utils/_DATA';

export const getUsers = () => dispatch =>
  _getUsers().then(users => dispatch(receiveUsers(users)));

export const getQuestions = () => dispatch =>
  _getQuestions().then(questions => dispatch(receiveQuestions(questions)));
