import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const Ethos = () => (
  <OuterContainer id="ethos">
    <BackgroundOverlay>
      <Container>
        <Heading>My Ethos</Heading>
        <Text>
          Every day is an opportunity to carry myself with authenticity,
          compassion, humor, and humility. I choose to work on projects that
          improve the health, education, liberties, and overall quality of life
          for our global and local communities.
        </Text>
      </Container>
    </BackgroundOverlay>
  </OuterContainer>
)

const OuterContainer = styled.section`
  background-image: linear-gradient(-25deg, ${Colors.teal}, ${Colors.lime});
`

const BackgroundOverlay = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.large} ${Spacing.base};
  background-image: url(${Images.HospitalEthos}), url(${Images.SchoolEthos});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat;
  background-size: 25%, 30%;
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
