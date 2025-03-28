import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ConatctIcons from "../ui/Contact-Icons";

const Home = () => {
  return (
    <Element name="home">
      <div className="w-full max-w-5xl mx-auto h-screen flex flex-col justify-center items-center text-center gap-4">
        <motion.h2
          initial={{ z: -200, rotateX: 90, opacity: 0 }}
          animate={{ z: 0, rotateX: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-slate-100 text-start text-3xl md:text-5xl lg:text-6xl tracking-wider font-semibold"
        >
          <TypeAnimation
            sequence={[600, "Hello, I'm", 800, () => {}]}
            repeat={0}
          />
          <br />
          <TypeAnimation sequence={[600, "Name", 800, () => {}]} repeat={0} className="text-purple-600" />
        </motion.h2>

        <motion.h1
          initial={{ z: -200, rotateX: 90, opacity: 0 }}
          animate={{ z: 0, rotateX: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold"
        >
          Frontend Developer
        </motion.h1>

        <motion.p
          initial={{ z: -200, rotateX: 90, opacity: 0 }}
          animate={{ z: 0, rotateX: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-slate-100 md:text-lg lg:text-xl"
        >
          Building clean, responsive designs. <br />
          Where simplicity meets innovation.
        </motion.p>

        <motion.div
          initial={{ z: -200, rotateX: 90, opacity: 0 }}
          animate={{ z: 0, rotateX: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex items-center gap-4 mt-4"
        >
          <Link
            to="contact"
            className="bg-purple-600 text-slate-100 text-lg px-4 py-2 rounded-full inline-block font-semibold cursor-pointer hover:bg-purple-500 
            transition hover:scale-102"
          >
            Get in Touch
          </Link>

          <ConatctIcons />
        </motion.div>
      </div>
    </Element>
  );
};

export default Home;
