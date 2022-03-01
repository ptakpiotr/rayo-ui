import React from "react";

interface IProps {
  page: string;
  image: string;
}

function Infobox({ page, image }: IProps) {
  return (
    <div className="infobox">
      <a href={page}>
        <img src={image} alt="RayoOriginalLogo" />
      </a>
    </div>
  );
}

export default Infobox;
