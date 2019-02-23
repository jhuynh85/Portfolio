import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.scss";

class Navbar extends Component {
	render() {
		return (
			<div className={"navbar no-select"}>
				<ul className={this.props.fade ? "navbar-fade-out" : "navbar-fade-in"}>
					<li>HOME</li>
					<li>ABOUT</li>
					<li>WORK</li>
					<li>CONTACT</li>
				</ul>
			</div>
		);
	}
}

Navbar.propTypes = {
	fade: PropTypes.bool
};

export default Navbar;
