/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const TextPortfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="uppercase"
    >
      <h5 className="font-inter text-xs font-light tracking-[0.3rem] text-slate-400">
        Our Collection
      </h5>
      <h1 className="text-charcoal font-montserrat mt-8 mb-30 text-5xl font-bold md:text-6xl lg:text-7xl">
        Selected Projects
      </h1>
    </motion.div>
  );
};

export default TextPortfolio;
