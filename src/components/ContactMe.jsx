import React from "react";
import "./contactme.css";
import img from "../assets/img/email.png";
import emailjs from "emailjs-com";
import { useRef } from "react";

function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Send Sucessfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-me" id="contact">
      <form ref={form} className="form" onSubmit={(e) => sendEmail(e)}>
        <h1>Get in Touch</h1>
        <div>
          <p>Name</p>
          <input type="text" placeholder="Enter your name" name="name" />
        </div>

        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter Email" name="email" />
        </div>

        <div>
          <p className="msg">Message</p>
          <textarea
            type="textarea"
            placeholder="Type Message"
            cols={4}
            name="message"
          />
        </div>
        <button>Send</button>
      </form>
      <div className="contact-image">
        <img src={img} alt="contact_image"></img>
      </div>
    </div>
  );
}

export default ContactMe;
