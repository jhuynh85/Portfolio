import React, { Component } from "react";
import "./Main.scss";

import Hero from "../../presentational/Hero";

class Main extends Component {
	render() {
		return (
			<div className={"main"}>
				<Hero />
				<div className={"text"}>
					<span>Text here</span>
					<span>Text here</span>
					<span>Text here</span>
					<span>Text here</span>
					<span>Text here</span>
				</div>
			</div>
		);
	}
}

export default Main;
