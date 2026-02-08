import ContactDetails from "../Fragments/ContactDetails";
import ContactForm from "../Fragments/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-beige">
      <div className="container px-6 py-30 lg:flex gap-40 justify-center items-start">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
