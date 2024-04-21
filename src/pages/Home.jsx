import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import PrincipalSection from "../components/PrincipalSection";

const StyledMainDiv = styled.div`
  margin-bottom: 20vh;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Home(){
  const { t } = useTranslation();

  return(
    <StyledMainDiv>
      <PrincipalSection title={t('label-projects')} text={t('text-projects')}/>
    </StyledMainDiv>
  )

}

export default Home;