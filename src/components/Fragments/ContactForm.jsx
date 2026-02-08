/* eslint-disable no-unused-vars */
import { ContactFormAction } from "../../hooks/contactFormAction";
import { motion } from "motion/react";

const Input = ({ label, type, plc, name }) => {
  return (
    <div className="flex flex-col">
      <label className="font-inter text-charcoal/20 text-xs font-semibold tracking-[0.2rem] uppercase">
        {label}
      </label>
      <input
        name={name}
        required
        className="placeholder:text-charcoal/10 border-b border-black/20 py-2 pb-5 outline-none"
        type={type}
        placeholder={plc}
      />
    </div>
  );
};

const TextArea = ({ label, plc, name }) => {
  return (
    <div className="flex flex-col">
      <label className="font-inter text-charcoal/20 text-xs font-semibold tracking-[0.2rem] uppercase">
        {label}
      </label>
      <textarea
        name={name}
        required
        className="placeholder:text-charcoal/10 border-b border-black/20 py-2 pb-20 outline-none"
        placeholder={plc}
      />
    </div>
  );
};

const ContactForm = () => {
  const { sendForm, formRef } = ContactFormAction();

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="mt-30 h-auto w-full bg-white p-10 lg:mt-0"
    >
      <form ref={formRef} onSubmit={sendForm} className="flex flex-col gap-8">
        <Input
          label={"Nama"}
          type={"text"}
          plc={"Your full name"}
          name={"name"}
        />
        <Input
          label={"Email"}
          type={"email"}
          plc={"email@example.com"}
          name={"email"}
        />
        <TextArea
          label={"Pesan"}
          plc={"Briefly describe your project"}
          name={"message"}
        />
        <button
          type="submit"
          className="hover:bg-charcoal/20 cursor-pointer hover:text-charcoal bg-charcoal text-light font-inter w-full py-5 text-center text-xs font-semibold tracking-[0.2rem] uppercase transition-all duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
