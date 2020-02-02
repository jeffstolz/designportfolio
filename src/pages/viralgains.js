import React from "react"
import styled from "styled-components"
import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"
import CreativeBuilder from "../images/viralgains-1.png"
import CampaignManager from "../images/viralgains-2.png"
import DashboardOne from "../images/viralgains-3.png"
import DashboardTwo from "../images/viralgains-4.png"
import { Colors, Spacing, Typography } from "../styles/variables"

const ViralgainsPage = () => (
  <AboutLayout>
    <SEO title="ViralGains" />
    <OuterContainer>
      <Container>
        <LargeText>ViralGains</LargeText>
        <PillContainer>
          <VisualDesign>Visual Design</VisualDesign>
        </PillContainer>
        <WelcomeText>
          As a consultant for thoughtbot, I worked with another designer to lead
          the UI redesign and implementation for Viralgains, an advertising
          journey management platform. We began with initial design research
          such as mood boards and competitor analysis until we agreed upon a
          specific aesthetic. We created a sleek, dark tone theme that appealed
          to the advertising manager persona and matched the company's current
          brand. We then implemented the designs in React, working in
          collaboration with their in-house development team.
        </WelcomeText>
        <LargeImage src={CreativeBuilder} alt="Viralgains Creative Builder" />
        <LargeImage src={CampaignManager} alt="Viralgains Campaign Manager" />
        <LargeImage src={DashboardOne} alt="Viralgains Dashboard" />
        <LargeImage src={DashboardTwo} alt="Viralgains Dashboard" />
      </Container>
    </OuterContainer>
  </AboutLayout>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: ${Spacing.pageBottom};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-right: ${Spacing.base};
    padding-left: ${Spacing.base};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
  padding-top: ${Spacing.xHuge};
`

const LargeText = styled.h1`
  font-size: ${Typography.headingFontSize};
  margin-bottom: ${Spacing.xSmall};
`

const PillContainer = styled.div`
  display: flex;
  margin-top: ${Spacing.small};
  margin-bottom: ${Spacing.medium};
`

const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Spacing.pillHeight};
  width: ${Spacing.pillWidth};
  color: ${Colors.black};
  border-radius: ${Spacing.pillRadius};
  border: 1pt solid;
  margin-right: 0.5em;
  font-size: ${Typography.smallFontSize};
`

const VisualDesign = styled(Pill)`
  border-color: ${Colors.violet};
`

const WelcomeText = styled.p``

const LargeImage = styled.img`
  margin-top: ${Spacing.xHuge};
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.medium};
  }
`

export default ViralgainsPage
