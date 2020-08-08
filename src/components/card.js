import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Card = ({
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
  margin: 0 0 ${Spacing.medium} 0;
  border-radius: ${Spacing.xxSmall};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 40%;
  background-color: black;
  border-radius: ${Spacing.xxSmall} 0 0 ${Spacing.xxSmall};

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
`

const CardLink = styled(Link)`
  background-color: ${Colors.black};
  color: ${Colors.white};
  text-decoration: none;
  padding: ${Spacing.small} ${Spacing.base};
  border-radius: ${Spacing.large};

  &:hover {
    background-color: ${Colors.purple};
    box-shadow: ${Colors.lightShadow};
  }
`

export default Card
