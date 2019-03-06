import React from "react";
import "./BackendList.scss";

const BackendList = () => {
	return (
		<div className="back-end-list">
			<i className="fas fa-2x fa-server" />
			<br />
			<h4>Back End</h4>
			<p>
				From integrating Amazon Web Services into your project to setting up
				protected API endpoints, I'm equally at home on the server-side.
			</p>
			<section>
				<ul>
					<li>Node</li>
					<li>Express</li>
					<li>MongoDB</li>
					<li>MySQL</li>
					<li>Firebase</li>
				</ul>
			</section>
		</div>
	);
};

export default BackendList;
