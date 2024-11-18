import { motion } from "framer-motion";
import image1 from "/Asset/image1.jpg";
import image2 from "/Asset/image2.jpg";
import image3 from "/Asset/image3.jpg";
import image4 from "/Asset/image4.jpg";
import image5 from "/Asset/image5.jpg";

// Project data
const ProjectsData = [
  {
    image: image1,
    title: "NOW-NOW-APP",
    description: "NowNow is a user-friendly web app designed to simplify your financial transactions...",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://ucheson235.github.io/NOW-NOW-APP/",
  },
  {
    image: image2,
    title: "Foodie",
    description: "Foodie is the ultimate app for food lovers, providing a seamless way to discover...",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://ucheson235.github.io/food.com/",
  },
  {
    image: image3,
    title: "Pay-Me-App",
    description: "Pay-Me is an innovative web application designed to facilitate secure transactions...",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://ucheson235.github.io/PAY-ME-APP/",
  },
  {
    image: image4,
    title: "Money-App",
    description: "Money-App is a reliable and efficient payment gateway that enables businesses to easily accept payments...",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://ucheson235.github.io/Money/",
  },
  {
    image: image5,
    title: "Procrastination",
    description: "Procrastination is a web app designed to help users stay on top of their daily tasks...",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://ucheson235.github.io/Procrastination/",
  },
];

// ScrollReveal component
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 md:items-start">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              className="w-full object-cover transition-all duration-300 hover:scale-105 md:w-[300px] md:flex-shrink-0"
              src={project.image}
              alt={project.title}
            />
          </div>
        </a>
        <div className="flex flex-col gap-5 md:ml-8 md:flex-1">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

// Projects component
const Projects = () => {
  return (
    <div id="Projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-10 p-4 md:px-4 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {ProjectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
