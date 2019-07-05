import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setAuthedUser } from "../../Actions/authedUser";
import classes from './Login.module.css';

class Login extends Component {
	state = {
		value: "users",
	};

	handleChange = e => {
		this.setState({
			value: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		let id = "";
		for (let user in this.props.users) {
			if (this.props.users[user].name === this.state.value) {
				id = this.props.users[user].id
			}
		}
		this.props.dispatch(setAuthedUser(id));
		this.props.history.push("/");
	};
	render() {
		const { users } = this.props;
		const names = Object.keys(users);
		return (
			<div className={classes.container}>
				<p className={classes.tomatoText}>Wellcome to the</p>
				<h2 className={classes.header}>Would You Rather?</h2>
				<p className={classes.tomatoText}>App</p>
				<p>To continue please log in.</p>
				<form onSubmit={this.handleSubmit}>
					<select
						className={classes.input}
						value={this.state.value}
						onChange={e => this.handleChange(e)}>
						<option>{this.state.value}</option>
						{names.map(name => (
							<option
								key={users[name].id}
								name={users[name].id}
								value={users[name].name}
							>
								{users[name].name}
							</option>
						))}
					</select>
					<input
						className={classes.bth}
						type="submit"
						value="Log In"
						disabled={this.state.value === "users"}
					/>
				</form>
			</div>
		);
	}
}

export default withRouter(connect()(Login));
