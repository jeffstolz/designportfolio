import React from "react"
import styled from "styled-components"
import { Spacing, Typography } from "../../styles/variables"

const Background = ({ overview, role, tools }) => (
  <OuterContainer>
    <Container>
      <OverviewContainer>
        <Heading>Background</Heading>
        <p>{overview}</p>
      </OverviewContainer>
      <SideContainer>
        <RoleContainer>
          <SubHeading>My Role</SubHeading>
          <p>{role}</p>
        </RoleContainer>
        <ToolsContainer>
          <SubHeading>Tools</SubHeading>
          <p>{tools}</p>
        </ToolsContainer>
      </SideContainer>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.xHuge} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${Spacing.containerWidth};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
  }
`

const OverviewContainer = styled.div`
  width: 64%;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
  }
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.xSmall};
`

const SideContainer = styled.div`
  width: 30%;
  margin-top: ${Spacing.small};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.base};
    width: 100%;
  }
`

const RoleContainer = styled.div`
  margin-bottom: ${Spacing.base};
`

const ToolsContainer = styled.div``

const SubHeading = styled.h5`
  font-size: ${Typography.baseFontSize};
  margin: ${Spacing.xSmall} 0;

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.baseFontSize};
    margin: 0;
  }
`

export default Background
