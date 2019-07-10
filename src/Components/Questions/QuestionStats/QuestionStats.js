import React from 'react';
import { connect } from 'react-redux';
import Option from './Option';
import classes from './QuestionStats.module.css';

// takes in props and calculates and formats question data neded to render Option for each answer option
const QuestionInfo = props => {
  const { question, authedUser, users } = props.location ? props.location.state : props;
  const author = users[question.author];
  let userAnswer = null;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePersent =
    optionOneVotes === 0 ? 0 : Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPersent =
    optionTwoVotes === 0 ? 0 : Math.round((optionTwoVotes / totalVotes) * 100);

  if (question.optionOne.votes.includes(authedUser)) {
    userAnswer = 'optionOne';
  }
  if (question.optionTwo.votes.includes(authedUser)) {
    userAnswer = 'optionTwo';
  }

  const options = [
    {
      option: 'optionOne',
      userAnswer,
      totalVotes,
      optionVotes: optionOneVotes,
      persent: optionOnePersent,
      text: question.optionOne.text,
    },
    {
      option: 'optionTwo',
      userAnswer,
      totalVotes,
      optionVotes: optionTwoVotes,
      persent: optionTwoPersent,
      text: question.optionTwo.text,
    },
  ];

  return (
    <div className={classes.container}>
      <h2>Question stats:</h2>
      <div className={classes.header}>
        <h4>Asked by {author.name}</h4>
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={author.avatarURL} alt={`avatar of ${author.name}`} />
      </div>
      <div className={classes.stats}>
        {options.map(option => (
          <Option className={classes.progress} key={option.option} option={option} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(QuestionInfo);
