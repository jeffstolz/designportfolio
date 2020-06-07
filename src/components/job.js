import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Job = ({
  title,
  company,
  dates,
  description,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Dates>{dates}</Dates>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${Spacing.medium};
`

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: ${Typography.lightFontWeight};
  font-size: ${Typography.mediumFontSize};
  color: ${Colors.navy};
`

const Company = styled.h3`
  font-size: ${Typography.baseFontSize};
  line-height: ${Typography.largeLineHeight};
`

const Dates = styled.p`
  line-height: ${Typography.largeLineHeight};
`

const Description = styled.p``

export default Job
