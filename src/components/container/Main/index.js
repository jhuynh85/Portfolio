import React, { Component } from "react";
import "./Main.scss";

import Hero from "../../presentational/Hero";
import Navbar from "../../presentational/Navbar";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			yPosition: 0
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll, {
			capture: false,
			passive: true
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		const yPosition = window.scrollY;
		document
			.querySelector(".hero")
			.style.setProperty("--yPos", `${yPosition}px`);
		this.updateYPosition(yPosition);
	};

	// Updates y position (ie. when a user has scrolled down)
	updateYPosition = newYPosition => {
		this.setState({ yPosition: newYPosition });
	};

	render() {
		const { yPosition } = this.state;
		return (
			<div className="main">
				<Navbar fade={yPosition === 0} />
				<Hero yPosition={yPosition} />
				<div className="text">
					<span>Text here</span>
					<span>Text here</span>
					<span>Text here</span>
					<span>Text here</span>
					<span>Text here</span>
				</div>
			</div>
		);
	}
}

export default Main;
