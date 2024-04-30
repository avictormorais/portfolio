import React from "react";
import styled from "styled-components";
import projects from "../../PersonalInfos/Projects/projects";
import Project from "../Project";

const StyledProjectSection = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

function Projects(){
  return (
    <StyledProjectSection>
      {projects && projects.map((project, index) => (
        <Project key={index} project={project}/>
      ))}
    </StyledProjectSection>
  );
}

export default Projects;