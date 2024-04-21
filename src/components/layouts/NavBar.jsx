import React, { useState, useEffect } from 'react';
import Logo from '../../assets/avm_logo.svg';
import LogoL from '../../assets/avm_logo_l.svg';
import styled from 'styled-components';
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const StyledNav = styled.nav`
  display: flex;
  background-color: var(--primary-color);
  justify-content: start;
  padding-block: 30px;
  align-items: center;
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: 2px solid var(--secondary-color);

  @media screen and (max-width: 700px) {
    padding-block: 15px;
  }
`

const StyledImg = styled.img`
  height: 35px;
  margin-left: var(--padding-inline-layout);
  fill: var(--primary-text-color);
  color: var(--primary-text-color);
`

const StyledSpan = styled.span`
  height: 25px;
  width: 2px;
  background-color: var(--primary-text-color);
  border-radius: 5px;
  margin-inline: 15px;
  opacity: .7;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: var(--padding-inline-layout);
  flex-direction: row;
`

const StyledP = styled.p`
  height: min-content;
  font-size: 1.4em;
  font-weight: normal;
  margin-block: auto;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

const StyledActiveP = styled(StyledP)`
  font-weight: bolder;
`

const StyledMoon = styled(FaMoon)`
  margin-left: auto;
  margin-right: 30px;
  font-size: 1.35em;

  &:hover {
    cursor: pointer;
  }
`

const StyledSun = styled(FaSun)`
  margin-left: auto;
  margin-right: 30px;
  font-size: 1.35em;

  &:hover {
    cursor: pointer;
  }
`

function NavBar() {
  const [isLight, setIsLight] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'light' : true;
  });

  const { i18n } = useTranslation();

  const [isPT, setIsPT] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    if(localStorage.getItem('language') === 'pt'){
      i18n.changeLanguage('pt');
    } else{
      i18n.changeLanguage('en');
    }
    return storedLanguage ? storedLanguage === 'pt' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    document.body.setAttribute('data-theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  useEffect(() => {
    localStorage.setItem('language', isPT ? 'pt' : 'en');
    if(localStorage.getItem('language') === 'pt'){
      i18n.changeLanguage('pt');
    } else{
      i18n.changeLanguage('en');
    }
  }, [isPT]);

  const handleIconClick = () => {
    setIsLight(!isLight);
  }

  const handleLanguageClick = () => {
    setIsPT(!isPT);
  }

  return (
    <StyledNav>
      {isLight ? (
        <StyledImg src={Logo} alt="Logo - AVM" />
      ) : (
        <StyledImg src={LogoL} alt="Logo - AVM" />
      )}
      {isLight ? (
        <StyledSun className="icon" onClick={handleIconClick} />
      ) : (
        <StyledMoon className="icon" onClick={handleIconClick} />
      )}
      <StyledDiv>
        {isPT ? (
          <StyledActiveP>PT</StyledActiveP>
        ) : (
          <StyledP onClick={handleLanguageClick}>PT</StyledP>
        )}
        <StyledSpan />
        {isPT ? (
          <StyledP onClick={handleLanguageClick}>EN</StyledP>
        ) : (
          <StyledActiveP>EN</StyledActiveP>
        )}
      </StyledDiv>
    </StyledNav>
  )
}

export default NavBar;