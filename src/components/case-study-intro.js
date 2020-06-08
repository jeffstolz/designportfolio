import React from "react"
import styled from "styled-components"
import { Spacing, Typography } from "../styles/variables"

const CaseStudyIntro = ({
  heading,
  description,
  descriptionBottom,
}) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <DescriptionContainer>
        <p>{description}</p>
        <p>{descriptionBottom}</p>
      </DescriptionContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
  }
`

const Heading = styled.h2`
  display: flex;
  width: 100%;
  font-size: ${Typography.headingFontSize};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.small};
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export default CaseStudyIntro
