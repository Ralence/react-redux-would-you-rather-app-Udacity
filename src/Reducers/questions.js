import { RECEIVE_QUESTIONS, SAVE_QUESTION, ANSWER_QUESTION } from '../Actions/questions';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.answerInfo.qid]: {
          ...state[action.answerInfo.qid],
          [action.answerInfo.answer]: {
            ...state[action.answerInfo.qid][action.answerInfo.answer],
            votes: state[action.answerInfo.qid][action.answerInfo.answer].votes.concat(
              action.answerInfo.authedUser
            ),
          },
        },
      };
    default:
      return state;
  }
};

export default questionsReducer;
