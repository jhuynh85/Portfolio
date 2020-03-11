import React from "react";
import { Element, Link } from "react-scroll";

import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import PortfolioProject from "../../components/ProjectPreview";
import FrontEndList from "../../components/FrontEndList";
import BackEndList from "../../components/BackEndList";
import DevToolsList from "../../components/DevToolsList";
import profilePic from "../../assets/images/profile.jpg";
import furryFosterPic from "../../assets/images/furry-foster-mockup.png";
import { PROJECTS } from "../../assets/js/constants";
import vroomsPic from "../../assets/images/vrooms-mockup.png";
import farmilyPic from "../../assets/images/farmily-mockup.png";
import hangmanPic from "../../assets/images/hangman-mockup.png";

const Home = ({ yPosition }) => {
	return (
		<>
			<Hero yPosition={yPosition} />
			<div className="content">
				{yPosition === 0 && (
					<Link to="ABOUT" smooth offset={-50} duration={250}>
						<span className="scroll-down-indicator" />
					</Link>
				)}
				<div className="dark-bg">
					<section>
						<Element name="ABOUT" />
						<h1>Thanks for stopping by.</h1>
						<p>
							I’m Joseph, a full stack developer based in San Diego who enjoys
							creating software solutions for real-world problems. I've worked
							on web applications for non-profits, collaborated with talented
							people, and am constantly working to improve my craft. I strive to
							build first-class digital products by combining industry
							best-practices with clean, maintainable code.
						</p>
						<div className="about-container">
							<img className="profile-pic" src={profilePic} alt="Profile pic" />
							<div className="facts-container">
								<h4>Some quick facts about me:</h4>
								<ul>
									<li>I grew up in Canada</li>
									<li>I prefer tabs over spaces</li>
									<li> Webstorm is my IDE of choice</li>
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
							<BackEndList />
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
								link="/projects/furryFoster"
								imgSrc={furryFosterPic}
								project={PROJECTS.furryFoster}
							/>
							<PortfolioProject imgSrc={vroomsPic} project={PROJECTS.vrooms} />
							<PortfolioProject
								imgSrc={farmilyPic}
								project={PROJECTS.farmily}
							/>
							<PortfolioProject
								imgSrc={hangmanPic}
								project={PROJECTS.hangman}
							/>
						</div>
					</section>
				</div>
				<div className="light-bg">
					<section className="contact">
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
		</>
	);
};

export default Home;
