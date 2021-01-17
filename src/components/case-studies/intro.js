import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Intro = ({ heading, subheading }) => (
  <Container>
    <Fade>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </Fade>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${Spacing.xxxHuge} ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.huge} ${Spacing.sectionPaddingMobile};
  }
`

const Heading = styled.h1`
  margin-bottom: ${Spacing.small};
`

const Subheading = styled.p`
  ${Typography.subheading};
  color: ${Colors.gray4};
  margin-bottom: ${Spacing.base};
`

export default Intro
