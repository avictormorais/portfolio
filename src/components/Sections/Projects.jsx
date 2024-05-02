import React, { useState } from "react";
import styled from "styled-components";
import projects from "../../PersonalInfos/Projects/projects";
import Project from "../Project";
import { useTranslation } from 'react-i18next';

const StyledProjectSection = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

const StyledButton = styled.button`
  display: flex;
  background-color: var(--secondary-color);
  border-radius: 10px;
  width: 70%;
  padding-block: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  margin-inline: auto;
  font-family: var(--content-font);
  font-weight: bold;
  font-size: .9em;
  cursor: pointer;
  margin-top: 10px;

  &:hover{
    transform: scale(1.02);
    background-color: var(--primary-text-color);
    color: var(--primary-color);
  }
`

function Projects(){
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  }

  return (
    <StyledProjectSection>
      {projects && (showAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
        <Project key={index} project={project}/>
      ))}
      {projects && projects.length > 3 && (
        <StyledButton onClick={toggleProjects}>
          {showAllProjects ? t('label-see-less') : t('label-see-more')}
        </StyledButton>
      )}
    </StyledProjectSection>
  );
}

export default Projects;