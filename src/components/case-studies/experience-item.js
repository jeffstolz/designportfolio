import React from "react"
import styled from "styled-components"
import { Spacing, Typography } from "../../styles/variables"

const ExperienceItem = ({ imageSrc, imageAlt, heading, body }) => (
  <Container>
    <InnerContainer>
      <Image src={imageSrc} alt={imageAlt} />
      <Heading>{heading}</Heading>
    </InnerContainer>
    <p>{body}</p>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
    max-width: 25em;
    margin-bottom: ${Spacing.medium};
  }
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: ${Spacing.small};
  }
`

const Image = styled.img`
  @media (max-width: ${Spacing.breakPoint}) {
    margin-right: ${Spacing.small};
  }
`

const Heading = styled.h5`
  font-size: 1.5em;
  margin: ${Spacing.xSmall} 0;

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.mediumFontSize};
    margin: 0;
  }
`

export default ExperienceItem
