import React from "react";
import PropTypes from "prop-types";
import "./PortfolioProject.scss";

const PortfolioProject = props => {
	const { imgSrc, project } = props;
	const { name, description, github, web } = project;
	return (
		<figure className="portfolio-project">
			<img className="no-select" src={imgSrc} alt="" />
			<figcaption>
				<h4>{name}</h4>
				<p>{description}</p>
				<div>
					<a href={github} target="_blank" rel="noopener noreferrer">
						<button type="button">
							View Github <i className="fab fa-github-alt" />
						</button>
					</a>
					<a href={web} target="_blank" rel="noopener noreferrer">
						<button type="button">
							Visit site <i className="fas fa-angle-right" />
						</button>
					</a>
				</div>
			</figcaption>
		</figure>
	);
};

PortfolioProject.propTypes = {
	imgSrc: PropTypes.string,
	project: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
		github: PropTypes.string,
		web: PropTypes.string
	})
};

export default PortfolioProject;
