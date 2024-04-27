import React from "react";
import styled from "styled-components";
import IconDiv from "../Clickables/IconDiv";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`;

const StyledP = styled.p`
  font-size: 1em;
  user-select: none;
  font-family: var(--content-font);
  font-weight: bold;
  color: var(--primary-text-color);
  margin-top: 10px;
`;

const StyledSpan = styled.span`
  height: 20px;
  width: 2px;
  background-color: var(--primary-text-color);
  margin-inline: 10px;
  margin-top: 10px;
`;

function BoxIcons({title, content}){
  return (
    <StyledDiv>
      <StyledP>{title}</StyledP>
      <StyledSpan/>
      {content && content.map((content, index) => (
        <IconDiv key={index} icon={content.icon} name={content.name} color={content.color}/>
      ))}
    </StyledDiv>
  );
}

export default BoxIcons;
