import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import "./BurgerMenu.scss";

import { LINKS } from "../../assets/js/constants";

const BurgerMenu = (props) => {
	return (
		<Menu {...props}>
			{LINKS.map((link) => (
				<Link
					to={link}
					smooth
					offset={-50}
					duration={250}
					className="link"
					key={link}>
					{link}
				</Link>
			))}
			<a
				href="https://github.com/jhuynh85"
				target="_blank"
				rel="noopener noreferrer">
				<i className="fab fa-2x fa-github" />
			</a>
			<a
				href="https://www.linkedin.com/in/joehuynh/"
				target="_blank"
				rel="noopener noreferrer">
				<i className="fab fa-2x fa-linkedin-in" />
			</a>
			<a
				href="mailto:joe.huynh@gmail.com"
				target="_blank"
				rel="noopener noreferrer">
				<i className="fas fa-2x fa-envelope" />
			</a>
		</Menu>
	);
};

export default BurgerMenu;
