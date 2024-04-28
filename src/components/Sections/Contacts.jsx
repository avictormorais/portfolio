import React from "react";
import BoxIcons from "../Boxes/BoxIcons";
import contacts from "../../PersonalInfos/Contact/contact";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
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