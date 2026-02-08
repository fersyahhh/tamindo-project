import portfolioData from "../../data/portfolio-data";
import CardPortfolio from "../Fragments/CardPortfolio";
import TextPortfolio from "../Fragments/TextPortfolio";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-beige">
      <div className="container px-10 py-40">
        <TextPortfolio />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioData.map((item) => (
            <CardPortfolio key={item.id} id={item.id} image={item.image} location={item.location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
