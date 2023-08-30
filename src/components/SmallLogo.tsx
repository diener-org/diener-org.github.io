import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function SmallLogo() {
  return (
    <>
      <Link className="small-logo-grid" to="/">
        <img className="small-logo" src={logo} alt="" />
      </Link>
    </>
  );
}
