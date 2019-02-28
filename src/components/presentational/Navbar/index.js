import React from "react";
import PropTypes from "prop-types";
import "./Navbar.scss";

const Navbar = props => {
	const { fade } = props;
	return (
		<div className="navbar no-select">
			<ul className={fade ? "navbar-fade-out" : "navbar-fade-in"}>
				<li>HOME</li>
				<li>ABOUT</li>
				<li>WORK</li>
				<li>CONTACT</li>
			</ul>
		</div>
	);
};

Navbar.propTypes = {
	fade: PropTypes.bool
};

export default Navbar;
