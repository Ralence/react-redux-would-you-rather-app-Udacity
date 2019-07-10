export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const saveQuestion = question => ({
  type: SAVE_QUESTION,
  question,
});

export const answerQuestion = answerInfo => ({
  type: ANSWER_QUESTION,
  answerInfo,
});
