import React from "react";
import heroImg from "../assets/profile-pic.jpg";
import { TypeAnimation } from "react-type-animation";
import "../index.css";

const Hero = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
			<div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
				<img src={heroImg} alt="hero image" />
			</div>
			<div className="col-span-2 px5 my-auto">
				<h1 className="text-4xl text-white sm:text-5xl lg:text-8xl font-mochiy-pop">
					<span className="text-[#87FF2A] pb-4">We're </span> <br />
					<TypeAnimation
						className="primary-color text-6xl font-single-day font-extrabold mt-4"
						sequence={[
							"소리노리",
							1000,
							"Sound Forge",
							1000,
							"Groove Spectrum",
							1000,
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
					/>
				</h1>
				<p className="text-white sm:text-lg my-6 lg:text-xl neon-text ">
					We are SORINORI, Sculpting Soundscapes from Unique Souls
				</p>
				<div className="my-8">
					<a
						href="/"
						className="px-6 py-3 w-full rounded-xl mr-4 border
					border-[#87FF2A] hover:bg-gradient-to-br from-orange-500
					to-pink-500 text-[#c6e2ff] hover:border-none"
					>
						Get Info
					</a>

					<a
						href="#contact"
						className="px-6 py-3 w-full rounded-xl mr-4 border border-[#c6e2ff] bg-gradient-to-br from-orange-500 to-pink-500"
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
