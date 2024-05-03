import React, { useState, useEffect } from 'react';
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

const LogoSVG = styled.svg`
  height: 35px;
  margin-left: var(--padding-inline-layout);
  fill: var(--primary-text-color);
  color: var(--primary-text-color);
  cursor: pointer;
  width: 70px;
`

function NavBar() {
  const [isLight, setIsLight] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'light' : true;
  });

  const { i18n } = useTranslation();

  const [isPT, setIsPT] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'pt') {
      i18n.changeLanguage('pt');
      return true;
    } else if (storedLanguage === 'en') {
      i18n.changeLanguage('en');
      return false;
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'pt') {
        i18n.changeLanguage('pt');
        localStorage.setItem('language', 'pt');
        return true;
      } else {
        i18n.changeLanguage('en');
        localStorage.setItem('language', 'en');
        return false;
      }
    }
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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledNav>
      <LogoSVG onClick={handleScrollToTop} xmlns="http://www.w3.org/2000/svg" width="700" height="400" viewBox="0 0 700 400">
          <path id="AVM_1" data-name="AVM 1" d="M69.091,399.992H65.433q-25.6,0-45.923-20.047Q0,360.322,0,332.6q0-28.15,19.1-48.2c12.192-12.8,20.071-20.18,39.677-22.605l45.833-131.146a13.4,13.4,0,0,0-9.945-4.538q-17.3,0-17.3,20.874,0,3.637,2.162,10.438l-9.512,4.538a76.291,76.291,0,0,1-5.189-26.32q0-39.48,32.861-39.48,0.861,0,5.188.227l12.539,0.681,16.863-47.287Q119.315,30.28,99.857,30.273q-22.923,0-41.076,27.681l-8.215-5.9q8.209-12.7,14.917-21.782A79.3,79.3,0,0,1,78.237,16.205,57.646,57.646,0,0,1,119,0c10.062,0,19.268,3.758,28.184,10.392l3.881-9.506,9.489,4.074L156.5,17.113q5.189,7.722,12.971,34.942l56.642,191.42c1.562,5.767,5.665,13.77,6.888,16.129,4.79-6.019,9.229-9.264,12.622-13.363,8.013-8.591,14.41-15.085,14.41-15.085V110.675q-31.6-15.867-31.6-48.778,0-47.6,43.8-61.707l3.881,12.929Q252.266,24.29,252.269,41.328q0,30.564,46.573,30.56v162.2l23.693,85.878c5.908-3.527,18.254-75.3,36.742-81.176V77.154L341.534,58.936l-12.2,12.342L320.466,60.7,365.93,17.21,399.2,51.3l18.851-17.63,0.113,0.127L454.372,0q14.412,15.289,19.406,29.972Q477.1,41.734,477.1,65.232L547.518,0q24.391,19.394,24.4,64.058L643.991,0l30.494,29.972L691.673,14.1l8.316,10.578-33.82,31.147V189.845c0,20.771,4.244,162.533,12.752,168.015l13.306-11.753,7.762,11.753L651.2,399.586q-23.845-14.683-23.841-62.3V49.365l-8.317-8.228L571.914,82.275V350.221l11.643,9.99,13.306-11.754,9.426,9.991-45.464,41.138L519.8,360.8,533.1,350.221V81.687q0-25.854-12.2-38.787L477.659,82.863v266.77l11.088,10.578,11.089-11.166,8.871,10.578-42.692,39.963-32.157-30.56-17.742,16.456-8.871-9.991,31.6-29.972V81.687q0-24.683-11.643-38.2L418.1,52.107l-20.01,19.17V235.264a32.376,32.376,0,0,1,4.99-.587H406.4a44.463,44.463,0,0,1,6.1.587v14.1q-8.317-.579-13.307-0.588h-6.653c-23.261,0-43.748,126.444-61.944,136.437-30.991,14.215.179,0.538-31.2,13.976L260.912,266.969,247.726,284.1,223.849,310c-12.076-6.652-19.937-15.22-25.409-35.491l-17.728-62.623H86.885L70.022,261.8a101.354,101.354,0,0,1,54.48,15.882l9.5-9.49,35.645,38.875L134.005,344.8c-14.991-14.819-55.84-54.422-73.449-54.422q-19.917,0-33.731,11.943-14.631,13.646-14.63,34.122,0,23.452,17.069,39.24,16.659,14.495,39.827,14.5,2.438,0,4.674-.214M138.339,64.307L99.424,177.393h70.911Z"/>
      </LogoSVG>
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