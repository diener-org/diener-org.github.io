import React from "react";
import SmallNav from "../components/SmallNav";
import bioPhoto from "../images/bio-photo.jpg";
import bioText from "../images/bio-text.jpg";

export default function About() {
  return (
    <>
      <SmallNav />
      <div className="about-bio">
        <img className="bio-photo" src={bioPhoto} alt="" />
        <img className="bio-text" src={bioText} alt="" />
      </div>
    </>
  );
}
