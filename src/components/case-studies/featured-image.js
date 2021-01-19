import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Spacing } from "../../styles/variables"

const FeaturedImage = ({ imageSrc, imageAlt }) => (
  <Fade>
    <Container>
      <Image src={imageSrc} alt={imageAlt} />
    </Container>
  </Fade>
)

const Container = styled.div`
  padding: ${Spacing.huge} ${Spacing.sectionPadding} 0 ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.sectionPaddingMobile} 0
      ${Spacing.sectionPaddingMobile};
  }
`

const Image = styled.img`
  width: 100%;
  max-width: ${Spacing.imageMaxWidth};
`

export default FeaturedImage
