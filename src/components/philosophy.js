import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"
import Fade from "react-reveal/Fade"

const Philosophy = () => (
  <OuterContainer>
    <BackgroundOverlay>
      <Container>
        <Fade>
          <Heading>My Philosophy</Heading>
          <Text>
            I thrive in small, collaborative, multi-disciplinary teams that
            foster transparency and continuous improvement. I value strong
            opinions, loosely held. I believe in the value of designers writing
            frontend code alongside developers.
          </Text>
        </Fade>
      </Container>
    </BackgroundOverlay>
  </OuterContainer>
)

const OuterContainer = styled.section`
  background-image: linear-gradient(-25deg, ${Colors.blue}, ${Colors.cyan});
`

const BackgroundOverlay = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.large} ${Spacing.base};
  background-image: url(${Images.DesignPhilosophy}),
    url(${Images.DevelopPhilosophy});
  background-position: top right, bottom left;
  background-repeat: no-repeat;
  background-size: 25em, 23em;

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
    background-size: 11.25em, 11em;
  }
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
    font-size: ${Typography.baseFontSize};
    margin-left: 0;
  }
`

export default Philosophy
