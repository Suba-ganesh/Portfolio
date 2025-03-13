import React from "react";
import "./Contact.css";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b14d836-ebf6-4f8e-84ad-bf90ee60c694");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’d love to hear from you! Whether you have a project in mind, want
            to discuss potential collaborations, or simply want to chat about
            technology, feel free to reach out. I'm always open to new
            opportunities, challenges, and ideas. Let's connect and see how we
            can work together to bring your vision to life!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>subganesh.p@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>6382328740</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Coimbatore,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" />
          <label htmlFor="">Write Your message Here</label>
          <textarea
            name="message"
            cols="30"
            rows="8"
            id=""
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
