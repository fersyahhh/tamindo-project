/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const ClientSection = () => {
  return (
    <section>
      <motion.div initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }} className="container px-10 py-40 lg:px-15 text-center">
        <div>
          <h5 className="font-inter text-xs font-light tracking-[0.3rem] text-slate-700 uppercase">
            Client Feedback
          </h5>
          <p className="font-montserrat mt-6 text-2xl 2xl:text-5xl md:text-3xl lg:text-4xl italic">
            "Jasa Tamindo benar-benar sangat memuaskan, baik dari segi kualitas
            maupun pelayanan yang diberikan."
          </p>
        </div>
        <div className="uppercase mt-10 font-inter">
          <h1 className="tracking-[0.2rem] text-xl font-bold">Ferdi</h1>
          <h2 className="text-xs text-slate-700 tracking-[0.1rem] font-light">Client, Tangerang</h2>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientSection;
