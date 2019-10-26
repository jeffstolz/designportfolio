import React from "react"
import styled from "styled-components"

import Airspace from "../images/ge-airspace.png"
import Search from "../images/ge-search.png"
import Layers from "../images/ge-layers.png"
import Tooltip from "../images/ge-tooltip.png"
import Weather from "../images/ge-weather.png"
import Auth from "../images/ge-auth.png"
import Collapsed from "../images/ge-collapsed.png"
import Requests from "../images/ge-requests.png"
import Compliance from "../images/ge-compliance.png"
import Draw from "../images/ge-draw.png"

import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"

const AirxosPage = () => (
  <AboutLayout>
    <SEO title="AiRXOS" />
    <OuterContainer>
      <Container>
        <LargeText>GE - AiRXOS</LargeText>
        <PillContainer>
          <ProductDesign>Product Design</ProductDesign>
          <UxDesign>UX Design</UxDesign>
        </PillContainer>
        <WelcomeText>
          My most recent project at thoughtbot has been an engagement with
          AiRXOS, a GE Venture. AiRXOS is focused on developing software
          associated with safe and efficient drone operations for first
          responder pilots and their support teams. I was brought on to lead the
          design of an application that helps pilots view and submit
          authorizations to fly in restricted airspaces. In an industry heavily
          regulated by the FAA, I was tasked with making the interface as
          intuitive as possible while still adhearing to their strict
          requirements. Extra care was taken to the increased cognitive load of
          the users, as they will often be doing so in distracting & stressful
          physical environments. We built the mobile application in React Native
          as the experience would need to be delivered on both iOS and Android.
        </WelcomeText>
        <ImageRow>
          <LargeImage src={Airspace} alt="AiRXOS Airspace" />
          <LargeImage src={Search} alt="AiRXOS Search" />
        </ImageRow>
        <ImageRow>
          <LargeImage src={Layers} alt="AiRXOS Layers" />
          <LargeImage src={Tooltip} alt="AiRXOS Tooltip" />
        </ImageRow>
        <ImageRow>
          <LargeImage src={Weather} alt="AiRXOS Weather" />
          <LargeImage src={Auth} alt="AiRXOS Authorization" />
        </ImageRow>
        <ImageRow>
          <LargeImage src={Collapsed} alt="AiRXOS Collapsed Airspace" />
          <LargeImage src={Requests} alt="AiRXOS Requests" />
        </ImageRow>
        <ImageRow>
          <LargeImage src={Compliance} alt="AiRXOS Compliance" />
          <LargeImage src={Draw} alt="AiRXOS Draw Airspace" />
        </ImageRow>
      </Container>
    </OuterContainer>
  </AboutLayout>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 100pt;
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
`

const UxDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13pt;
  border: 1pt solid #ff6f00;
  height: 26pt;
  width: 85pt;
  font-size: 12pt;
  margin-right: 5pt;
`

const WelcomeText = styled.p`
  margin-bottom: 100pt;
`

const LargeImage = styled.img`
  border: 1pt solid lightgray;
  height: 100%;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 550pt;
  margin-bottom: 80pt;
`

export default AirxosPage
