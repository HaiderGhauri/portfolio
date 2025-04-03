import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Element } from "react-scroll";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <Element name="about">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 mb-6"
        >
          I'm a passionate Frontend Developer with a strong foundation in building modern web applications. At 19 years old, I’m currently pursuing my studies in Computer Science at college, where I’m honing my skills and fueling my enthusiasm for technology. Based in Karachi, Pakistan, my expertise lies in tools like React, Next.js, Tailwind CSS, JavaScript, and TypeScript, which I use to create dynamic and efficient user interfaces.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-6"
        >
          I specialize in crafting clean, responsive, and user-friendly designs that prioritize user experience. Whether it’s leveraging Next.js for optimized performance or ensuring pixel-perfect layouts, I focus on delivering interfaces that are both visually appealing and highly functional.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300"
        >
          My journey in web development reflects my passion for creating effective solutions with a focus on simplicity. Using tools like Git & GitHub for collaboration and optimizing designs for all devices, I transform creative ideas into impactful digital experiences, blending my academic learning with practical application.
        </motion.p>
      </motion.div>
    </Element>
  );
};

export default About;
