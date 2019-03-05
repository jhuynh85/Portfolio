import React from "react";
import PropTypes from "prop-types";
import "./PortfolioProject.scss";

const PortfolioProject = props => {
	const { imgSrc } = props;
	return (
		<figure className="portfolio-project">
			<img className="no-select" src={imgSrc} alt="" />
			<figcaption>
				Test text
				<a href="#">View Github</a>
			</figcaption>
		</figure>
	);
};

PortfolioProject.propTypes = {
	imgSrc: PropTypes.string
};

export default PortfolioProject;
