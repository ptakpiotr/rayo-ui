import React, { useRef } from "react";
import styled from "styled-components";
import { INews } from "../Types";

type IProps = INews;
const StyledDiv = styled.div`
  z-index: 0;
  background-image: url("http://localhost:3000/bird.jpg");
  background-size: cover;
  background-position-x: -50px;
  margin: 20px;
  height: 300px;
  transition: background-position 0.5s ease;
  -webkit-box-shadow: 1px 1px 25px 1px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 1px 25px 1px rgba(66, 68, 90, 1);
  box-shadow: 1px 1px 25px 1px rgba(66, 68, 90, 1);
`;

const StyledPara = styled.p`
  position: relative;
  z-index: 1;
  opacity: 0;
  width: 100%;
  background-color: whitesmoke;
  text-align: center;
  padding-top: 10px;
  border-bottom: 3px solid rgb(255, 52, 42);
  height: 50px;
  color: black;
  transition: opacity 0.5s ease-out;
`;

function DynamicCard({ title, photoUrl, id }: IProps) {
  const styleddiv = useRef<HTMLDivElement>(null);
  const styledpara = useRef<HTMLParagraphElement>(null);

  const handleMouseEnter = () => {
    (styleddiv.current as HTMLDivElement).style.backgroundPositionX = "0px";
    (styledpara.current as HTMLParagraphElement).style.opacity = "1";
  };

  const handleMouseOver = () => {
    (styleddiv.current as HTMLDivElement).style.backgroundPositionX = "-50px";
    (styledpara.current as HTMLParagraphElement).style.opacity = "0";
  };

  return (
    <StyledDiv
      ref={styleddiv}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOver}
      style={{
        backgroundImage: `url(${photoUrl})`,
      }}
    >
      <StyledPara ref={styledpara}>
        {title} <a href={`singleNews/${id}`}>...</a>
      </StyledPara>
    </StyledDiv>
  );
}

export default DynamicCard;
