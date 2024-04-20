import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/avm_logo.svg';
import LogoL from '../../assets/avm_logo_l.svg';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  width: 100vw;
  padding-block: 35px;
  padding-inline: 35px;
`

const StyledRh = styled.hr`
  width: 100vw;
  height: 1px;
  background-color: var(--primary-text-color);
  opacity: .5;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  align-items: start;
  margin-left: var(--padding-inline-layout);
`

const StyledP = styled.p`
  font-size: .75em;
  font-weight: bold;
`

const StyledOnGithub = styled(StyledP)`
  font-size: .85em;
  margin-top: auto;
  margin-left: auto;
  margin-right: var(--padding-inline-layout);
`

const StyledGithub = styled.a`
  font-size: 1em;
  text-decoration: underline;
`

function Footer(){

  const { t } = useTranslation();

  return(
    <>
    <StyledRh/>
    <StyledFooter>
      <StyledDiv>
        {localStorage.getItem('theme') == 'light' ? (
          <img src={Logo} alt="Logo" style={{height: '35px', marginBottom: '20px'}}/>
        ) : (
          <img src={LogoL} alt="Logo" style={{height: '35px', marginBottom: '20px'}}/>
        )}
        <StyledP>© 2024 - Victor Morais</StyledP>
      </StyledDiv>
      <StyledOnGithub>{t('on-github')} <StyledGithub target="_blank" href="https://github.com/avictormorais/portfolio">Github</StyledGithub></StyledOnGithub>
    </StyledFooter>
    </>
  )

}

export default Footer;