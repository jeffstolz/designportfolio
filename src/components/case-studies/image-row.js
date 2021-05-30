import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../../styles/variables"

const ImageRow = ({
  imageSrcOne,
  imageAltOne,
  imageDescriptionOne,
  imageSrcTwo,
  imageAltTwo,
  imageDescriptionTwo,
}) => (
  <Fade>
    <Container>
      <ImageContainerOne>
        <Image src={imageSrcOne} alt={imageAltOne} />
        <Description>{imageDescriptionOne}</Description>
      </ImageContainerOne>
      <ImageContainerTwo>
        <Image src={imageSrcTwo} alt={imageAltTwo} />
        <Description>{imageDescriptionTwo}</Description>
      </ImageContainerTwo>
    </Container>
  </Fade>
)

const Container = styled.div`
  display: flex;
  padding: ${Spacing.huge} ${Spacing.sectionPadding} 0 ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.sectionPaddingMobile} 0
      ${Spacing.sectionPaddingMobile};
  }

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
  }
`

const ImageContainerOne = styled.div`
  margin-right: ${Spacing.large};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    margin-right: 0;
    margin-bottom: ${Spacing.large};
  }
`

const ImageContainerTwo = styled.div``

const Image = styled.img`
  width: 100%;
  max-width: ${Spacing.smallImageMaxWidth};
  outline: 2px solid ${Colors.gray1};
  outline-offset: -2px;
  border: 1px solid red;
`

const Description = styled.p`
  font-size: ${Typography.smallFontSize};
  margin-top: ${Spacing.small};
  max-width: ${Spacing.smallImageMaxWidth};
`

export default ImageRow
