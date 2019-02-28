import React from "react";
import PropTypes from "prop-types";
import "./Navbar.scss";

import { LINKS } from "../../../utils/constants";

const Navbar = props => {
	const { fade } = props;
	return (
		<div className="navbar no-select">
			<ul className={fade ? "navbar-fade-out" : "navbar-fade-in"}>
				{LINKS.map(link => (
					<li>{link}</li>
				))}
			</ul>
		</div>
	);
};

Navbar.propTypes = {
	fade: PropTypes.bool
};

export default Navbar;
