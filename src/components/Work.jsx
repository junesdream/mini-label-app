import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";
import album1 from "../assets/album1.png"
import album2 from "../assets/album2.png";
import album3 from "../assets/album3.png";
import artist3 from "../assets/artist3.png"


const Work = () => {
	return (
		<div className="max-w-[1200px] mx-auto p-5" id="work">
			<div className="pb-8">
				<p className="text-4xl mb-3 font-bold primary-color font-mochiy-pop">
					Work
				</p>
				<p className="text-[#c6e2ff]">
					Check out some of our recent releases
				</p>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={album1} alt="" className="h-full w-auto" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Neon Night From The Past
						</span>
						<div className="pt-6 text-center">
							<a href="https://sonorityrainbow.bandcamp.com/album/neon-night-from-the-past">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={album2} alt="" className="h-full w-auto" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Gwi-Ro
						</span>
						<div className="pt-6 text-center">
							<a href="https://sonorityrainbow.bandcamp.com/track/gwi-ro-for-amplified-harp-oboe">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={album3} alt="" className="h-full w-auto" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Styxx I
						</span>
						<div className="pt-6 text-center">
							<a href="https://sorinori.bandcamp.com/album/styxx-world-i-another-space-within-me">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={artist3} alt="" className="h-full w-auto" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Work
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={work2} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							coming soon
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={work3} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							coming soon
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={work4} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							coming soon
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={work5} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							coming soon
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={work6} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							coming soon
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Listen
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
