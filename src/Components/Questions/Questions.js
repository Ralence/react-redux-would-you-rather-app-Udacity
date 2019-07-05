import React, { Component } from "react";
import Question from "./Question";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "./Questions.module.css";

class Home extends Component {
	render() {
		const { questions, authedUser } = this.props;
		const answered = !authedUser
			? []
			: Object.keys(questions).filter(
				key =>
					questions[key].optionOne.votes.includes(authedUser) ||
					questions[key].optionTwo.votes.includes(authedUser)
			);
		const unanswered = !authedUser
			? []
			: Object.keys(questions).filter(
				key =>
					!questions[key].optionOne.votes.includes(authedUser) &&
					!questions[key].optionTwo.votes.includes(authedUser)
			);

		const renderAnswered = answered.map(ques => (
			<Question key={ques} question={questions[ques]} isAnswered={true} />
		));
		const renderUnanswered = unanswered.map(ques => (
			<Question key={ques} question={questions[ques]} isAnswered={true} />
		));
		console.log(answered, unanswered);
		return (
			<div className={classes.container}>
				<h2>Questions</h2>
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

export default Home;
