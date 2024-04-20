import React, { useState, useEffect } from 'react';
import Logo from '../../assets/avm_logo.svg';
import styled from 'styled-components';
import { FaMoon, FaSun } from "react-icons/fa6";

const StyledNav = styled.nav`
  display: flex;
  background-color: var(--primary-color);
  justify-content: start;
  padding-block: 30px;
  align-items: center;
  width: 100vw;
`

const StyledImg = styled.img`
  height: 35px;
  margin-left: 70px;
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
  margin-right: 70px;
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
  const [isLight, setIsLight] = useState(false);
  const [isPT, setIsPT] = useState(false);

  const handleIconClick = () => {
    setIsLight(!isLight);
  }

  const handleLanguageClick = () => {
    setIsPT(!isPT);
  }

  return(
    <StyledNav>
      <StyledImg src={Logo} alt="Logo - AVM" />
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
        <StyledSpan/>
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