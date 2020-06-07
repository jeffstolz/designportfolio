import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Education = ({
  heading,
  school,
  degree,
  graduation,
  program,
  certificate,
  date,
}) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <School>{school}</School>
      <Description>
        {degree}<br />{graduation}
      </Description>
      <School>{program}</School>
      <Description>
        {certificate}<br />{date}
      </Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${Spacing.medium};
`

const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: ${Typography.lightFontWeight};
  font-size: ${Typography.mediumFontSize};
  color: ${Colors.purple};
`

const School = styled.h3`
  font-size: ${Typography.baseFontSize};
  line-height: ${Typography.largeLineHeight};
`

const Description = styled.p``

export default Education
