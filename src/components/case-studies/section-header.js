import React from "react"
import styled from "styled-components"
import { Spacing } from "../../styles/variables"

const SectionHeader = ({ heading, content }) => (
  <OuterContainer>
    <Container>
      <Heading>{heading}</Heading>
      <p>{content}</p>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.xxHuge} ${Spacing.base} ${Spacing.base} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.huge} ${Spacing.small} ${Spacing.small} ${Spacing.small};
  }
`

const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.containerWidth};
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.xSmall};
`

export default SectionHeader
