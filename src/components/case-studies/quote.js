import React from "react"
import styled from "styled-components"
import { Images } from "../../images"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Quote = ({ quote, source }) => (
  <OuterContainer>
    <BackgroundOverlay>
      <Container>
        <Text>"{quote}"</Text>
        <Source>{source}</Source>
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
  background-image: url(${Images.DesignSkills}), url(${Images.DevelopSkills});
  background-position: top right, bottom left;
  background-repeat: no-repeat;
  background-size: 44.5em, 42em;

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
    background-size: 20em, 20em;
  }
`

const Container = styled.figure`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    margin: 0;
  }
`

const Text = styled.blockquote`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.hugeLineHeight};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.baseFontSize};
  }
`

const Source = styled.figcaption`
  margin-top: ${Spacing.small};
  font-style: italic;
`

export default Quote
