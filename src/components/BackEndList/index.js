import React from "react";
import "./BackEndList.scss";

const BackendList = () => {
	return (
		<div className="back-end-list">
			<i className="fas fa-2x fa-server" />
			<br />
			<h4>Back End</h4>
			<p>
				From implementing image uploads to AWS S3 buckets to setting up
				protected API endpoints, I'm equally at home on the server-side.
			</p>
			<section>
				<ul>
					<li>Node</li>
					<li>Express</li>
					<li>MongoDB</li>
					<li>MySQL</li>
					<li>Firebase</li>
					<li>Amazon Web Services (EC2, S3)</li>
					<li>PassportJS</li>
				</ul>
			</section>
		</div>
	);
};

export default BackendList;
