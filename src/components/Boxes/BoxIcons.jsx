import React from "react";
import styled from "styled-components";
import IconDiv from "../Clickables/IconDiv";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media screen and (max-width: 700px){
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledP = styled.p`
  font-size: 1em;
  width: 100%;
  text-align: end;
  user-select: none;
  font-family: var(--content-font);
  font-weight: bold;
  color: var(--primary-text-color);
  margin-top: 10px;

  @media screen and (max-width: 700px){
    text-align: center;
    margin-bottom: 5px;
  }
`;

const StyledSpan = styled.span`
  height: 20px;
  width: 2px;
  background-color: var(--primary-text-color);
  margin-left: 10px;
  margin-top: 10px;

  @media screen and (max-width: 700px){
    display: none;
  }
`;

const StyledChildDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &.titleDiv{
    justify-content: end;
    width: 130px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 700px){
    justify-content: center;
    align-items: center;

    &.titleDiv{
      width: 100%;
    }
  }
`

function BoxIcons({title, content}){
  return (
    <StyledDiv>
      <StyledChildDiv className="titleDiv">
        <StyledP>{title}</StyledP>
        <StyledSpan/>
      </StyledChildDiv>
      <StyledChildDiv>
        {content && content.map((content, index) => (
          <IconDiv key={index} icon={content.icon} name={content.name} color={content.color}/>
        ))}
      </StyledChildDiv>
    </StyledDiv>
  );
}

export default BoxIcons;
