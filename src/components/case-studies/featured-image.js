import React from "react"
import styled from "styled-components"
import { Spacing } from "../../styles/variables"
import Fade from "react-reveal/Fade"

const FeaturedImage = ({ imageSrc, imageAlt }) => (
  <Fade>
    <Container>
      <Image src={imageSrc} alt={imageAlt} />
    </Container>
  </Fade>
)

const Container = styled.div`
  padding: 0 ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: 0 ${Spacing.sectionPaddingMobile};
  }
`

const Image = styled.img`
  width: 100%;
`

export default FeaturedImage
