import React, { Component } from "react";
import "./Main.scss";

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
							<h1>Thanks for stopping by.</h1>
							<p>
								I’m Joseph. I'm a full stack developer based in San Diego who
								enjoys creating software solutions for real-world problems.
								Since beginning my journey as a developer over a year ago, I've
								worked on web applications for non-profits, collaborated with
								talented people, and am constantly seeking to improve my craft
								and striving to build first-class digital products by combining
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
						<section>
							<h1>What I do</h1>
							<FrontEndList />
						</section>
					</div>
					<div className="dark-bg">
						<section className="projects">
							<h1>My Recent Work</h1>
							<div className="projects-container">
								<PortfolioProject imgSrc={furryFosterPic} />
								<PortfolioProject imgSrc={vroomsPic} />
								<PortfolioProject imgSrc={farmilyPic} />
							</div>
						</section>
					</div>
					<div className="light-bg">
						<section>
							<h1>Contact me</h1>
							Want to chat? Got strong opinions on Google's lint rules vs.
							AirBnB's? Need to know what a{" "}
							<a
								href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
								target="_blank"
								rel="noopener noreferrer">
								closure
							</a>{" "}
							is? Let me know!
						</section>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
