import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"
import Fade from "react-reveal/Fade"

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
        <CardLink to={projectLink}>View Case Study</CardLink>
      </TextContainer>
    </OuterContainer>
  </Fade>
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
    height: 15em;
  }
`

const TextContainer = styled.div`
  width: 60%;
  padding: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 100%;
    padding: ${Spacing.base} ${Spacing.small};
  }
`

const PreviewImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: 1px solid ${Colors.lighterGray};
`

const PreviewLabels = styled.p`
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.lightFontWeight};
  color: ${Colors.gray};
  margin-bottom: ${Spacing.small};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const PreviewHeading = styled.h3`
  margin-bottom: ${Spacing.xSmall};
`

const PreviewText = styled.p`
  margin-bottom: ${Spacing.medium};
  color: ${Colors.darkGray};
`

const CardLink = styled(Link)`
  text-decoration: none;
  padding: 0.75em 1.25em;
  margin-top: ${Spacing.base};
  border: 1px solid ${Colors.purple};
  border-radius: ${Spacing.large};

  &:hover {
    color: ${Colors.darkPurple};
    border: 1px solid ${Colors.darkPurple};
    box-shadow: ${Colors.lightShadow};
  }

  @media (max-width: 320px) {
    font-size: ${Typography.smallFontSize};
  }
`

export default FeaturedWorkCard
