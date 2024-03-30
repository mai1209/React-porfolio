import React from "react";
import Style from "../style/Contact.module.css";
import swal from 'sweetalert'



export default function Contact(  ) {
const mostrarALerta = ()=>{
  
  swal ({
    icon:"success",
    title: "Su Mensaje se Envio con Exito",
    text:"Me comunicaré con usted a la brevedad",
  });
}




  return (


    
    <div className={Style.container} id="Contact">
      <form
        className={Style.containerInfo}
        action="https://formsubmit.co/mairacoria1209@gmail.com"
        method="POST"
      >
        <input type="hidden" name="form-name" />
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
        <button onClick={ mostrarALerta} type="submit" value="Send" className={Style.input}>
          Send Message
        </button>
        <input
          type="hidden"
          name="_next"
          value="https://react-porfolio.netlify.app/"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
      </form>
    </div>
  );
}
