import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import classes from './Nav.module.css';

class Nav extends Component {
  render() {
    return (
      <nav className={classes.Nav}>
        <ul className={classes.NavigationItems}>
          <NavItem exact to='/'>Home</NavItem>
          <NavItem to='/leaderboard'>Leader Board</NavItem>
          <NavItem to='/new'>New Question</NavItem>
        </ul>
        <span>Hi: {this.props.authedUser}</span>
      </nav>
    );
  }
}

export default Nav;
