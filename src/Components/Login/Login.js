import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setAuthedUser } from '../../Actions/authedUser';
import classes from './Login.module.css';

// Log in user, set authedUSer and redirect to "/"
class Login extends Component {
  state = {
    value: 'users',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let id = '';
    const { value } = this.state;
    const { users } = this.props;
    const userIDs = Object.keys(users);
    userIDs.forEach(userID => {
      if (users[userID].name === value) {
        id = userID;
      }
    });
    const from =
      this.props.location !== undefined && this.props.location.state !== undefined
        ? this.props.location.state.from
        : '/home';

    this.props.dispatch(setAuthedUser(id));
    this.props.history.push(`${from}`);
  };

  render() {
    const { users } = this.props;
    const names = Object.keys(users);
    return (
      <div className={classes.container}>
        <p className={classes.tomatoText}>Wellcome to the</p>
        <h2 className={classes.header}>Would You Rather?</h2>
        <p className={classes.tomatoText}>App</p>
        <p className={classes.text}>To continue please log in.</p>
        <form onSubmit={this.handleSubmit}>
          <select
            className={classes.input}
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          >
            <option>{this.state.value}</option>
            {names.map(name => (
              <option key={users[name].id} name={users[name].id} value={users[name].name}>
                {users[name].name}
              </option>
            ))}
          </select>
          <input
            className={classes.bth}
            type="submit"
            value="Log In"
            disabled={this.state.value === 'users'}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default withRouter(connect(mapStateToProps)(Login));
