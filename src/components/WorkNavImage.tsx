import React, { useState } from "react";
import { Link } from "react-router-dom";

interface WorkNavImageProps {
  imageName: string;
}

export default function WorkNavImage({ imageName }: WorkNavImageProps) {
  const [computedImageName, setComputedImageName] = useState(imageName);

  function imageHover(isHover: boolean) {
    if (isHover) {
      setComputedImageName(`${imageName}-hover`);
    } else {
      setComputedImageName(imageName);
    }
  }

  return (
    <Link to={`/${imageName}`}>
      <img
        src={require(`../images/work/${computedImageName}.jpg`)}
        alt=""
        onMouseEnter={() => imageHover(true)}
        onMouseLeave={() => imageHover(false)}
      />
    </Link>
  );
}
