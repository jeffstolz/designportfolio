import React from "react"

import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"

import AboutBanner from "../components/about-banner"
import Timeline from "../components/timeline"

const AboutPage = () => (
  <AboutLayout>
    <SEO title="About" />
    <AboutBanner />
    <Timeline />
  </AboutLayout>
)

export default AboutPage
