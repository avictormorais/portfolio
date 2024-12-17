import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import IconSimple from "./Clickables/IconSimple";
import { useTranslation } from 'react-i18next';

const StyledDivProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-block: 35px;
  margin-inline: auto;

  @media screen and (max-width: 1500px){
    width: 80%;
  }

  @media screen and (max-width: 1300px){
    width: 95%;
  }

  @media screen and (max-width: 1200px){
    width: 100%;
  }

  @media screen and (max-width: 1100px){
    flex-direction: column;
  }
`

const StyledProjectPreview = styled.img`
  width: 50%;
  height: auto;
  border-radius: 7px;

  @media screen and (max-width: 1100px){
    width: 80%;
  }

  @media screen and (max-width: 500px){
    width: 95%;
  }
`

const StyledDivInfos = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-inline: 20px;

  @media screen and (max-width: 1100px){
    width: 80%;
  }

  @media screen and (max-width: 500px){
    width: 95%;
  }
`

const StyledLogo = styled.img`
  height: 70px;
  width: auto;
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block: 5px;
  flex-wrap: wrap;

  ${props => props.mobile && `
    display: none;
  `}

  @media screen and (max-width: 1100px){
    ${props => props.title && `
      display: none;
    `}
    ${props => props.mobile && `
      display: flex;
      margin-bottom: 15px;
    `}
  }
`
const StyledH1 = styled.h1`
  font-size: 1.35em;
  margin-left: 10px;
  font-family: var(--content-font);
`

const StyledHr = styled.hr`
  width: 100%;
  background-color: var(--secondary-color);
  margin-top: 5px;
  margin-bottom: 10px;
  opacity: 0.5;

  @media screen and (max-width: 1100px){
    display: none;
  }
`

const StyledDescription = styled.p`
  font-size: .85em;
  font-family: var(--content-font);
  font-weight: bold;
  text-align: justify;

  @media screen and (max-width: 1100px){
    margin-block: 15px;
  }
`

const StyledH3 = styled.h3`
  font-size: .9em;
  font-family: var(--content-font);
  font-weight: bold;
  text-align: justify;
  margin-bottom: auto;
  margin-top: 10px;
  margin-right: 10px;
`

const StyledBtn = styled.button`
  height: 35px;
  width: auto;
  background-color: var(--primary-text-color);
  border-radius: 35px;
  padding-inline: 15px;
  padding-block: 10px;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--content-font);
  font-weight: bolder;
  border: none;
  font-size: .8em;
  cursor: pointer;
  margin-right: 5px;

  &:hover{
    background-color: var(--secondary-color);
    color: var(--primary-text-color);
    transform: scale(1.02);
  }
`

function Project({ project }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    project && (
      <StyledDivProject>
        <StyledInfo mobile={project.name} title={project.name}>
          <StyledLogo src={project.icon} />
          <StyledH1>{project.name}</StyledH1>
        </StyledInfo>
        <StyledProjectPreview src={project.preview} />
        <StyledDivInfos>
          <StyledInfo title={project.name}>
            <StyledLogo src={project.icon} />
            <StyledH1>{project.name}</StyledH1>
          </StyledInfo>
          <StyledHr />
          {currentLanguage === 'pt' ? (
            <StyledDescription>{project.descriptionPt}</StyledDescription>
          ) : (
            <StyledDescription>{project.description}</StyledDescription>
          )}
          {project.technologies && (
            <StyledInfo>
              <StyledH3>Stack:</StyledH3>
              {project.technologies.map((tech, index) => (
                <IconSimple key={index} icon={tech.icon} color={tech.color} />
              ))}
            </StyledInfo>
          )}
          {project.deploy || project.github ? (
            <StyledInfo>
              {project.deploy && (
                <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                  <StyledBtn>Deploy</StyledBtn>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <StyledBtn>Github</StyledBtn>
                </a>
              )}
            </StyledInfo>
          ) : (
            <StyledH3>{t('label-soon')}</StyledH3>
          )}
        </StyledDivInfos>
      </StyledDivProject>
    )
  );
}

export default Project;