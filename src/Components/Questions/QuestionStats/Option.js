import React from 'react';
import OptionStats from './OptionStats/OptionStats';
import MarkUserAnswer from './MarkUserAnswer';
import classes from './QuestionStats.module.css';

const Option = props => {
  const { option, userAnswer, totalVotes, optionVotes, persent, text } = props.option;

  return (
    <div
      className={classes.progress}
      style={userAnswer === option ? { border: 'solid tomato 1px', borderRadius: '4px' } : null}
    >
      <div className={classes.text} style={{ height: '30px' }}>
        {userAnswer === option && <MarkUserAnswer />}
      </div>
      <p className={classes.text}>Would you rather {text}</p>
      <OptionStats width={persent} />
      <p className={classes.text}>
        {optionVotes} of {totalVotes} votes
      </p>
    </div>
  );
};

export default Option;
