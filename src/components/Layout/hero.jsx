import { ChevronDown } from "lucide-react";
import heroImg from "../../assets/hero-img.webp";
import { ToSectionAction } from "../../hooks/toSectionAction";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HeroSection = () => {
  const { toPortfolio } = ToSectionAction();

  return (
    <section id="home">
      <div
        className="min-h-screen w-full bg-cover bg-bottom px-4 text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-light relative min-h-screen w-full pt-40 sm:pt-70 lg:pt-50 xl:pt-60 2xl:pt-80"
          >
            <h1 className="font-montserrat text-6xl font-bold md:text-[6rem] xl:text-[7rem]">
              Elevate Your Living
            </h1>
            <p className="mx-auto mt-8 mb-12 max-w-2xl text-lg font-light tracking-wide text-white/90 md:text-xl">
              Sentuhan personal untuk ruang yang mendefinisikan jati diri Anda.
            </p>
            <a
              onClick={toPortfolio}
              className="text-light border-light hover:bg-light hover:text-charcoal inline-flex w-[80%] cursor-pointer items-center justify-center border py-6 text-center text-xs font-bold tracking-[0.4rem] uppercase transition-all duration-300 ease-in-out md:w-[40%] lg:w-[30%] 2xl:w-[25%]"
            >
              Explore Portfolio
            </a>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown size={25} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
