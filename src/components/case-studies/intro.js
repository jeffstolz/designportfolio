import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Intro = ({ heading, subheading, imageSrc, imageAlt }) => (
  <Container id="top">
    <TextContainer>
      <Fade>
        <Heading>{heading}</Heading>
      </Fade>
      <Fade delay={250}>
        <Subheading>{subheading}</Subheading>
      </Fade>
    </TextContainer>
    <Fade delay={800}>
      <Image src={imageSrc} alt={imageAlt} />
    </Fade>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${Colors.black};
  padding: ${Spacing.xHuge} ${Spacing.sectionPadding} 0
    ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.xxHuge} ${Spacing.sectionPaddingMobile} 0
      ${Spacing.sectionPaddingMobile};
  }
`

const TextContainer = styled.div``

const Heading = styled.h1`
  color: ${Colors.white};
  max-width: 18em;
  margin-bottom: ${Spacing.xSmall};
`

const Subheading = styled.p`
  ${Typography.subheading};
  color: ${Colors.gray2};
  max-width: 30em;
  margin-bottom: ${Spacing.small};
`

const Image = styled.img`
  width: 100%;
  max-width: ${Spacing.imageMaxWidth};
  margin-bottom: -4px;
`

export default Intro
