import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Colors, Typography } from "../styles/variables"

const Button = ({ label, icon }) => (
  <Container href={Images.JeffStolzResume} download>
    {label}
    <IconContainer>{icon}</IconContainer>
  </Container>
)

const Container = styled.button`
  position: relative;
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.mediumFontWeight};
  background-color: ${props => props.theme.bgButton};
  color: ${props => props.theme.primaryButton};
  border: none;
  padding: 1.3em 2.8em 1.3em 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;

  &:hover {
    background-color: ${props => props.theme.primaryButton};
    color: ${props => props.theme.secondaryButton};
    cursor: pointer;
  }
`

Container.defaultProps = {
  theme: {
    bgButton: Colors.gray0,
    primaryButton: Colors.black,
    secondaryButton: Colors.white,
  },
}

const IconContainer = styled.span`
  position: absolute;
  top: 1.4em;
  right: 1.3em;
`

export default Button
