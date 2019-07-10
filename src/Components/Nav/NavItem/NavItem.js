import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink
      className={classes.Item}
      activeClassName={classes.active}
      to={props.to}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
