import React from "react";
import "./contactme.css";
import img from "../assets/img/email.png";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { FadeInX } from "./animation/Animations";

function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
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
      <FadeInX delay={0.2} duration={0.2} side={-100}>
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
      </FadeInX>
      <div className="contact-image">
        <FadeInX delay={0.2} duration={0.2} side={100}>
          {" "}
          <img src={img} alt="contact_image"></img>
        </FadeInX>
      </div>
    </div>
  );
}

export default ContactMe;
