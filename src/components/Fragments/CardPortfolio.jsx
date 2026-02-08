/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const CardPortfolio = ({ image, location, id }) => {
  const id2 = id === 2;
  const id3 = id === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-auto w-full"
    >
      <div
        className={`group relative h-160 ${id2 ? "md:mt-30" : ""} ${id3 ? "md:-mt-30" : ""} overflow-hidden`}
      >
        <div className="absolute inset-0 z-99 bg-black/30 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"></div>
        <h1 className="text-light font-montserrat absolute bottom-8 left-8 z-100 text-4xl font-light tracking-[0.4rem] uppercase opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
          {location}
        </h1>
        <img
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105"
          src={image}
          alt="portfolio-image"
        />
      </div>
    </motion.div>
  );
};

export default CardPortfolio;
