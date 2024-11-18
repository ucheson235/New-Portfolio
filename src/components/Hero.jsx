import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div
			id="home"
			className="px-16 flex min-h-screen w-full
    items-center justify-center py-28 md:px-32"
		>
			<div
				className="flex  flex-col items-center justify-center
    gap-10 text-white"
			>
            <motion.div
             initial={{y: -50, opacity:0}}
             animate={{y: 0, opacity:1}}
             transition={{duration: 0.8, delay: 0.2}}
            >
				<img
					src="/Asset/image7.jpg"
					alt="Hero Image"
					className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
       transition-all duration-300 hover:translate-y-5
       hover:scale-105 hover:shadow-2xl hover:bg-indigo-600
       md:w-[350px]"
				/>
            </motion.div>

				<motion.div 
                initial={{y: 50, opacity:0}}
                animate={{y: 0, opacity:1}}
                transition={{duration: 0.8, delay: 0.2}}

                className="flex max-w-[700px] flex-col items-center justify-center gap-3 text-center">
					<h1
						className="bg-gradient-to-r from-blue-500 to-pink-500
        bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl
       "
					>
						Emmanuel Nwabuogor
					</h1>
					<h3
						className="bg-gradient-to-r from-pink-500 to-blue-500
        bg-clip-text text-transparent opacity-80 text-2xl  md:text-3xl
       "
					>
						Frontend Engineer
					</h3>
					<p className="md:text-base text-pretty text-sm text-gray-400 ">
						I’m a passionate Customer Experience Analyst and Frontend Engineer
						with over 4 years of experience bridging the gap between technology
						and customer satisfaction. I love creating user-friendly web
						applications with tools like React.js, JavaScript, HTML, and CSS
						while also ensuring customers have a seamless experience. My
						background in customer service has taught me the importance of
						listening, solving problems efficiently, and using tools like CRM
						systems and Google workspace to keep things running smoothly. I’m
						adaptable, curious, and always ready to learn something new to make
						a difference—whether it’s building better products or helping
						customers feel valued.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
