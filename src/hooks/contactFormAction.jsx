import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function ContactFormAction() {
  const formRef = useRef(null);

  function sendForm(e) {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        formRef.current.reset();
      });
  }

  return { sendForm, formRef };
}
