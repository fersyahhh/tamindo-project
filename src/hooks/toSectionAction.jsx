import { useMenu } from "../context/menuContext";

export function ToSectionAction() {
  const { setMenu } = useMenu();

  function toHome() {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  }
  function toService() {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  }
  function toPortfolio() {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  }
  function toContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  }

  return { toHome, toService, toPortfolio,toContact };
}
