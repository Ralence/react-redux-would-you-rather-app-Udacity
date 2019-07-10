import React from 'react';
import classes from './Leaderboard.module.css';

// takes in a user object and returns UserSummary component for LeaederBoard
const UserSummary = props => {
  const { name } = props;
  return (
    <div key={name.id} className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={name.avatar} alt={`${name.name}'s avatar`} />
      </div>
      <div className={classes.info}>
        <h3 className={classes.name}>{name.name}</h3>
        <p className={classes.scoreItem}>
          <span>Answered questions</span>
          <span>{name.answered}</span>
        </p>
        <p className={classes.scoreItem}>
          <span>Created questions</span>
          <span>{name.asked}</span>
        </p>
      </div>
      <div className={classes.score}>
        <p>score</p>
        <div className={classes.tomato}>{name.total}</div>
      </div>
    </div>
  );
};

export default UserSummary;
