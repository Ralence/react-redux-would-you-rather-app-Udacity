import React from "react";
import { connect } from "react-redux";

const QuestionInfo = props => {
  const { question, author, authedUser } = props;
  let userAnswer = null;

  if (question.optionOne.votes.includes(authedUser)) {
    userAnswer = "option one";
  }
  if (question.optionTwo.votes.includes(authedUser)) {
    userAnswer = "option Two";
  }

  return (
    <div>
      <h2>Question Stats</h2>
      <h4>
        {userAnswer}{" "}
        <span style={{ color: "tomato", fontSize: "1.5rem" }}>&#10003;</span>
      </h4>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(QuestionInfo);