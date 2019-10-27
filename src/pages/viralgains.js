import React from "react"
import styled from "styled-components"

import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"

import CreativeBuilder from "../images/viralgains-1.png"
import CampaignManager from "../images/viralgains-2.png"
import DashboardOne from "../images/viralgains-3.png"
import DashboardTwo from "../images/viralgains-4.png"

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
  margin-bottom: 100pt;

  @media (max-width: 950px) {
    padding-left: 20pt;
    padding-right: 20pt;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700pt;
  padding-top: 80pt;
`

const LargeText = styled.h1`
  font-size: 40pt;
  margin-bottom: 10pt;
`

const PillContainer = styled.div`
  display: flex;
  margin-top: 10pt;
  margin-bottom: 40pt;
`

const VisualDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13pt;
  border: 1pt solid #e35fff;
  height: 26pt;
  width: 100pt;
  font-size: 12pt;
  margin-right: 5pt;
`

const WelcomeText = styled.p`
  margin-bottom: 60pt;
`

const LargeImage = styled.img`
  margin-top: 50pt;
  margin-bottom: 50pt;
  border: 1pt solid lightgray;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: 950px) {
    margin-top: 0;
  }
`

export default ViralgainsPage
