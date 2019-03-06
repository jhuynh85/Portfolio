import React from "react";
import "./FrontEndList.scss";

const FrontEndList = () => {
	return (
		<div className="front-end-list">
			<i className="fas fa-2x fa-desktop" />
			<br />
			<h4>Front End</h4>
			<p>
				Whether by coding from scratch or using existing libraries, I enjoy
				bringing designs to life in the browser.
			</p>
			<section>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>jQuery</li>
					<li>React</li>
					<li>JavaScript&nbsp;(ES6)</li>
					<li>Bootstrap</li>
					<li>Bulma</li>
				</ul>
			</section>
		</div>
	);
};

export default FrontEndList;
