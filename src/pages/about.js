import React from "react"

import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"

import Timeline from "../components/timeline"

const AboutPage = () => (
  <AboutLayout>
    <SEO title="About" />
    <Timeline />
  </AboutLayout>
)

export default AboutPage
