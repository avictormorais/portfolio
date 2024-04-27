import React from "react";
import styled from "styled-components";
import { Icon } from '@iconify-icon/react';
import ToolTip from "./ToolTip";

const StyledIcon = styled(Icon)`
  font-size: 2em;
  padding: 5px;
  color: var(--primary-text-color);

  &:hover{
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--secondary-color);
    color: ${props => props.hoverColor};
  }

  &:hover + .tooltip {
      opacity: 1;
  }
`

function IconDiv({icon, name, color}){  
  return(
    <>
        <StyledIcon icon={`mdi:${icon}`} hoverColor={color}></StyledIcon>
        <ToolTip className={"tooltip"} tip={name} icon/>
    </>
  )
}

export default IconDiv;