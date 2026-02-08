import IconNavbar from "../Fragments/IconNav";
import LinkNavbar from "../Fragments/LinkNav";
import TextNavbar from "../Fragments/TextNav";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-9999 w-full bg-white/60 backdrop-blur">
      <div className="container p-6 md:p-8">
        <div className="flex items-center justify-between">
          <TextNavbar />
          <LinkNavbar />
          <IconNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
