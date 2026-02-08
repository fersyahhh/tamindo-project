import { useMenu } from "../../context/menuContext";
import { ToSectionAction } from "../../hooks/toSectionAction";

const LinkNavbar = () => {
  const { menu } = useMenu();
  const { toHome, toService, toPortfolio, toContact } = ToSectionAction();
  return (
    <div
      className={`bg-light/90 fixed left-0 w-full md:top-0 md:bg-transparent md:opacity-100 ${menu ? "top-0 opacity-100 " : "-top-50 opacity-0 "} py-6 pb-8 transition-all duration-500 ease-in-out md:py-9 lg:py-11`}
    >
      <div className="font-inter flex flex-col relative itemsF-center gap-6 px-8 text-center md:flex-row md:justify-end md:gap-4 md:text-sm lg:justify-center lg:gap-6 xl:gap-10">
        <a onClick={toHome} className="text-charcoal cursor-pointer tracking-[0.1rem] uppercase">Home</a>
        <a onClick={toService} className="text-charcoal cursor-pointer tracking-[0.1rem] uppercase">Services</a>
        <a onClick={toPortfolio} className="text-charcoal cursor-pointer tracking-[0.1rem] uppercase">Portfolio</a>
        <a onClick={toContact} className="text-charcoal cursor-pointer tracking-[0.1rem] uppercase">Contact</a>
      </div>
    </div>
  );
};

export default LinkNavbar;
