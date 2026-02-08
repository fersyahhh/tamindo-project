// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const TextService = () => {
  return (
    <div className="items-center justify-between gap-8 md:flex">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-charcoal font-montserrat text-4xl font-bold md:text-6xl lg:max-w-[50%] xl:text-7xl">
          Crafting Experiences
        </h1>
      </motion.div>
      <motion.div
        className="lg:max-w-[40%]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p className="font-inter mt-10 font-light text-slate-700 md:mt-0 md:text-right xl:text-lg">
          Kami menawarkan layanan desain yang komprehensif untuk berbagai
          kebutuhan ruang Anda, mulai dari konsep hingga realisasi akhir.
        </p>
      </motion.div>
    </div>
  );
};

export default TextService;
