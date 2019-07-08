import React, { Component } from "react";
import classes from "./QuestionForm.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAnswerQuestion } from "../../../Actions/index";

class QuestionForm extends Component {
  state = {
    selected: null
  };

  handleChange = e => {
    this.setState({ selected: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { authedUser, dispatch } = this.props;
    const qid = this.props.question.id;
    const answer = this.state.selected;
    const answerInfo = {
      authedUser,
      answer,
      qid
    };
    dispatch(handleAnswerQuestion(answerInfo));
    this.props.history.push("/");
  };

  render() {
    const { question, author } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h3 className={classes.name}>{author.name} asks:</h3>
        </div>

        <div className={classes.body}>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              src={author.avatarURL}
              alt={author.name + "'s avatar"}
            />
          </div>
          <div className={classes.formContainer}>
            <h4 className={classes.name}>Would you rather..</h4>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <div className={classes.formItem}>
                <label>
                  <input
                    type="radio"
                    value="optionOne"
                    checked={this.state.selected === "optionOne"}
                    onChange={this.handleChange}
                  />
                  {question.optionOne.text}
                </label>
              </div>
              <div className={classes.formItem}>
                <label>
                  <input
                    type="radio"
                    value="optionTwo"
                    checked={this.state.selected === "optionTwo"}
                    onChange={this.handleChange}
                  />
                  {question.optionTwo.text}
                </label>
              </div>
              <input type="submit" className={classes.btn} value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default withRouter(connect(mapStateToProps)(QuestionForm));
