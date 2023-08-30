import React from "react";
import MenuLinks from "../components/MenuLinks";

interface WorkProps {
  pageName: string;
}

export default function Work({ pageName }: WorkProps) {
  return (
    <div className="work">
      <MenuLinks className="work-menu-link-grid" />
      <p>This is the {pageName} page</p>
    </div>
  );
}
