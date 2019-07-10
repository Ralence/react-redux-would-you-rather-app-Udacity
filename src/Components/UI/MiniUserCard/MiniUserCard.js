import React from 'react';
import { connect } from 'react-redux';
import classes from './MiniUserCard.module.css';

const MiniUserCard = props => {
  const { user, users } = props;
  const userName = users[user].name;
  const url = users[user].avatarURL;

  return (
    <div className={classes.container}>
      <img className={classes.img} src={url} alt={`avatar of ${userName}`} />
      <span className={classes.user}>{userName}</span>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(MiniUserCard);
