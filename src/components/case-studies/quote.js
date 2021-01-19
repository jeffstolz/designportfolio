import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Quote = ({ quote, source }) => (
  <Fade>
    <Container>
      <Excerpt>"{quote}"</Excerpt>
      <Source>- {source}</Source>
    </Container>
  </Fade>
)

const Container = styled.figure`
  background-color: ${Colors.offWhite};
  padding: ${Spacing.xxHuge} ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.huge} ${Spacing.sectionPaddingMobile};
  }
`

const Excerpt = styled.blockquote`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.xHugeLineHeight};
  font-weight: ${Typography.baseFontWeight};
  max-width: 35em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.baseFontSize};
  }
`

const Source = styled.figcaption`
  margin-top: ${Spacing.base};
  color: ${Colors.gray4};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.xSmallFontSize};
  }
`

export default Quote
