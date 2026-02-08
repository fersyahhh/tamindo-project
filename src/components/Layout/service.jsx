import dataServices from "../../data/services-data";
import CardService from "../Fragments/CardService";
import TextService from "../Fragments/TextService";

const ServiceSection = () => {
  return (
    <section id="service">
      <div className="container px-10 py-40">
        <TextService />

        <div className="mt-30 grid grid-cols-1 gap-15 md:grid-cols-3 md:gap-10">
            {dataServices.map((item) => (
                <CardService id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
