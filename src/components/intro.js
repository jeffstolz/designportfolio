import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"
import Button from "./button"
import { darkTheme } from "./themes"
import { FaArrowDown } from "react-icons/fa"
import Fade from "react-reveal/Fade"

const Intro = () => (
  <ThemeProvider theme={darkTheme}>
    <Container>
      <Fade>
        <HeadingContainer>
          <Heading>Hi, I'm Jeff</Heading>
          <Wave src={Images.Wave} alt="Image of waving hand" />
        </HeadingContainer>
        <Subheading>
          I'm a <DesignerText>product designer</DesignerText> and{" "}
          <DeveloperText>front end developer</DeveloperText>.&nbsp;
          <br />
          Welcome!
        </Subheading>
      </Fade>
      <Fade delay={500}>
        <ButtonContainer>
          <Button label={"Download Resume"} icon={<FaArrowDown />} />
        </ButtonContainer>
      </Fade>
    </Container>
  </ThemeProvider>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 12%;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: 0 8%;
  }
`

const HeadingContainer = styled.div`
  display: flex;
`

const Heading = styled.h1`
  margin-bottom: 0.35em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.smallHeadingFontSize};
  }
`

const Wave = styled.img`
  width: 3.5em;
  margin-top: -1em;
  margin-left: 1.5em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    display: none;
  }
`

const Subheading = styled.h2`
  font-family: ${Typography.primaryFontFamily};
  font-size: ${Typography.mediumFontSize};
  font-weight: ${Typography.lightFontWeight};
  line-height: ${Typography.hugeLineHeight};
`

const DesignerText = styled.span`
  color: ${Colors.red};
`

const DeveloperText = styled.span`
  color: ${Colors.blue};
`

const ButtonContainer = styled.div`
  margin-top: ${Spacing.medium};
`

export default Intro
