import React from 'react';
import classes from './NoMatch.module.css';

const NoMatch = () => (
  <div className={classes.container}>
    <p className={classes.text}>OOPS! Page not found!</p>
    <h2 className={classes.header}>404</h2>
    <p className={classes.text}>The page you are looking for doesn't exist!</p>
    <p className={classes.text}>Please, navigate to another page!</p>
  </div>
);

export default NoMatch;
