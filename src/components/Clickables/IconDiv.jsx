import React from "react";
import styled from "styled-components";
import { Icon } from '@iconify-icon/react';
import ToolTip from "../ToolTip";

const StyledIcon = styled(Icon)`
  font-size: 2.5em;
  padding: 2px;
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

const DivICon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function IconDiv({icon, name, color}){  
  return(
    <DivICon>
        <StyledIcon icon={`${icon}`} hoverColor={color}></StyledIcon>
        <ToolTip className={"tooltip"} tip={name} icon/>
    </DivICon>
  )
}

export default IconDiv;