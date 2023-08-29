import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Home() {
  return (
    <div className="home">
      <img className="logo" src={logo} alt="" />
      <div className="home-nav-items">
        <Link className="home-nav" to="/work">
          WORK
        </Link>
        <Link className="home-nav home-nav-about" to="/about">
          ABOUT
        </Link>
        <Link className="home-nav" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
