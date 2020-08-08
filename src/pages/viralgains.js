import React from "react"

import DefaultLayout from "../layouts/default-layout"
import CaseStudyHeader from "../components/case-study-header"
import CaseStudyImage from "../components/case-study-image"
import Label from "../components/label"

import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const ViralgainsPage = () => (
  <DefaultLayout>
    <CaseStudyHeader title={"ViralGains"}>
      <Label borderColor={Colors.violet} label={"Visual Design"} />
    </CaseStudyHeader>
    <p>
      As a consultant for thoughtbot, I worked with another designer to lead the
      UI redesign and implementation for Viralgains, an advertising journey
      management platform. We began with initial design research such as mood
      boards and competitor analysis until we agreed upon a specific aesthetic.
      We created a sleek, dark tone theme that appealed to the advertising
      manager persona and matched the company's current brand. We then
      implemented the designs in React, working in collaboration with their
      in-house development team.
    </p>
    <CaseStudyImage
      marginBottom={Spacing.xxxSmall}
      imageSrc={Images.ViralgainsOne}
      imageAlt="Viralgains Creative Builder"
      boxShadow={Colors.lightShadow}
    />
    <CaseStudyImage
      marginBottom={Spacing.xxxSmall}
      imageSrc={Images.ViralgainsTwo}
      imageAlt="Viralgains Campaign Manager"
      boxShadow={Colors.lightShadow}
    />
    <CaseStudyImage
      marginBottom={Spacing.xxxSmall}
      imageSrc={Images.ViralgainsThree}
      imageAlt="Viralgains Dashboard"
      boxShadow={Colors.lightShadow}
    />
    <CaseStudyImage
      marginBottom={Spacing.xxxSmall}
      imageSrc={Images.ViralgainsFour}
      imageAlt="Viralgains Dashboard"
      boxShadow={Colors.lightShadow}
    />
  </DefaultLayout>
)

export default ViralgainsPage
