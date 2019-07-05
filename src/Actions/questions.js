export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});
