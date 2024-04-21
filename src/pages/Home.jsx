import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import PrincipalSection from "../components/PrincipalSection";

const StyledMainDiv = styled.div`
  height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 250px;

  @media screen and (max-width: 700px) {
    height: 40vh;
  }
`

function Home(){
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <span style={{ marginTop: '95px' }}></span>
      <StyledMainDiv>
        <PrincipalSection title={t('label-me')} text={t('text-me')} />
      </StyledMainDiv>
      <StyledMainDiv>
        <PrincipalSection title={t('label-about-me')} text={isMobile ? t('text-about-me-short') : t('text-about-me')} />
      </StyledMainDiv>
      <StyledMainDiv>
        <PrincipalSection title={t('label-projects')} text={isMobile ? t('text-projects-short') : t('text-projects')} />
      </StyledMainDiv>
      <span style={{ marginTop: '95px' }}></span>
    </>
  );
}

export default Home;
