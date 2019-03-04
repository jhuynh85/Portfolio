import React from "react";
import "./Footer.scss";

const Footer = () => {
	const year = new Date().getFullYear();
	return <div className="footer">Joseph Huynh &copy; {year}</div>;
};

Footer.propTypes = {};

export default Footer;
