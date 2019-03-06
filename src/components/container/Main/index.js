import React, { Component } from "react";
import { Element } from "react-scroll";
import "./Main.scss";
import { PROJECTS } from "../../../utils/constants";

import Hero from "../../presentational/Hero";
import Navbar from "../../presentational/Navbar";
import BurgerMenu from "../../presentational/BurgerMenu";
import Footer from "../../presentational/Footer";
import FrontEndList from "../../presentational/FrontEndList";
import PortfolioProject from "../../presentational/PortfolioProject";

import profilePic from "../../../images/profile.jpg";
import furryFosterPic from "../../../images/furry-foster-mockup.png";
import vroomsPic from "../../../images/vrooms-mockup.png";
import farmilyPic from "../../../images/farmily-mockup.png";
import BackendList from "../../presentational/BackEndList";
import DevToolsList from "../../presentational/DevToolsList";

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
				<Element name="HOME" />
				<BurgerMenu
					right
					pageWrapId="content"
					outerContainerId="main"
					width="200px"
				/>
				<Navbar fade={yPosition === 0} />
				<Hero yPosition={yPosition} />
				<div className="content">
					<div className="dark-bg">
						<section>
							<Element name="ABOUT" />
							<h1>Thanks for stopping by.</h1>
							<p>
								I’m Joseph. I'm a full stack developer based in San Diego who
								enjoys creating software solutions for real-world problems.
								Since beginning my web development journey over a year ago, I've
								worked on web applications for non-profits, collaborated with
								talented people, and am constantly working to improve my craft.
								I strive to build first-class digital products by combining
								industry best-practices with clean, maintainable code.
							</p>
							<div className="about-container">
								<img
									className="profile-pic"
									src={profilePic}
									alt="Profile pic"
								/>
								<div className="facts-container">
									<h4>Some quick facts about me:</h4>
									<ul>
										<li>I grew up in Canada</li>
										<li>I prefer tabs over spaces</li>
										<li>
											<a
												href="https://www.jetbrains.com/webstorm/"
												target="_blank"
												rel="noopener noreferrer">
												Webstorm
											</a>{" "}
											is my IDE of choice
										</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
					<div className="light-bg">
						<section className="skills">
							<h1>What I Do</h1>
							<div className="skills-container">
								<FrontEndList />
								<BackendList />
								<DevToolsList />
							</div>
						</section>
					</div>
					<div className="dark-bg">
						<section className="projects">
							<Element name="WORK" />
							<h1>My Recent Work</h1>
							<br />
							<div className="projects-container">
								<PortfolioProject
									imgSrc={furryFosterPic}
									project={PROJECTS.furryFoster}
								/>
								<PortfolioProject
									imgSrc={vroomsPic}
									project={PROJECTS.vrooms}
								/>
								<PortfolioProject
									imgSrc={farmilyPic}
									project={PROJECTS.farmily}
								/>
							</div>
						</section>
					</div>
					<div className="light-bg">
						<section>
							<Element name="CONTACT" />
							<h1>Contact me.</h1>
							<p>
								Want to chat? Got strong opinions on Google's lint rules vs.
								AirBnB's? Need to know what a{" "}
								<a
									href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
									target="_blank"
									rel="noopener noreferrer">
									closure
								</a>{" "}
								is? Let me know!
							</p>
							<div className="icon-container">
								<a
									href="https://github.com/jhuynh85"
									target="_blank"
									rel="noopener noreferrer">
									<i className="fab fa-3x fa-github-square" />
								</a>
								<a
									href="https://www.linkedin.com/in/phuc-huynh/"
									target="_blank"
									rel="noopener noreferrer">
									<i className="fab fa-3x fa-linkedin" />
								</a>
								<a
									href="mailto:joe.huynh@gmail.com"
									target="_blank"
									rel="noopener noreferrer">
									<i className="fas fa-3x fa-envelope-square" />
								</a>
							</div>
						</section>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
