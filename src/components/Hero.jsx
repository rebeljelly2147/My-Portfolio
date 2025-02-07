import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            H!, I&apos;m{" "}
            <span className="text-electric-purple">{personalInfo.name}</span>
            <br />
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            A passionate{personalInfo.role}, <br className="sm:block hidden" />
            creating user-friendly and visually appealing web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div // Create a motion div component to animate the arrow icon
              animate={{ y: [0, 24, 0] }} // this value is the animation values for the y-axis and opacity
              transition={{
                duration: 2.5, // this value is the duration of the animation in seconds
                repeat: Infinity, // this value is the number of times the animation will repeat
                repeatType: "loop", // this rever
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
