import React  from "react";
//import emailjs from "@emailjs/browser";
import Style from "../style/Contact.module.css";

export default function Contact() {

  
  return (
    <div className={Style.container} id="Contact">
      <form className={Style.containerInfo} >
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
