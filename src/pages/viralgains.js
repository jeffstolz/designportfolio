import React from "react"
import styled from "styled-components"
import DefaultLayout from "../layouts/default-layout"
import SEO from "../components/seo"
import { Images } from "../images";
import { Colors, Spacing, Typography } from "../styles/variables"

const ViralgainsPage = () => (
  <DefaultLayout>
    <SEO title="ViralGains" />
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
      <LargeImage src={Images.ViralgainsOne} alt="Viralgains Creative Builder" />
      <LargeImage src={Images.ViralgainsTwo} alt="Viralgains Campaign Manager" />
      <LargeImage src={Images.ViralgainsThree} alt="Viralgains Dashboard" />
      <LargeImage src={Images.ViralgainsFour} alt="Viralgains Dashboard" />
  </DefaultLayout>
)

const LargeText = styled.h1`
  font-size: ${Typography.headingFontSize};
  margin-top: ${Spacing.base};
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

  @media (max-width: ${Spacing.breakPoint}) {
    width: ${Spacing.pillMobileWidth};
    font-size: ${Typography.xSmallFontSize};
  }
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
