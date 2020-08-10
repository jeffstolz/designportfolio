import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const SkillsCard = ({ imageSrc, imageAlt, heading, text }) => (
  <Card>
    <ImageContainer>
      <img src={imageSrc} alt={imageAlt} />
    </ImageContainer>
    <ContentContainer>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </ContentContainer>
  </Card>
)

const Card = styled.li`
  display: flex;
  padding: ${Spacing.small};
  margin-bottom: ${Spacing.small};
  border-radius: ${Spacing.xSmall};
  box-shadow: ${Colors.lightShadow};
  background-color: ${Colors.white};
  max-width: 25em;

  &:nth-child(odd) {
    margin-right: ${Spacing.small};
  }

  @media (max-width: ${Spacing.smallBreakPoint}) {
    &:nth-child(odd) {
      margin-right: 0;
    }
  }
`

const ImageContainer = styled.div`
  background-color: black;
  width: 15%;
  margin-right: ${Spacing.small};
`

const ContentContainer = styled.div`
  width: 85%;
`

const Heading = styled.h3`
  font-size: ${Typography.baseFontSize};
  margin-bottom: ${Spacing.xSmall};
`

const Text = styled.p`
  color: ${Colors.darkGray};
  font-size: ${Typography.smallFontSize};
  line-height: ${Typography.largeLineHeight};
`

export default SkillsCard
