import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getUsers, getQuestions } from './Actions';
import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';
import NewQuestion from './Components/NewQuestion/NewQuestion';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Questions from './Components/Questions/Questions';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(showLoading());
    dispatch(getUsers());
    dispatch(getQuestions()).then(() => dispatch(hideLoading()));
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.props);
    return (
      <div className="App">
        <LoadingBar />
        {this.props.authedUser ? (
          <React.Fragment>
            <Nav authedUser={this.props.authedUser} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Questions
                    questions={this.props.questions}
                    authedUser={this.props.authedUser}
                  />
                )}
              />
              <Route exact path="/new" component={NewQuestion} />
              <Route
                exact
                path="/leaderboard"
                render={() => <Leaderboard users={this.props.users} />}
              />
            </Switch>
          </React.Fragment>)
          : (
            <Login users={this.props.users} />
          )}

      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser, loadingBar }) => ({
  users,
  questions,
  authedUser,
  loadingBar,
});

export default connect(mapStateToProps)(App);
