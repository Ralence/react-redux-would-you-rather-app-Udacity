import React, { Component } from "react";
import Question from "./Question";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "./Questions.module.css";

class Questions extends Component {
  render() {
    const { questions, authedUser } = this.props;
    const answered = !authedUser
      ? []
      : Object.keys(questions)
        .filter(
          key =>
            questions[key].optionOne.votes.includes(authedUser) ||
            questions[key].optionTwo.votes.includes(authedUser)
        )
        .map(ques => questions[ques])
        .sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = !authedUser
      ? []
      : Object.keys(questions).filter(
        key =>
          !questions[key].optionOne.votes.includes(authedUser) &&
          !questions[key].optionTwo.votes.includes(authedUser)
      )
        .map(ques => questions[ques])
        .sort((a, b) => b.timestamp - a.timestamp);

    const renderAnswered = answered.map(ques => (
      <Question
        key={ques.id}
        question={ques}
        isAnswered={true}
        listItem={true} />
    ));
    const renderUnanswered = unanswered.map(ques => (
      <Question
        key={ques.id}
        question={ques}
        isAnswered={false}
        listItem={true} />
    ));

    return (
      <div className={classes.container}>
        <h2 className={classes.heading}>Questions</h2>
        <Tabs>
          <TabList>
            <Tab className={classes.tab}>Unanswered</Tab>
            <Tab className={classes.tab}>Ananswered</Tab>
          </TabList>

          <TabPanel>{renderUnanswered}</TabPanel>
          <TabPanel>{renderAnswered}</TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Questions;
