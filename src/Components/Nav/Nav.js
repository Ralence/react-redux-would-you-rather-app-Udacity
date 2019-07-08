import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import { connect } from 'react-redux';
import { logoutUser } from '../../Actions/authedUser';
import classes from './Nav.module.css';
import MiniUserCard from '../UI/MiniUserCard/MiniUserCard';

class Nav extends Component {

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  render() {
    return (
      <nav className={classes.Nav}>
        <ul className={classes.NavigationItems}>
          <NavItem className={classes.navItem} exact to='/'>Home</NavItem>
          <NavItem className={classes.navItem} to='/leaderboard'>Leader Board</NavItem>
          <NavItem className={classes.navItem} to='/new'>New Question</NavItem>
        </ul>
        <div className={classes.userOptions}>
          <button className={classes.logout} onClick={this.handleLogout}>Log Out</button>
          <MiniUserCard user={this.props.authedUser} />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
})

export default connect(mapStateToProps)(Nav);
