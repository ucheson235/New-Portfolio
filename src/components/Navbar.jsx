import { useState } from "react";
import { BiX } from "react-icons/bi";
import {
	BsGithub,
	BsLinkedin,
	BsMenuButton,
	BsTwitter,
	BsYoutube,
} from "react-icons/bs";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav
			className="fixed top-0 z-10 flex w-full items-center justify-between 
    border-b border-b-gray-700 bg-black/70 px16 py-6 text-white 
    backdrop-blur-md md:justify-evenly"
		>
			<a
				href="#home"
				className="bg-gradient-to-r from-blue-500 to-pink-500
     bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300
     hover:opacity-100"
			>
				Emmanuel
			</a>

			<ul className="hidden md:flex gap-10">
				<li>
					<a
						href="#home"
						className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#Tech"
						className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
					>
						Tech
					</a>
				</li>
				<li>
					<a
						href="#Projects"
						className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href="#Contact"
						className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
					>
						Contact
					</a>
				</li>
			</ul>

			<ul className="hidden md:flex gap-5">
				<a href="Home" target="_blank" >
				<li
				className="cursor-pointer text-xl opacity-70
					transition-all duration-300 hover:text-red-500
					hover:opacity-100"
			    >
				<BsYoutube />
			   </li>
				</a>
				<a href="
						https://www.linkedin.com/in/emmanuel-nwabuogor-4a7400225/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
						" target="_blank" >
				<li
						className="cursor-pointer text-xl opacity-70
					  transition-all duration-300 hover:text-blue-500
					  hover:opacity-100"
			    >
				<BsLinkedin />
			   </li>
				</a>
				<a href="https://twitter.com/ucheson235?t=HoSnHWJMiKallMfhPf_kpA&s=09" target="_blank">
				<li
					className="cursor-pointer text-xl opacity-70
					transition-all duration-300 hover:text-sky-500
					hover:opacity-100"
			>
				<BsTwitter />
			</li>
				</a>
				<a href="https://github.com/ucheson235" target="_blank">
				<li
					className="cursor-pointer text-xl opacity-70
					transition-all duration-300 hover:text-orange-500
					hover:opacity-100"
			>
				<BsGithub />
			</li>
				</a>
			</ul>

			{isOpen ? (
				<BiX className="block md:hidden text-4xl" onClick={menuOpen} />
			) : (
				<BsMenuButton className="block md:hidden text-4xl" onClick={menuOpen} />
			)}

			{isOpen && (
				<div
					className={`fixed right-0 top-[84px] flex h-screen
                 w-1/2 flex-col items-start justify-start gap-10 border-1
                 border-gray-800 bg-black/90 p-12 ${
										isOpen ? "block" : "hidden"
									}`}
				>
					<ul className="flex flex-col gap-8 ">
						<a
							href="#home"
							className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
						>
							<li>Home</li>
						</a>
						<a
							href="#home"
							className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
						>
							<li>Tech</li>
						</a>
						<a
							href="#home"
							className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
						>
							<li>Projects</li>
						</a>
						<a
							href="#home"
							className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"
						>
							<li>Contact</li>
						</a>
					</ul>
					<ul className=" flex flex-wrap gap-5">
						<li
							className="cursor-pointer text-xl opacity-70
                            transition-all duration-300 hover:text-red-500
                            hover:opacity-100"
						>
							<BsYoutube />
						</li>
						<li
							className="cursor-pointer text-xl opacity-70
                            transition-all duration-300 hover:text-blue-500
                            hover:opacity-100"
						>
							<BsLinkedin />
						</li>
						<li
							className="cursor-pointer text-xl opacity-70
                            transition-all duration-300 hover:text-sky-500
                            hover:opacity-100"
						>
							<BsTwitter />
						</li>
						<li
							className="cursor-pointer text-xl opacity-70
                            transition-all duration-300 hover:text-orange-500
                            hover:opacity-100"
						>
							<BsGithub />
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
