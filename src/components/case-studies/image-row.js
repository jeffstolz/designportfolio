import React from "react"
import styled from "styled-components"
import { Colors, Spacing } from "../../styles/variables"
import Fade from "react-reveal/Fade"

const ImageRow = ({ imageSrcOne, imageSrcTwo }) => (
  <OuterContainer>
    <Fade>
      <InnerContainer>
        <Image src={imageSrcOne} />
        <Image src={imageSrcTwo} />
      </InnerContainer>
    </Fade>
  </OuterContainer>
)

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.small};
  }
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${Spacing.containerWidth};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 48%;
  max-width: ${Spacing.containerWidth};
  background-color: ${Colors.white};
  padding: ${Spacing.base};
  border-radius: ${Spacing.xSmall};
  box-shadow: ${Colors.lightShadow};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 100%;

    &:nth-child(1) {
      margin-bottom: ${Spacing.base};
    }
  }
`

export default ImageRow
