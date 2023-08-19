import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Style from "../style/Contact.module.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d8y9lgc",
        "template_2x8eenk",
        form.current,
        "ZPKtw0yoVeEKKWRqR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("mensaje enviado con exito");
          window.location.reload();
          

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  return (
    <div className={Style.container} id="Contact">
      <form className={Style.containerInfo} ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="form-name" value="contact" />
        <h2 className={Style.input}>Send Me A Message</h2>
        <input
          className={Style.input}
          name="user_name"
          type="text"
          placeholder="First Name"
        />
        <input
          className={Style.input}
          name="user_email"
          type="email"
          placeholder="Email Adress"
        />
        <input
          className={Style.input}
          name="user_subject"
          type="text"
          placeholder="Suject"
        />
        <textarea
          className={Style.input}
          name="message"
          type="text"
          placeholder="Message"
        />
        <button
          type="submit"
          value="Send"
          className={Style.input}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
