import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Ethos = () => (
  <OuterContainer id="ethos">
    <Container>
      <Heading>My Ethos</Heading>
      <Text>
        Every day is an opportunity to carry myself with authenticity,
        compassion, humor, and humility. I choose to work on projects that
        improve the health, education, liberties, and overall quality of life
        for our global and local communities.
      </Text>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${Colors.cyan};
  padding: ${Spacing.large} ${Spacing.base};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.small};
`

const Text = styled.p`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.hugeLineHeight};
  margin-left: ${Spacing.small};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    margin-left: 0;
  }
`

export default Ethos
