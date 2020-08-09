import React from "react"
import styled from "styled-components"
import { Colors, Spacing } from "../styles/variables"

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
  padding: ${Spacing.base};
  margin-bottom: ${Spacing.base};
  border-radius: ${Spacing.borderRadius};
  box-shadow: ${Colors.lightShadow};
  background-color: ${Colors.white};
  max-width: 42em;

  &:nth-child(3) {
    margin-bottom: 0;
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
  margin-bottom: ${Spacing.xSmall};
`

const Text = styled.p`
  color: ${Colors.darkGray};
`

export default SkillsCard
