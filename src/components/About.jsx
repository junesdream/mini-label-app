import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
		<div className="text-white max-w-[1200px] mx-auto mx-12" id="about">
			<div className="md:grid md:grid-cols-2 sm:py-16">
				<div className="mt-4 md:mt-0 text-left flex">
					<div className="my-auto mx-6">
						<h2 className="text-4xl font-bold mb-4 primary-color font-mochiy-pop">
							About Us
						</h2>
						<p className="text-base lg:text-lg text-[#c6e2ff]">
							Sorinori is an innovative music label that
							specializes in sculpting mesmerizing soundscapes.
							With a passion for creativity and a deep
							appreciation for individuality, we pride ourselves
							on crafting unique musical experiences that resonate
							with the depths of the soul. Our label is dedicated
							to nurturing and showcasing talented artists who
							bring their distinctive styles to the forefront,
							pushing boundaries and redefining the sonic
							landscape. Join us on a journey where music
							transcends boundaries and captivates the senses.
							Welcome to Sorinori: Where soundscapes are
							meticulously crafted from the depths of unique
							souls.
						</p>
					</div>
				</div>

				<img
					className="mx-auto rounded-3xl py-8 md:py-0"
					src={aboutImg}
					widht={300}
					height={300}
					alt="about"
				/>
			</div>
		</div>
  );
}

export default About