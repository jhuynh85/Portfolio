import React from "react";

import "./Project.scss";

const Project = (props) => {
	const { children } = props;
	return <div className="project-container">{children}</div>;
};

export default Project;
