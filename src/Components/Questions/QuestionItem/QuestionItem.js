import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from '../QuestionForm/QuestionForm';
import QuestionStats from '../QuestionStats/QuestionStats';
import NoMatch from '../../NoMatch/NoMatch';

// Determine if the question has been answered and based on it render QuestionForm or QuestionStats
const Question = props => {
  const questionID = props.match.params.id;
  const { questions } = props;
  if (!questions[questionID]) {
    return <NoMatch />;
  }
  const question = questions[questionID];
  const isAnswered =
    question.optionOne.votes.includes(props.authedUser) ||
    question.optionTwo.votes.includes(props.authedUser);
  let renderQuestion = null;

  if (!isAnswered) {
    renderQuestion = <QuestionForm question={question} />;
  } else {
    renderQuestion = <QuestionStats question={question} />;
  }

  return <div>{renderQuestion}</div>;
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Question);
