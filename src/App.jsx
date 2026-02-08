import ClientSection from "./components/Layout/client";
import ContactSection from "./components/Layout/contact";
import Footer from "./components/Layout/footer";
import HeroSection from "./components/Layout/hero";
import Navbar from "./components/Layout/navbar";
import PortfolioSection from "./components/Layout/porftolio";
import ServiceSection from "./components/Layout/service";
import { useMenu } from "./context/menuContext";

const App = () => {
  const { menu, setMenu } = useMenu();
  return (
    <div className="relative">
      <div
        onClick={() => setMenu(!menu)}
        className={`fixed transition-all md:hidden duration-500 ease-in-out ${menu ? "opacity-100 pointer-events-auto z-200" : "pointer-events-none opacity-0"} inset-0 top-0 w-full bg-black/50`}
      ></div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <ClientSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
