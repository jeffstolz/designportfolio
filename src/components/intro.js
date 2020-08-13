import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Spacing, Typography } from "../styles/variables"

const Intro = () => (
  <OuterContainer>
    <Container>
      <Heading>Hi, I'm Jeff</Heading>
      <Subheading>I design & develop software</Subheading>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28em;
  margin-top: ${Spacing.medium};
  padding: ${Spacing.large} ${Spacing.base};
  background-image: url(${Images.DevelopIntro}), url(${Images.DesignIntro});
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  background-size: 35%, 50%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 58em;
`

const Heading = styled.h1`
  font-size: 4.5em;
  line-height: 130%;
`

const Subheading = styled.h2`
  font-family: ${Typography.primaryFontFamily};
  font-style: normal;
  font-size: 2.7em;
  font-weight: 300;
`

export default Intro
