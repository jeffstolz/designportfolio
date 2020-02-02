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
import { Colors, Spacing, Typography } from "../styles/variables"

const AirxosPage = () => (
  <AboutLayout>
    <SEO title="GE AiRXOS" />
    <OuterContainer>
      <Container>
        <LargeText>GE AiRXOS</LargeText>
        <PillContainer>
          <ProductDesign>Product Design</ProductDesign>
          <UxDesign>UX Design</UxDesign>
        </PillContainer>
        <WelcomeText>
          For a six month engagement, I and two thoughtbot developers consulted
          for AiRXOS, a GE Venture. AiRXOS is focused on developing software
          associated with safe and efficient drone operations for first
          responder pilots and their support teams. I was brought on to lead the
          design of an application that helps pilots view and submit
          authorizations to fly in restricted airspaces. In an industry heavily
          regulated by the FAA, I was tasked with making the interface as
          intuitive as possible while still adhearing to their strict
          requirements. Extra care was taken to the increased cognitive load of
          the users, as they will often be doing so in distracting & stressful
          physical environments. After extensive interviews with flight
          operation teams, we worked with GE to build an MVP mobile application
          in React Native.
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

const ProductDesign = styled(Pill)`
  border-color: ${Colors.blue};
`

const UxDesign = styled(Pill)`
  border-color: ${Colors.orange};
`

const WelcomeText = styled.p``

const LargeImage = styled.img`
  width: 24em;
  object-fit: contain;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.large};
  }
`

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${Spacing.large};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
    align-items: center;
  }
`

export default AirxosPage
