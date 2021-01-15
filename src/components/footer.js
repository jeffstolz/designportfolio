import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Link as ScrollLink } from "react-scroll"
import Button from "./button"
import { FaArrowUp } from "react-icons/fa"
import { footerButton } from "./themes"
import { Colors, Spacing, Typography } from "../styles/variables"

const Footer = () => (
  <Container>
    <ThemeProvider theme={footerButton}>
      <ScrollLink
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        duration={800}
      >
        <Button label={"Return to top"} icon={<FaArrowUp />} />
      </ScrollLink>
    </ThemeProvider>
    <Description>Designed & developed by Jeff Stolz</Description>
  </Container>
)

const Container = styled.footer`
  display: flex;
  align-items: center;
  color: ${Colors.gray2};
  background-color: ${Colors.gray4};
  font-size: ${Typography.smallFontSize};
  padding: 1.5em 12%;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5em 8%;
  }
`

const Description = styled.p`
  margin-left: ${Spacing.medium};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    margin-left: 0;
    margin-top: ${Spacing.base};
  }
`

export default Footer
