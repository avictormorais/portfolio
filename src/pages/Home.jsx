import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import PrincipalSection from "../components/Sections/PrincipalSection";
import Button from "../components/Clickables/Button";
import { FaUser } from "react-icons/fa";
import Skills from "../components/Sections/Skills";
import Contacts from "../components/Sections/Contacts";
import Projects from "../components/Sections/Projects";

import projects from "../PersonalInfos/Projects/projects.json";
import experiences from "../PersonalInfos/Experiences/experiences";

const StyledMarginTop = styled.span`
  height: 25vh;

  @media screen and (max-width: 700px){
    height: 20vh;
  }
`

function Home(){
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  let handleCVDownload = () => {
    if(currentLanguage == 'pt'){
      window.open("../CVs/cv.pdf", "_blank");
    } else {
      window.open("../CVs/cv-en.pdf", "_blank");
    }
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

      <span id="experiencesSection">
        <PrincipalSection title={t('label-experiences')} text={isMobile ? t('text-experiences-short') : t('text-experiences-short')} childComponent={() => <Projects content={experiences}/>}/>
      </span>

      <span id="projectsSection">
        <PrincipalSection title={t('label-projects')} text={isMobile ? t('text-projects-short') : t('text-projects')} childComponent={() => <Projects content={projects}/>}/>
      </span>

      <span id="contactSection">
        <PrincipalSection title={t('label-contact')} text={t('text-contact')} childComponent={() => <Contacts/>}/>
      </span>
    </>
  );
}

export default Home;
