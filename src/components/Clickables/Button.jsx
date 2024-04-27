import React, { useState } from "react";
import styled from "styled-components";
import ToolTip from "../ToolTip";

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

    &:hover + .tooltip {
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

function Button({ text, onClick, tip }) {

  return (
    <StyledDiv>
      <StyledButton onClick={onClick}>{text}</StyledButton>
      <ToolTip className="tooltip" tip={tip} />
    </StyledDiv>
  )
}

export default Button;