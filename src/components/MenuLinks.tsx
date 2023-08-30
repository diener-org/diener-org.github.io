import React from "react";
import { Link } from "react-router-dom";

interface MenuLinksProps {
  className: string;
}

export default function MenuLinks({ className }: MenuLinksProps) {
  const classes = `menu-link-items ${className}`;
  return (
    <div className={classes}>
      <Link to="/work">WORK</Link>
      <Link className="menu-link-about" to="/about">
        ABOUT
      </Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
}
