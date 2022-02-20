import React from "react";
import styled from "styled-components";

interface Props {
  url: string;
  description: string;
  href: string;
}

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

function GalleryItem({ url, description, href }: Props) {
  return (
    <StyledDiv>
      <StyledImg>
        <img src={url} alt={description} />
        <StyledPara>{description}</StyledPara>
      </StyledImg>
    </StyledDiv>
  );
}

export default GalleryItem;
