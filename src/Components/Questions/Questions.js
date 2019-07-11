import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Question from './Question';
import 'react-tabs/style/react-tabs.css';
import classes from './Questions.module.css';

// Takes questions, sorts the to answered and unanswered and displays them in tabs in order from newer questions to older
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
      : Object.keys(questions)
          .filter(
            key =>
              !questions[key].optionOne.votes.includes(authedUser) &&
              !questions[key].optionTwo.votes.includes(authedUser)
          )
          .map(ques => questions[ques])
          .sort((a, b) => b.timestamp - a.timestamp);

    const renderAnswered = answered.map(ques => (
      <Question
        key={ques.id}
        questionID={ques.id}
        isAnswered={
          ques.optionOne.votes.includes(authedUser) || ques.optionTwo.votes.includes(authedUser)
        }
      />
    ));
    const renderUnanswered = unanswered.map(ques => (
      <Question
        key={ques.id}
        questionID={ques.id}
        isAnswered={
          ques.optionOne.votes.includes(authedUser) || ques.optionTwo.votes.includes(authedUser)
        }
      />
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

const mapStateToProps = ({ questions, authedUser }) => ({
  questions,
  authedUser,
});

export default connect(mapStateToProps)(Questions);
