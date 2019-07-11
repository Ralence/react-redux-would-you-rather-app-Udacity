import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authed = !!rest.authedUser;
  return (
    <Route
      {...rest}
      render={props =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
