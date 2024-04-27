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

const StyledChildDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 30px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  min-height: 60vh;
  margin-top: 15vh;

  @media screen and (max-width: 700px){
    min-height: 40vh;
  }
`

function PrincipalSection({title, text, childComponent}){

  return(
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledP>{text}</StyledP>
      {childComponent && (
        <StyledChildDiv>
          {childComponent()}
        </StyledChildDiv>
      )}
    </StyledDiv>
  )

}

export default PrincipalSection;