import React from "react"
import styled from "styled-components"
import { Colors, Spacing } from "../../styles/variables"
import Fade from "react-reveal/Fade"

const FeaturedImage = ({ imageSrc }) => (
  <OuterContainer>
    <Fade>
      <Container>
        <Image src={imageSrc} />
      </Container>
    </Fade>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.small};
  }
`

const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.containerWidth};
  background-color: ${Colors.white};
  padding: ${Spacing.base};
  border-radius: ${Spacing.xSmall};
  box-shadow: ${Colors.lightShadow};
`

const Image = styled.img`
  width: 100%;
`

export default FeaturedImage
