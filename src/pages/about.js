import React from "react"
import DefaultLayout from "../layouts/default-layout"
import SEO from "../components/seo"
import AboutBanner from "../components/about-banner"
import Timeline from "../components/timeline"

const AboutPage = () => (
  <DefaultLayout>
    <SEO title="About" />
    <AboutBanner />
    <Timeline />
  </DefaultLayout>
)

export default AboutPage
