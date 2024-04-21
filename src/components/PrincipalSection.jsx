import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: var(--content-font);
  font-size: 3em;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 2em;
  }
`

const StyledP = styled.p`
  font-family: var(--content-font);
  max-width: 50%;
  text-align: justify;
  margin-top: 15px;
  font-weight: 600;
  line-height: 1.5em;
  text-indent: 2em;
  font-size: .9em;

  @media screen and (max-width: 1150px) {
    max-width: 70%;
  }
  @media screen and (max-width: 700px) {
    max-width: 80%;
    font-size: .75em;
  }
  @media screen and (max-width: 500px) {
    max-width: 87%;
  }
`

function PrincipalSection({title, text}){

  return(
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledP>{text}</StyledP>
    </>
  )

}

export default PrincipalSection;