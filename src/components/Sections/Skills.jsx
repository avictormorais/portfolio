import React from "react";
import BoxIcons from "../Boxes/BoxIcons";
import languages from "../../SkillsInfos/languages";
import frameworks from "../../SkillsInfos/frameworks";
import others from "../../SkillsInfos/others";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledSpan = styled.span`
  height: 10px;
`

function Skills(){
  const { t } = useTranslation();

  return(
    <StyledDiv>
      {languages && (
        <BoxIcons title={t('label-languages')} content={languages}/>
      )}
      <StyledSpan/>
      {frameworks && (
        <BoxIcons title={t('label-frameworks')} content={frameworks}/>
      )}
      <StyledSpan/>
      {others && (
        <BoxIcons title={t('label-others')} content={others}/>
      )}
    </StyledDiv>
  )

}

export default Skills;