import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function SmallNav() {
  return (
    <>
      <Link className="small-nav" to="/">
        <img className="small-logo" src={logo} alt="" />
      </Link>
    </>
  );
}
