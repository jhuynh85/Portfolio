import React from "react";
import PropTypes from "prop-types";
import ReactRotatingText from "react-rotating-text";
import "./Hero.scss";

import wallpaperForeground from "../../../assets/images/wallpaper-foreground-2160x1100.png";
import wallpaperBackground from "../../../assets/images/wallpaper-background-2160x1100.jpg";

const Hero = props => {
	const { yPosition } = props;
	return (
		<div className="hero">
			<img
				className="hero-item parallax"
				src={wallpaperBackground}
				alt="Background"
			/>
			<div
				className={`hero-item parallax title-text-container${
					yPosition > 0 ? " fade-out" : " show"
				}`}>
				<div className="title-text">
					Hi, I&#39;m Joseph! I build web apps using
				</div>
				<ReactRotatingText
					className="hero-item rotating-text"
					items={["HTML", "CSS", "REACT", "NODE", "JQUERY", "MONGODB", "MYSQL"]}
				/>
			</div>
			<img
				id="wallpaperForeground"
				className="hero-item parallax"
				src={wallpaperForeground}
				alt="Foreground"
			/>
		</div>
	);
};

Hero.propTypes = {
	yPosition: PropTypes.number
};

export default Hero;
