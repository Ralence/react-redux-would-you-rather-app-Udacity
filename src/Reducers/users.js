import { RECEIVE_USERS } from '../Actions/users';
import { SAVE_QUESTION, ANSWER_QUESTION } from '../Actions/questions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question]),
        },
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.answerInfo.authedUser]: {
          ...state[action.answerInfo.authedUser],
          answers: {
            ...state[action.answerInfo.authedUser].answers,
            [action.answerInfo.qid]: action.answerInfo.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default usersReducer;
