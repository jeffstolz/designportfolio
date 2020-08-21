import React from "react"
import styled from "styled-components"
import { Colors, Spacing } from "../../styles/variables"

const FeaturedImage = ({ imageSrc }) => (
  <OuterContainer>
    <Container>
      <Image src={imageSrc} />
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.medium} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`

const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.containerWidth};
  background-color: ${Colors.white};
  border-radius: ${Spacing.xSmall};
  box-shadow: ${Colors.lightShadow};
  padding: ${Spacing.base};
`

const Image = styled.img`
  width: 100%;
`

export default FeaturedImage
