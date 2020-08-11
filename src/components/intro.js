import React from "react"
import styled from "styled-components"
import { Spacing, Typography } from "../styles/variables"

const Intro = () => (
  <OuterContainer>
    <Container>
      <Heading>Hi, I'm Jeff.</Heading>
      <Subheading>I design & develop software</Subheading>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30em;
  margin-top: ${Spacing.medium};
  padding: ${Spacing.large} ${Spacing.base};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`

const Heading = styled.h1`
  font-size: ${Typography.largeFontSize};
`

const Subheading = styled.h2`
  font-size: ${Typography.headingFontSize};
`

export default Intro
