import { Menu } from "lucide-react";
import { useMenu } from "../../context/menuContext";
import { RedirectUrlAction } from "../../hooks/redirectUrlAction";

const IconNavbar = () => {
  const { menu, setMenu } = useMenu();
  const { redirectToWA } = RedirectUrlAction();

  return (
    <div>
      <button className="md:hidden" onClick={() => setMenu(!menu)}>
        <Menu />
      </button>
      <a onClick={redirectToWA} className="font-montserrat hover:bg-charcoal hover:text-light border-charcoal relative z-9999 hidden cursor-pointer rounded-full border px-6 py-2 transition-all duration-300 ease-in-out lg:block">
        Contact Me
      </a>
    </div>
  );
};

export default IconNavbar;
