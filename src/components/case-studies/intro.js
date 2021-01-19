import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Intro = ({ heading, subheading, imageSrc, imageAlt }) => (
  <Fade>
    <Container>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
      <Image src={imageSrc} alt={imageAlt}></Image>
    </Container>
  </Fade>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${Spacing.xxxHuge} ${Spacing.sectionPadding} 0
    ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.huge} ${Spacing.sectionPaddingMobile} 0
      ${Spacing.sectionPaddingMobile};
  }
`

const Heading = styled.h1`
  max-width: 20em;
  margin-bottom: ${Spacing.small};
`

const Subheading = styled.p`
  ${Typography.subheading};
  color: ${Colors.gray4};
  max-width: 30em;
`

const Image = styled.img`
  max-width: ${Spacing.imageMaxWidth};
  margin: ${Spacing.xHuge} 0;

  @media (max-width: ${Spacing.breakPoint}) {
    margin: ${Spacing.large} 0;
  }
`

export default Intro
