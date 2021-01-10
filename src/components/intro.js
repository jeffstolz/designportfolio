import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Spacing, Typography } from "../styles/variables"
import Fade from "react-reveal/Fade"

const Intro = () => (
  <OuterContainer>
    <Container>
      <Fade>
        <Heading>Hi, I'm Jeff</Heading>
      </Fade>
      <Fade delay={250}>
        <Subheading>I design & develop software</Subheading>
      </Fade>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28em;
  padding: ${Spacing.large} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    height: 22em;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65em;
`

const Heading = styled.h1`
  font-size: 4.5em;
  line-height: 130%;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: 3em;
    line-height: 150%;
  }
`

const Subheading = styled.h2`
  font-family: ${Typography.primaryFontFamily};
  font-style: normal;
  font-size: 2.7em;
  font-weight: 300;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: 1.75em;
  }
`

export default Intro
