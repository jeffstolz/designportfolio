import React from "react"
import styled from "styled-components"

import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"

import Splash from "../images/airwatch-splash.png"
import Welcome from "../images/airwatch-welcome.png"
import Preflight from "../images/airwatch-preflight.png"
import Disconnected from "../images/airwatch-disconnected.png"
import AirMap from "../images/airwatch-map.png"
import AirVideo from "../images/airwatch-video.png"

const AirwatchPage = () => (
  <AboutLayout>
    <SEO title="Airwatch" />
    <OuterContainer>
      <Container>
        <LargeText>AirWatch</LargeText>
        <PillContainer>
          <ProductDesign>Product Design</ProductDesign>
        </PillContainer>
        <WelcomeText>
          AirWatch was a small proof of concept I created for AiRXOS with two
          developers at thoughtbot. Our goal was to rapidly prototype and test
          the viability of a video / telemetry application for first responder
          drone pilots to share with their support team. We built our
          requirements around the results of design sprint activities that
          included interviews with experienced drone pilots that fit our
          persona. It took us about a month to design and build the tool in
          React Native.
        </WelcomeText>
        <LargeImage src={Splash} alt="Airwatch Splash" />
        <LargeImage src={Welcome} alt="Airwatch Welcome" />
        <LargeImage src={Preflight} alt="Airwatch Preflight" />
        <LargeImage src={Disconnected} alt="Airwatch Disconnected" />
        <LargeImage src={AirMap} alt="Airwatch Map" />
        <LargeImage src={AirVideo} alt="Airwatch Video" />
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

const ProductDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13pt;
  border: 1pt solid #00b8ff;
  height: 26pt;
  width: 108pt;
  font-size: 12pt;
  margin-right: 5pt;

  @media (max-width: 950px) {
    width: 85pt;
    font-size: 9pt;
  }
`

const LargeImage = styled.img`
  border: 1pt solid lightgray;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 50pt;
`

const WelcomeText = styled.p`
  margin-bottom: 90pt;
`

export default AirwatchPage
