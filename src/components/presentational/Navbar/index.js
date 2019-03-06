import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import "./Navbar.scss";

import { LINKS } from "../../../assets/js/constants";

const Navbar = props => {
	const { fade } = props;
	return (
		<div
			className={`navbar no-select ${
				fade ? "navbar-fade-out" : "navbar-fade-in"
			}`}>
			<div className="logo-text" />
			<ul>
				{LINKS.map(link => (
					<Link to={link} smooth offset={-50} duration={250}>
						<li key={link}>{link}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

Navbar.propTypes = {
	fade: PropTypes.bool
};

export default Navbar;
