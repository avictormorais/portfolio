import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import PrincipalSection from "../components/Sections/PrincipalSection";
import Button from "../components/Clickables/Button";
import { FaUser } from "react-icons/fa";
import Skills from "../components/Sections/Skills";
import Contacts from "../components/Sections/Contacts";

const StyledTest = styled.div`
  height: 100vh;
`

const StyledMarginTop = styled.span`
  height: 25vh;

  @media screen and (max-width: 700px){
    height: 20vh;
  }
`

function Home(){
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  let handleCVDownload = () => {
    console.log('CV')
  }

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
      <StyledMarginTop/>
     
      <PrincipalSection title={t('label-me')} text={t('text-me')}/>

      <span id="aboutMeSection">
        <PrincipalSection 
          title={t('label-about-me')}
          text={isMobile ? t('text-about-me-short') : t('text-about-me')}
          childComponent={() => <Button text={`${t('label-download')} CV`} icon={FaUser} tip={"Curriculum Vitae"} onClick={handleCVDownload}/>}
        />
      </span>

      <span id="skillsSection"> 
        <PrincipalSection title={t('label-skills')} text={t('text-skills')} childComponent={() => <Skills/>}/>
      </span>

      <span id="projectsSection">
        <PrincipalSection title={t('label-projects')} text={isMobile ? t('text-projects-short') : t('text-projects')} childComponent={() => <StyledTest/>}/>
      </span>

      <span id="contactSection">
        <PrincipalSection title={t('label-contact')} text={t('text-contact')} childComponent={() => <Contacts/>}/>
      </span>
    </>
  );
}

export default Home;
