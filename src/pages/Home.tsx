import React from "react";
import logo from "../images/logo.jpg";
import MenuLinks from "../components/MenuLinks";

export default function Home() {
  return (
    <div className="home">
      <img className="logo" src={logo} alt="" />
      <MenuLinks className="home-menu-link-grid" />
    </div>
  );
}
