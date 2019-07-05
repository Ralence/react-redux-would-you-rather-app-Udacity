import { RECEIVE_QUESTIONS } from '../Actions/questions';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
};

export default questionsReducer;
