import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Ethos = () => (
  <OuterContainer>
    <Container>
      <Heading>My Ethos</Heading>
      <Text>
        Software has a huge impact on our culture, both positive and negative. I
        choose to work on projects that improve the health, education, rights,
        and happiness of our global and local communities. Black Mirror
        fascinates and scares me, and I'd like to be on the right side of
        history when I look back on my career.
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
  width: ${Spacing.mediumContainerWidth};
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.small};
`

const Text = styled.p`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.hugeLineHeight};
  margin-left: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    margin-left: 0;
  }
`

export default Ethos
