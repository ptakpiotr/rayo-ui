import React from "react";
import styled from "styled-components";
import { INews } from "../Types";

type IProps = INews;

const StyledDiv = styled.div`
  margin-bottom: 30px;
  animation: styleddivanim 1s ease-out;
  @keyframes styleddivanim {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledImg = styled.figure`
  max-width: 450px;
  img {
    max-width: inherit;
  }
`;
const StyledPara = styled.figcaption`
  background-color: whitesmoke;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid rgb(255, 52, 42);
`;

function GalleryItem({ id, photoUrl, title }: IProps) {
  return (
    <StyledDiv>
      <StyledImg>
        <img src={photoUrl} alt={title} />
        <StyledPara>
          {title}{" "}
          <a href={`singleNews/${id}`} target="_blank" rel="noreferrer">
            ...
          </a>
        </StyledPara>
      </StyledImg>
    </StyledDiv>
  );
}

export default GalleryItem;
