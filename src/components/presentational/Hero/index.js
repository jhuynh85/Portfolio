import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import "./Hero.scss";

import wallpaperForeground from "../../../assets/images/wallpaper-foreground-2160x1100.png";
import wallpaperBackground from "../../../assets/images/wallpaper-background-2160x1100.jpg";

class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fade: false
		};
	}

	handleScroll = () => {
		const windowScrollY = window.scrollY;
		document
			.querySelector(".hero")
			.style.setProperty("--yPos", `${windowScrollY}px`);
		windowScrollY > 0
			? this.setState({ fade: true })
			: this.setState({ fade: false });
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll, {
			capture: false,
			passive: true
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
			<div className={"hero"}>
				<img
					className={"hero-item parallax"}
					src={wallpaperBackground}
					alt={"Background"}
				/>
				<div
					className={
						"hero-item parallax title-text-container" +
						(this.state.fade ? " fade-out" : " show")
					}>
					<div className={"title-text"}>
						Hi, I&#39;m Joseph! I build web apps using
					</div>
					<ReactRotatingText
						className={"hero-item rotating-text"}
						items={[
							"HTML",
							"CSS",
							"REACT",
							"NODE",
							"JQUERY",
							"MONGODB",
							"MYSQL"
						]}
					/>
				</div>

				<img
					id={"wallpaperForeground"}
					className={"hero-item parallax"}
					src={wallpaperForeground}
					alt={"Foreground"}
				/>
			</div>
		);
	}
}

export default Hero;
