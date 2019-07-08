import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  receiveQuestions,
  saveQuestion,
  answerQuestion
} from './questions';
import { receiveUsers } from './users';
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from '../utils/_DATA';

export const getUsers = () => dispatch =>
  _getUsers().then(users => dispatch(receiveUsers(users)));

export const getQuestions = () => dispatch =>
  _getQuestions().then(questions => dispatch(receiveQuestions(questions)));

export const handleSaveQuestion = question => {
  return dispatch => {
    dispatch(showLoading());
    return _saveQuestion(question).then(question => {
      dispatch(saveQuestion(question));
      dispatch(hideLoading());
    });
  };
};

export const handleAnswerQuestion = questionInfo => {
  return dispatch => {
    dispatch(showLoading());
    return _saveQuestionAnswer(questionInfo).then(res => {
      dispatch(answerQuestion(questionInfo));
      dispatch(hideLoading());
    });
  };
};