import React from "react";
import SmallLogo from "../components/SmallLogo";
import bioPhoto from "../images/bio-photo.jpg";
import bioText from "../images/bio-text.jpg";

export default function About() {
  return (
    <div className="about">
      <SmallLogo />
      <div className="about-images">
        <img className="bio-photo" src={bioPhoto} alt="" />
        <img className="bio-text" src={bioText} alt="" />
      </div>
    </div>
  );
}
