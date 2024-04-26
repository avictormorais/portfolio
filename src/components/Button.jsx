import React from "react";
import styled from "styled-components";

const StyledTip = styled.p`
  font-size: 1em;
  font-family: var(--content-font);
  font-weight: bolder;
  margin-top: 15px;
  opacity: 0;
  user-select: none;
  transition: all .3s ease-in-out;

  @media screen and (max-width: 700px){
      font-size: .75em;
  }
`

const StyledButton = styled.button`
    font-size: 1em;
    padding: 10px 20px;
    background-color: var(--secondary-color);
    color: var(--primary-text-color);
    font-family: var(--content-font);
    font-weight: bolder;
    cursor: pointer;
    border-radius: 10px;
    border: none;

    &:hover{
      background-color: var(--secondary-color);
      color: var(--accent-color);
    }

    &:hover + ${StyledTip} {
      opacity: 1;
    }

    @media screen and (max-width: 700px){
      font-size: .8em;
    }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Button({text, onClick, tip}){

  return(
    <StyledDiv>
      <StyledButton onClick={onClick}>{text}</StyledButton>
      <StyledTip>{tip}</StyledTip>
    </StyledDiv>
  )

}

export default Button;