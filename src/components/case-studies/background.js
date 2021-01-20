import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Background = ({ overview, role, tools }) => (
  <Fade>
    <Container>
      <OverviewContainer>
        <Heading>Background</Heading>
        <Description>{overview}</Description>
      </OverviewContainer>
      <SideContainer>
        <RoleContainer>
          <SubHeading>My Role</SubHeading>
          <Description>{role}</Description>
        </RoleContainer>
        <ToolsContainer>
          <SubHeading>Tools</SubHeading>
          <Description>{tools}</Description>
        </ToolsContainer>
      </SideContainer>
    </Container>
  </Fade>
)

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 85em;
  padding: ${Spacing.xxxHuge} ${Spacing.sectionPadding} ${Spacing.xxHuge}
    ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
    padding: ${Spacing.huge} ${Spacing.sectionPaddingMobile};
  }
`

const OverviewContainer = styled.div`
  width: 62%;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
  }
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.small};
`

const SideContainer = styled.div`
  width: 32%;
  margin-top: 5.2em;

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
  font-size: ${Typography.xSmallFontSize};
  color: ${Colors.red};
  text-transform: uppercase;
  font-weight: ${Typography.baseFontWeight};
  margin-bottom: ${Spacing.xSmall};

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.baseFontSize};
  }
`

const Description = styled.p`
  color: ${Colors.gray4};
`

export default Background
