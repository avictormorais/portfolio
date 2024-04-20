import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledH1 = styled.h1`
  font-size: 2em;
  margin-bottom: 15px;
`

const StyledP = styled.p`
  font-size: .85em;
  margin-bottom: 15px;
`

function Error(){
  const { t } = useTranslation();

  return(
    <StyledDiv>
      <StyledH1>{t('title-error')}</StyledH1>
      <StyledP>{t('label-error')}</StyledP>
    </StyledDiv>
  )

}

export default Error;