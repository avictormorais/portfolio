import React from "react";
import styled from "styled-components";
import { Icon } from '@iconify-icon/react';
import ToolTip from "../ToolTip";

const StyledIcon = styled(Icon)`
  font-size: 2.2em;
  color: var(--primary-text-color);
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 3px;
  margin-inline: 5px;
  max-width: 40px;

  &:hover{
    cursor: pointer;
    border-radius: 10px;
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
  margin-inline: 1px;
  max-width: 60px;
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