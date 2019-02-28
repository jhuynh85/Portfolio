import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.scss";

import { LINKS } from "../../../utils/constants";

const BurgerMenu = props => {
	return (
		<Menu {...props}>
			{LINKS.map(link => (
				<span>{link}</span>
			))}
		</Menu>
	);
};

export default BurgerMenu;
