import React from "react"
import styled from "styled-components"
import { Spacing } from "../../styles/variables"

const Experience = ({ children }) => (
  <OuterContainer>
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.small};
  }
`

const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.containerWidth};
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
  }
`

export default Experience
