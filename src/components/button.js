import React from "react"
import styled, { css } from "styled-components"
import { Colors, Typography } from "../styles/variables"

const LightButton = ({ label, icon }) => (
  <LightButtonContainer>
    {label}
    <Icon>{icon}</Icon>
  </LightButtonContainer>
)

const DarkButton = ({ label, icon }) => (
  <DarkButtonContainer>
    {label}
    <Icon>{icon}</Icon>
  </DarkButtonContainer>
)

const BorderButton = ({ label, icon }) => (
  <BorderButtonContainer>
    {label}
    <Icon>{icon}</Icon>
  </BorderButtonContainer>
)

const ButtonContainer = css`
  position: relative;
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.mediumFontWeight};
  padding: 1.3em 2.8em 1.3em 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;

  &:hover {
    cursor: pointer;
  }
`

const LightButtonContainer = styled.div`
  ${ButtonContainer};
  background-color: ${Colors.gray0};
  color: ${Colors.black};

  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.white};
  }
`

const DarkButtonContainer = styled.div`
  ${ButtonContainer};
  background-color: ${Colors.gray4};
  color: ${Colors.white};

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.black};
  }
`

const BorderButtonContainer = styled.div`
  ${ButtonContainer};
  border: 1px solid ${Colors.gray3};
  color: ${Colors.white};

  &:hover {
    border: 1px solid ${Colors.white};
    background-color: ${Colors.white};
    color: ${Colors.black};
  }
`

const Icon = styled.span`
  position: absolute;
  top: 1.4em;
  right: 1.3em;
`

export { LightButton, DarkButton, BorderButton }
