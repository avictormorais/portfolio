import React from "react";
import styled from "styled-components";
import { FaLaptopCode, FaUser, FaAddressCard, FaCode } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const StyledNavigator = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: fixed;
  right: calc(var(--padding-inline-layout) / 2);
  background-color: var(--secondary-color);
  padding-inline: 10px;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const StyledItem = styled.div`
  display: flex;
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: 10px;
  margin-block: 8px;
  font-size: 1.5em;
  position: relative;

  &:hover{
    cursor: pointer;
  }
  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  text-align: right;
  right: 65px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--secondary-color);
  color: var(--primary-text-color);
  padding: 8px;
  border-radius: 5px;
  font-size: 0.65em;
  padding-inline: 5px;
  font-weight: normal;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
  white-space: nowrap;

`;

const StyledTooltipText = styled.p`
  margin-inline: 10px;
`

const StyledDivNavigator = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
`;

function Navigator() {
  const { t } = useTranslation();

  return (
    <StyledDivNavigator>
    <StyledNavigator>
      <StyledItem>
        <FaUser />
        <Tooltip className="tooltip"><StyledTooltipText>{t('label-about-me')}</StyledTooltipText></Tooltip>
      </StyledItem>
      <StyledItem>
        <FaLaptopCode />
        <Tooltip className="tooltip"><StyledTooltipText>{t('label-projects')}</StyledTooltipText></Tooltip>
      </StyledItem>
      <StyledItem>
        <FaCode />
        <Tooltip className="tooltip"><StyledTooltipText>{t('label-skills')}</StyledTooltipText></Tooltip>
      </StyledItem>
      <StyledItem>
        <FaAddressCard />
        <Tooltip className="tooltip"><StyledTooltipText>{t('label-contact')}</StyledTooltipText></Tooltip>
      </StyledItem>
    </StyledNavigator>
    </StyledDivNavigator>
  );
}

export default Navigator;
