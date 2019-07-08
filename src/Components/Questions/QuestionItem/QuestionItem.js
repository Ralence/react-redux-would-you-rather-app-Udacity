import React from "react";
import { connect } from "react-redux";
import QuestionForm from "../QuestionForm/QuestionForm";
import QuestionStats from "../QuestionStats/QuestionStats";

const Question = props => {
  const { question, isAnswered, author } = props.location.state;
  let renderQuestion = null;

  if (!isAnswered) {
    renderQuestion = <QuestionForm question={question} author={author} />;
  } else {
    renderQuestion = <QuestionStats question={question} author={author} />;
  }

  return <div>{renderQuestion}</div>;
};

export default connect()(Question);