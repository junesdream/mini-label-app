import React from 'react'
import artist1 from "../assets/artist1.png";
import artist2 from "../assets/artist2.png";
import artist3 from "../assets/artist3.png";
import artist4 from "../assets/artist4.png";
import artist5 from "../assets/artist5.png";
import artist6 from "../assets/artist6.png";

const Artist = () => {
    const handleClick = () => {
    window.location.href = 'https://sonorityrainbow.bandcamp.com/';
  };

  return (
		<div className="max-w-[1200px] mx-auto p-5" id="work">
			<div className="pb-8">
				<p className="text-4xl mb-3 font-bold primary-color font-mochiy-pop">
					Artist
				</p>
				<p className="text-[#c6e2ff]">
					Check out our new artist and their musical passion!
				</p>
			</div>

			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={artist1} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							JuNe (dʒuː ne̞)
						</span>
						<div className="pt-6 text-center">
							<a href="https://soundcloud.com/sonorityrainbow">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Info
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={artist2} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Styxx
						</span>
						<div className="pt-6 text-center">
							<a href="https://soundcloud.com/styxx-884028565">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Info
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={artist4} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Rainbow Disco
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Info
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={artist3} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Femme Noir
						</span>
						<div className="pt-6 text-center">
							<a href="https://soundcloud.com/rainbow-disco">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Info
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={artist5} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Suji
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Info
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={artist6} alt="" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider">
							Loyal Man
						</span>
						<div className="pt-6 text-center">
							<a href="">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Info
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Artist