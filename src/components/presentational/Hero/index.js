import React from "react";
import PropTypes from "prop-types";
import ReactRotatingText from "react-rotating-text";
import "./Hero.scss";

import wallpaperForeground from "../../../images/wallpaper-foreground-2160x1100.png";
import wallpaperForegroundCompressed from "../../../images/wallpaper-foreground-2160x1100-compressed.webp";
import wallpaperBackground from "../../../images/wallpaper-background-2160x1100-compressed.jpg";

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
			<picture className="hero-item parallax">
				<source srcSet={wallpaperForegroundCompressed} type="image/webp" />
				<img src={wallpaperForeground} alt="Foreground" />
			</picture>
		</div>
	);
};

Hero.propTypes = {
	yPosition: PropTypes.number
};

export default Hero;
