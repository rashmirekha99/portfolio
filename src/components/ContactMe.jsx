import React from "react";
import "./contactme.css";
import img from "../assets/img/email.png";

function ContactMe() {
  return (
    <div className="contact-me" id="contact">
      <form className="form">
        <h1>Get in Touch</h1>
        <div>
          <p>Name</p>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter Email" />
        </div>

        <div>
          <p className="msg">Message</p>
          <textarea type="textarea" placeholder="Type Message" cols={4} />
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
