import React from "react";
import Style from "../style/Contact.module.css";

export default function Contact() {
  return (
    <div className={Style.container} id='Contact'>
      <form className={Style.containerInfo} netlify>
        <h2 className={Style.input}>Send Me A Message</h2>
        <input className={Style.input} type="text" placeholder="First Name" />
        <input className={Style.input} type="email" placeholder="Email Adress" />
        <input className={Style.input} type="text" placeholder="Suject" />
        <textarea className={Style.input} type="text"  placeholder="Message" />
        <button className={Style.input}>Send Message</button>
      </form>
    </div>
  );
}
