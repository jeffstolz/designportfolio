import React from "react"
import styled from "styled-components"
import DefaultLayout from "../layouts/default-layout"
import SEO from "../components/seo"
import { Images } from "../images";
import { Colors, Spacing, Typography } from "../styles/variables"

const AirxosPage = () => (
  <DefaultLayout>
    <SEO title="GE AiRXOS" />
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
        <LargeImage src={Images.GeAirspace} alt="AiRXOS Airspace" />
        <LargeImage src={Images.GeSearch} alt="AiRXOS Search" />
      </ImageRow>
      <ImageRow>
        <LargeImage src={Images.GeLayers} alt="AiRXOS Layers" />
        <LargeImage src={Images.GeTooltip} alt="AiRXOS Tooltip" />
      </ImageRow>
      <ImageRow>
        <LargeImage src={Images.GeWeather} alt="AiRXOS Weather" />
        <LargeImage src={Images.GeAuth} alt="AiRXOS Authorization" />
      </ImageRow>
      <ImageRow>
        <LargeImage src={Images.GeCollapsed} alt="AiRXOS Collapsed Airspace" />
        <LargeImage src={Images.GeRequests} alt="AiRXOS Requests" />
      </ImageRow>
      <ImageRow>
        <LargeImage src={Images.GeCompliance} alt="AiRXOS Compliance" />
        <LargeImage src={Images.GeDraw} alt="AiRXOS Draw Airspace" />
      </ImageRow>
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

const ProductDesign = styled(Pill)`
  border-color: ${Colors.blue};
`

const UxDesign = styled(Pill)`
  border-color: ${Colors.orange};
`

const WelcomeText = styled.p`
  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.large};
  }
`

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
    margin-top: 0;
  }
`

export default AirxosPage
