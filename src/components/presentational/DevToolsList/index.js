import React from "react";
import "./DevToolsList.scss";

const DevToolsList = () => {
	return (
		<div className="dev-tools-list">
			<i className="fas fa-2x fa-terminal" />
			<br />
			<h4>Dev Tools</h4>
			<p>
				I use a wide array of development tools to maintain a clean and
				efficient codebase and minimize bugs.
			</p>
			<section>
				<ul>
					<li>Git</li>
					<li>webpack</li>
					<li>Jest</li>
					<li>Enzyme</li>
					<li>ESLint</li>
					<li>Prettier</li>
					<li>Webstorm</li>
				</ul>
			</section>
		</div>
	);
};

export default DevToolsList;
