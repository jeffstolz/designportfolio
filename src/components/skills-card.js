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
      <p>{text}</p>
    </ContentContainer>
  </Card>
)

const Card = styled.li`
  display: flex;
  padding: ${Spacing.base};
  margin-bottom: ${Spacing.small};
  border-radius: ${Spacing.xxSmall};
  box-shadow: ${Colors.lightShadow};
  background-color: ${Colors.white};
`

const ImageContainer = styled.div`
  background-color: black;
  width: 20%;
  margin-right: ${Spacing.small};
`

const ContentContainer = styled.div`
  width: 80%;
`

const Heading = styled.h3`
  margin-bottom: ${Spacing.xSmall};
`

export default SkillsCard
