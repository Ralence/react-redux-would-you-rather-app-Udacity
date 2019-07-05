import React, { Component } from "react";
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
		//TODO handle submit
	};
	render() {
		console.log(this.state);
		return (
			<div className={classes.container}>
				<p>
					To create a new question enter two answer options in the text fields
          below
        </p>
				<h2 className={classes.header}>Would you rather...</h2>

				<form onSubmit={this.handleSubmit}>
					<input
						className={classes.input}
						type="text-area"
						name="optionOne"
						placeholder="Enter option One"
						value={this.state.optionOne}
						onChange={this.handleChange}
					/>
					<span>or..</span>
					<input
						className={classes.input}
						type="text-area"
						name="optionTwo"
						placeholder="Enter option Two"
						value={this.state.optionTwo}
						onChange={this.handleChange}
					/>
					<button className={classes.btn}>Submit</button>
				</form>
			</div>
		);
	}
}

export default NewQuestion;
