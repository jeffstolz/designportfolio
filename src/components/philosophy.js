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
          <Heading>My Ethos</Heading>
          <Text>
            I thrive in small, collaborative, multi-disciplinary teams that
            foster transparency and continuous improvement. I choose to work on
            projects that improve the health, education, liberties, and overall
            quality of life for our local & global communities.
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
  padding: ${Spacing.huge} ${Spacing.base};
  background-image: url(${Images.HospitalEthos}), url(${Images.SchoolEthos});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat;
  background-size: 21em, 29em;

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
    background-size: 10em, 15em;
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
