import React from "react"
import styled from "styled-components"

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
          Enabling clinicians to improve patient care through accelerated
          communication and collaboration in the hospital.
        </WelcomeText>
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
  font-size: 20pt;
  line-height: 25pt;
`

export default AirxosPage
