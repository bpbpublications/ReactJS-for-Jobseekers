import React from "react";
import classes from "./styles.module.css";

export default class App extends React.Component {
	state = {
		currentCounter: 7,
		showCounter: true
	};

	onIncrementClick = () => {
		const updatedValue = this.state.currentCounter + 1;
		this.setState({ currentCounter: updatedValue });
	};

	onToggleCounterVisiblity = () => {
		this.setState({ showCounter: !this.state.showCounter });
	};

	render() {
		console.log("Inside Render");
		return (
			<main className={classes.MainContainer}>
				{!this.state.showCounter ? null : (
					<h1>{`Counter: ${this.state.currentCounter}`}</h1>
				)}
				<button onClick={this.onIncrementClick}>Increment Counter</button>
				<button onClick={this.onToggleCounterVisiblity}>
					{`${this.state.showCounter ? "Hide" : "Show"} Counter`}
				</button>
			</main>
		);
	}
}
