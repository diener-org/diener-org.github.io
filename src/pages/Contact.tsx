import React from "react";
import SmallLogo from "../components/SmallLogo";
import contactImage from "../images/contact.jpg";
import email from "../images/email.jpg";
import linkedIn from "../images/in.jpg";
import pinterest from "../images/pinterest.jpg";
import tumblr from "../images/tumblr.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <SmallLogo />
      <img className="contact-image" src={contactImage} alt="" />
      <div className="contact-small-images">
        <a href="mailto:evdiener@gmail.com">
          <img src={email} alt="" />
        </a>
        <a href="http://www.pinterest.com/emmadiener/" target="blank">
          <img src={pinterest} alt="" />
        </a>
        <a
          href="http://www.linkedin.com/pub/emma-diener/6a/892/2b5"
          target="blank"
        >
          <img src={linkedIn} alt="" />
        </a>
        <a href="http://emmadiener.tumblr.com/" target="blank">
          <img src={tumblr} alt="" />
        </a>
      </div>
    </div>
  );
}
