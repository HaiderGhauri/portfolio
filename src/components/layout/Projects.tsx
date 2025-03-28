import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Academix",
      image: "/academix.png",
      description:
        "A Learning Management System (LMS) where users can log in, create courses, purchase them with payments, and track progress in a responsive interface.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Prisma",
        "Tailwind CSS",
        "Shadcn",
        "Uploadthing",
        "Stripe",
        "Clerk",
      ],
      link: "https://academix-murex.vercel.app/",
    },
    {
      title: "Marksync",
      image: "/marksync.png",
      description:
        "A bookmark management site where users enter their name to manage and save bookmarks locally using local storage, featuring a responsive design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Toastify",
        "React-Typed",
      ],
      link: "https://mark-sync.vercel.app/",
    },
    {
      title: "Pokésaga",
      image: "/pokesaga.png",
      description:
        "A Pokémon finding site that fetches data from an API, displays individual Pokémon details with images, and includes a search feature in a responsive layout.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://pokesaga.netlify.app/",
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio site showcasing my skills and projects, built with a modern, responsive design and smooth animations.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      link: "https://example.com/task-manager",
    },
    {
      title: "WordAtlas",
      image: "/wordatlas.png",
      description:
        "A site that fetches country data from an API, displays details, and opens individual pages for each country in a responsive layout.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://worldattlas.netlify.app/",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      //   className="bg-slate-800 text-slate-100 px-6 xl:px-0 py-20 my-16 shadow-2xl rounded-3xl border border-slate-600"
      className=" text-slate-100 px-6 xl:px-0 py-20 my-16"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center"
      >
    
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My Projects
        </motion.h2>

        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 mb-12"
        >
          A showcase of my frontend development work.
        </motion.p>

       
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-700/60 p-6 shadow-sm rounded-2xl border border-slate-600 transition ease-in-out hover:shadow-purple-400"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-3">
                {project.title}
              </h3>

              {project.image && (
                <img src={project.image} alt="project image" className="mb-4 rounded-2xl"/>
              )}

              <p className="text-slate-300 mb-4 min-h-24">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-purple-400/20 text-purple-400 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                {project.link.includes("github") ? "GitHub" : "Live Demo"}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
