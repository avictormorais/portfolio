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

  ${props => props.icon && `
    font-size: 0.7em;
  `}
`

function ToolTip({ tip, className, icon }) {
  return (
    <StyledTip className={className} icon={icon}>{tip}</StyledTip>
  )
}

export default ToolTip;
