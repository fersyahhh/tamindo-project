/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const CardService = ({ id, title, description, image }) => {
  const different = id % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`h-auto ${different ? "md:mt-30" : ""} w-full`}
    >
      <div className="group h-90 w-full overflow-hidden md:h-70 lg:h-90 xl:h-120">
        <img
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
          src={image}
          alt={title}
        />
      </div>
      <div className="mt-8">
        <h1 className="text-charcoal font-montserrat text-xl font-bold tracking-[0.2rem] uppercase">
          {title}
        </h1>
        <p className="mt-4 font-light text-slate-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default CardService;
