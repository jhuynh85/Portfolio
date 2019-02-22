import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
	render() {
		return (
			<div className={"navbar no-select"}>
				<ul>
					<li>HOME</li>
					<li>ABOUT</li>
					<li>WORK</li>
					<li>CONTACT</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
