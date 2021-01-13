import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Button from "./button"
import { FaArrowRight } from "react-icons/fa"
import { Colors, Spacing, Typography } from "../styles/variables"

const FeaturedWorkCard = ({
  imageSrc,
  imageAlt,
  previewLabels,
  previewHeading,
  previewText,
  projectLink,
}) => (
  <Fade>
    <OuterContainer>
      <ImageContainer>
        <PreviewImage src={imageSrc} alt={imageAlt} />
      </ImageContainer>
      <TextContainer>
        <PreviewLabels>{previewLabels}</PreviewLabels>
        <PreviewHeading>{previewHeading}</PreviewHeading>
        <PreviewText>{previewText}</PreviewText>
        <Button
          to={projectLink}
          label={"View Case Study"}
          icon={<FaArrowRight />}
        />
      </TextContainer>
    </OuterContainer>
  </Fade>
)

const OuterContainer = styled.li`
  display: flex;
  min-height: ${Spacing.cardHeight};
  margin-bottom: ${Spacing.huge};
  border: 1px solid ${Colors.gray1};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
    margin-bottom: ${Spacing.medium};
  }
`

const ImageContainer = styled.div`
  width: 42%;
  background-color: ${Colors.black};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 100%;
    height: 11em;
  }
`

const TextContainer = styled.div`
  width: 58%;
  padding: ${Spacing.base} ${Spacing.medium};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 100%;
    padding: ${Spacing.base} ${Spacing.small};
  }
`

const PreviewImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: 1px solid ${Colors.gray1};
`

const PreviewLabels = styled.p`
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.lightFontWeight};
  color: ${Colors.gray3};
  margin-bottom: ${Spacing.base};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const PreviewHeading = styled.h3`
  margin-bottom: ${Spacing.xSmall};
`

const PreviewText = styled.p`
  margin-bottom: ${Spacing.base};
  color: ${Colors.gray4};
`

export default FeaturedWorkCard
