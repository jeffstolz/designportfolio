import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Label = ({ label, borderColor, textColor }) => {
  return (
    <Container borderColor={borderColor} textColor={textColor}>{label}</Container>
  )
}

const Container = styled.div.attrs(props => ({
  borderColor: props.borderColor || Colors.blue,
  textColor: props.textColor || Colors.black,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Spacing.pillHeight};
  width: ${Spacing.pillWidth};
  color: ${props => props.textColor};
  border-radius: ${Spacing.pillRadius};
  border: 1pt solid;
  margin-right: 0.5em;
  font-size: ${Typography.smallFontSize};
  border-color: ${props => props.borderColor};

  @media (max-width: ${Spacing.breakPoint}) {
    width: ${Spacing.pillMobileWidth};
    font-size: ${Typography.xSmallFontSize};
  }
`

export default Label
