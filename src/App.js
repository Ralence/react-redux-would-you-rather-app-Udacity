import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getUsers, getQuestions } from './Actions';
import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';
import NewQuestion from './Components/NewQuestion/NewQuestion';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Questions from './Components/Questions/Questions';
import QuestionItem from './Components/Questions/QuestionItem/QuestionItem';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/HOC/PrivateRoute';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // Dispatch actions to the reducers to load the initial data from the server and set up the state in the store
    dispatch(showLoading());
    dispatch(getUsers());
    dispatch(getQuestions()).then(() => dispatch(hideLoading()));
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        <React.Fragment>
          <Nav authedUser={this.props.authedUser} />
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/home" component={Questions} />
            <Redirect exact from="/" to="/home" />
            <PrivateRoute path="/add" component={NewQuestion} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <PrivateRoute path="/questions/:id" component={QuestionItem} />
            <PrivateRoute path="*" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
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
