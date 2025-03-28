
import {
  Code,
  Layout,
  Code2,
  Globe,
  GitBranch,
  Smartphone,
  Type,
  Server,
  Box,
  Database,
  Layers,
} from "lucide-react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "React", icon: <Code size={24} /> },
    { name: "Tailwind CSS", icon: <Layout size={24} /> },
    { name: "Next.js", icon: <Box size={24} /> },
    { name: "TypeScript", icon: <Type size={24} /> },
    { name: "JavaScript", icon: <Code2 size={24} /> },
    { name: "HTML & CSS", icon: <Globe size={24} /> },
    { name: "Git & GitHub", icon: <GitBranch size={24} /> },
    { name: "Responsive Design", icon: <Smartphone size={24} /> },
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "Prisma", icon: <Layers size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      className="bg-slate-800 text-slate-100 px-6 xl:px-0 py-20 my-16 shadow-2xl rounded-3xl border border-slate-600"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My Skills
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 mb-12"
        >
          Crafting modern web solutions with these tools.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="flex bg-purple-400/20 text-purple-400 px-4 py-2 rounded-full 
                         text-sm md:text-base font-semibold border border-purple-400/50"
            >
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
