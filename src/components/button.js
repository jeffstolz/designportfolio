import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Typography } from "../styles/variables"

const Button = ({ style, label, icon }) => (
  <ThemeProvider theme={style}>
    <Container>
      {label}
      <Icon>{icon}</Icon>
    </Container>
  </ThemeProvider>
)

const Container = styled.div`
  position: relative;
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.mediumFontWeight};
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.borderColor};
  padding: 1.3em 2.8em 1.3em 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.hoverBgColor};
    color: ${props => props.theme.hoverColor};
    border: 1px solid ${props => props.theme.hoverBorderColor};
  }
`

const Icon = styled.span`
  position: absolute;
  top: 1.4em;
  right: 1.3em;
`

export default Button
