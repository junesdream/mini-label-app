import React from "react";
import techno from "../assets/techno.webp";
import disco from "../assets/disco.webp";
import electronic from "../assets/electronic.webp";
import indiedance from "../assets/indiedance.webp";
import newwave from "../assets/newwave.webp";
import slowTechno from "../assets/slow-techno.webp";

const Skills = () => {
	return (
		<div className="border border-[#c6e2ff] bg-black text-[#c6e2ff] md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
			<h2 className="text-[#87FF2A] text-2xl md:text-4xl font-bold m-4 text-center">
				Our <br /> Art <br /> Form
			</h2>

			{/* Genre */}
			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={techno} alt="" />
				<p className="mt-2">Techno</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={disco} alt="" />
				<p className="mt-2">Disco</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={electronic} alt="" />
				<p className="mt-2">Electronic</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
				<img src={indiedance} alt="" />
				<p className="mt-2">Indiedance</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
				<img src={newwave} alt="" />
				<p className="mt-2">Newwave</p>
			</div>
			<div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
				<img src={slowTechno} alt="" />
				<p className="mt-2">Slowtechno</p>
			</div>
		</div>
	);
};

export default Skills;
