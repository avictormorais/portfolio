import React from "react";
import BoxIcons from "../Boxes/BoxIcons";
import contacts from "../../PersonalInfos/Contact/contact";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px){
    margin-bottom: 65px;
  }
`

function Skills(){

  return(
    <StyledDiv>
      {contacts && (
        <BoxIcons content={contacts}/>
      )}
    </StyledDiv>
  )

}

export default Skills;