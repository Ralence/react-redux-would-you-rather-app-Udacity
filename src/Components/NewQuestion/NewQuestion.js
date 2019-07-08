import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSaveQuestion } from "../../Actions";
import classes from "./NewQuestion.module.css";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    const question = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser
    };

    if (
      this.state.optionOne.length === 0 ||
      this.state.optionTwo.length === 0
    ) {
      alert("Please fill in the questions!");
    } else {
      dispatch(handleSaveQuestion(question)).then(() =>
        this.props.history.push("/")
      );
    }
  };

  render() {
    return (
      <div className={classes.container}>
        <p>
          To create a new question enter two answer options in the text fileds
          below
        </p>
        <h2 className={classes.header}>Would you rather...</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.inputContainer}>
            <input
              className={classes.input}
              type="text-area"
              name="optionOne"
              placeholder="Enter option One"
              value={this.state.optionOne}
              onChange={this.handleChange}
              maxLength="50"
            />
            {this.state.optionOne.length > 35 && (
              <p className={classes.red}>{50 - this.state.optionOne.length}</p>
            )}
          </div>
          <span>or..</span>
          <div className={classes.inputContainer}>
            <input
              className={classes.input}
              type="text-area"
              name="optionTwo"
              placeholder="Enter option Two"
              value={this.state.optionTwo}
              onChange={this.handleChange}
              maxLength="50"
            />
            {this.state.optionTwo.length > 35 && (
              <p className={classes.red}>{50 - this.state.optionTwo.length}</p>
            )}
          </div>
          <button className={classes.btn}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(NewQuestion));
