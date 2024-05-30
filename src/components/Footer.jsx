import React from "react";
import { FaInstagram, FaFacebook, FaSoundcloud } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between items-center mx-auto">
			<span className="text-2xl primary-color font-single-day">
				{" "}
				소리 <br /> 노리{" "}
			</span>

			<div className="flex justify-center flex-grow">
				<a
					href="https://www.instagram.com/DEIN_INSTAGRAM_LINK"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram className="text-[#87FF2A] mx-2" />
				</a>
				<a
					href="https://www.facebook.com/DEIN_FACEBOOK_LINK"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook className="text-[#87FF2A] mx-2" />
				</a>
				<a
					href="https://soundcloud.com/DEIN_SOUNDCLOUD_LINK"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaSoundcloud className="text-[#87FF2A] mx-2" />
				</a>
			</div>
			<p className="text-gray-600">
				<a href=" " className="text-[#c6e2ff]">
					sorinorimusic@gmail.com
				</a>
				<br />{" "}
				<span className="primary-color">&#x00A9; sorinori2024 </span>
			</p>
		</div>
	);
};

export default Footer;
