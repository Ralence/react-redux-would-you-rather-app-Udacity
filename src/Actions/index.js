import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { receiveQuestions, saveQuestion, answerQuestion } from './questions';
import { receiveUsers } from './users';
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

// Acync actions with redux-thunk
export const getUsers = () => dispatch => _getUsers().then(users => dispatch(receiveUsers(users)));

export const getQuestions = () => dispatch =>
  _getQuestions().then(questions => dispatch(receiveQuestions(questions)));

export const handleSaveQuestion = question => dispatch => {
  dispatch(showLoading());
  return _saveQuestion(question).then(ques => {
    dispatch(saveQuestion(ques));
    dispatch(hideLoading());
  });
};

// Function uses ownProps to access history.push() and navigate to QuestionStats
export const handleAnswerQuestion = (questionInfo, ownProps) => dispatch => {
  dispatch(showLoading());
  return _saveQuestionAnswer(questionInfo).then(res => {
    dispatch(answerQuestion(questionInfo));
    dispatch(hideLoading());
    // After the question ansver is saved on server and locally navigate to the updated Question Stas
    ownProps.history.push({
      pathname: `/questions/${ownProps.question.id}`,
      state: {
        question: ownProps.question,
        author: ownProps.author,
        isAnswered: true,
      },
    });
  });
};
