import React from "react";
import { Link } from "react-router-dom";
import classes from "./Question.module.css";
import { connect } from "react-redux";

const Question = props => {
	console.log("ques", props);
	const { question } = props;
	const author = props.users[question.author];
	console.log(question, author);
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h3 className={classes.name}>{author.name} asks</h3>
			</div>

			<div className={classes.body}>
				<div className={classes.imgContainer}>
					<img
						className={classes.img}
						src={author.avatarURL}
						alt={author.name + "'s avatar"}
					/>
				</div>
				<div className={classes.info}>
					<h4 className={classes.name}>Would you rather..</h4>
					<p className={classes.scoreItem}>
						<span>...{question.optionOne.text}...</span>
					</p>
					<Link to="/:id">
						<button className={classes.btn}>View Question</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ users }) => {
	return {
		users
	};
};

export default connect(mapStateToProps)(Question);