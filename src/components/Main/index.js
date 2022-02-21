import React, { Component } from "react";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Main.scss";
// import { PROJECTS } from "../../../assets/js/constants";

import Home from "../../pages/Home";
// import Hero from "../../presentational/Hero";
import Navbar from "../Navbar";
import BurgerMenu from "../BurgerMenu";
import FurryFoster from "../../pages/FurryFoster";
// import Footer from "../../presentational/Footer";
// import FrontEndList from "../../presentational/FrontEndList";
// import BackendList from "../../presentational/BackEndList";
// import DevToolsList from "../../presentational/DevToolsList";
// import ProjectPreview from "../../presentational/ProjectPreview";
//
// import profilePic from "../../../assets/images/profile.jpg";
// import furryFosterPic from "../../../assets/images/furry-foster-mockup.png";
// import vroomsPic from "../../../assets/images/vrooms-mockup.png";
// import farmilyPic from "../../../assets/images/farmily-mockup.png";
// import hangmanPic from "../../../assets/images/hangman-mockup.png";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			yPosition: 0,
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll, {
			capture: false,
			passive: true,
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
	updateYPosition = (newYPosition) => {
		this.setState({ yPosition: newYPosition });
	};

	render() {
		const { yPosition } = this.state;
		return (
			<Router>
				<div className="main">
					<Element name="HOME" />
					<BurgerMenu
						right
						pageWrapId="content"
						outerContainerId="main"
						width="200px"
					/>
					<Navbar fade={yPosition === 0} />
					<Switch>
						<Route exact path="/projects/furryFoster" component={FurryFoster} />
						<Route
							exact
							path="*"
							render={() => <Home yPosition={yPosition} />}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Main;
