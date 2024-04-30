import React from "react";
import styled from "styled-components";
import { Icon } from '@iconify-icon/react';

const StyledIcon = styled(Icon)`
  font-size: 1.9em;
  color: var(--primary-text-color);
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 3px;
  margin-inline: 0px;
  max-width: 40px;

  &:hover{
    transform: scale(1.1);
    cursor: pointer;
    border-radius: 10px;
    color: ${props => props.hoverColor};
  }
`

function IconDiv({icon, color}){  
  return(
    <StyledIcon icon={`${icon}`} hoverColor={color}></StyledIcon>
  )
}

export default IconDiv;