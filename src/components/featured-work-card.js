import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const FeaturedWorkCard = ({
  imageSrc,
  imageAlt,
  previewLabels,
  previewHeading,
  previewText,
  projectLink,
}) => (
  <OuterContainer>
    <ImageContainer>
      <PreviewImage src={imageSrc} alt={imageAlt} />
    </ImageContainer>
    <TextContainer>
      <PreviewLabels>{previewLabels}</PreviewLabels>
      <PreviewHeading>{previewHeading}</PreviewHeading>
      <PreviewText>{previewText}</PreviewText>
      <CardLink to={projectLink}>View Case Study</CardLink>
    </TextContainer>
  </OuterContainer>
)

const OuterContainer = styled.li`
  display: flex;
  background-color: ${Colors.white};
  min-height: ${Spacing.cardHeight};
  box-shadow: ${Colors.darkShadow};
  margin: 0 0 ${Spacing.medium} ${Spacing.base};
  border-radius: ${Spacing.xSmall};

  &:nth-child(5) {
    margin: 0 0 0 ${Spacing.base};
  }

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
    margin: 0 0 ${Spacing.medium} 0;

    &:nth-child(5) {
      margin: 0;
    }
  }
`

const ImageContainer = styled.div`
  width: 40%;
  background-color: black;
  border-radius: ${Spacing.borderRadius} 0 0 ${Spacing.borderRadius};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 100%;
    height: ${Spacing.cardMobileHeight};
  }
`

const TextContainer = styled.div`
  width: 60%;
  padding: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 100%;
  }
`

const PreviewImage = styled.img`
  border: 1px solid green;
`

const PreviewLabels = styled.p`
  color: ${Colors.gray};
  font-size: ${Typography.xSmallFontSize};
  margin-bottom: ${Spacing.small};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const PreviewHeading = styled.h3`
  margin-bottom: ${Spacing.xSmall};
`

const PreviewText = styled.p`
  margin-bottom: ${Spacing.base};
  color: ${Colors.darkGray};
`

const CardLink = styled(Link)`
  background-color: ${Colors.black};
  color: ${Colors.white};
  text-decoration: none;
  padding: ${Spacing.small} ${Spacing.base};
  border-radius: ${Spacing.large};

  &:hover {
    background-color: ${Colors.darkGray};
    box-shadow: ${Colors.lightShadow};
  }
`

export default FeaturedWorkCard
