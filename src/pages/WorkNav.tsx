import React from "react";
import SmallLogo from "../components/SmallLogo";
import WorkNavImage from "../components/WorkNavImage";

export default function WorkNav() {
  return (
    <div className="work-nav">
      <SmallLogo />
      <div className="work-nav-images">
        <WorkNavImage imageName="american" />
        <WorkNavImage imageName="anine" />
        <WorkNavImage imageName="bk" />
        <WorkNavImage imageName="clare" />
        <WorkNavImage imageName="jl" />
        <WorkNavImage imageName="ow" />
        <WorkNavImage imageName="frame" />
        <WorkNavImage imageName="doodle" />
        <WorkNavImage imageName="misc" />
      </div>
    </div>
  );
}
