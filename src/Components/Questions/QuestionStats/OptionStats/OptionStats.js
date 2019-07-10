import React from 'react';
import classes from './OptionStats.module.css';

const OptionStats = props => {
  const { width } = props;
  const spanWidth = `${width}%`;

  return (
    <div className={classes.wrapper}>
      <div className={classes.progressBar}>
        <p style={{ position: 'absolute', marginLeft: '5px' }}>{spanWidth}</p>
        <span className={classes.progressBarFill} style={{ width: spanWidth }} />
      </div>
    </div>
  );
};

export default OptionStats;
