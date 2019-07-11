import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import { logoutUser } from '../../Actions/authedUser';
import classes from './Nav.module.css';
import MiniUserCard from '../UI/MiniUserCard/MiniUserCard';

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
    this.props.history.push({
      pathname: '/login',
      state: { from: '/home' },
    });
  };

  render() {
    return (
      <nav className={classes.Nav}>
        <ul className={classes.NavigationItems}>
          <NavItem className={classes.navItem} exact to="/home">
            Home
          </NavItem>
          <NavItem className={classes.navItem} to="/leaderboard">
            Leader Board
          </NavItem>
          <NavItem className={classes.navItem} to="/add">
            New Question
          </NavItem>
        </ul>
        {this.props.authedUser && (
          <div className={classes.userOptions}>
            <MiniUserCard user={this.props.authedUser} />
            <button type="button" className={classes.logout} onClick={this.handleLogout}>
              Log Out
            </button>
          </div>
        )}
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default withRouter(connect(mapStateToProps)(Nav));
