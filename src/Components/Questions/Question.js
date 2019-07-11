import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Question.module.css';

const Question = props => {
  const questionID = props.questionID
    ? props.questionID
    : props.location.pathname
        .split('')
        .slice(1)
        .join('');
  const { questions, authedUser } = props;
  const author = props.users[questions[questionID].author];
  const question = questions[questionID];
  const isAnswered =
    question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3 className={classes.name}>{author.name} asks</h3>
      </div>

      <div className={classes.body}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={author.avatarURL} alt={`${author.name}'s avatar`} />
        </div>
        <div className={classes.info}>
          <h4 className={classes.name}>Would you rather</h4>
          <p className={classes.scoreItem}>
            <span>...{question.optionOne.text}...</span>
          </p>
          <Link
            to={{
              pathname: `/questions/${question.id}`,
              state: {
                question,
                author,
                isAnswered,
              },
            }}
          >
            <button type="button" className={classes.btn}>
              View Question
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser, questions }) => ({
  users,
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Question);
