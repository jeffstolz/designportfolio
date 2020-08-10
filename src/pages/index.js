import React from "react"
import HomeLayout from "../layouts/home-layout"
import SEO from "../components/seo"
import WorkBanner from "../components/work-banner"
import Skills from "../components/skills"
import FeaturedWork from "../components/featured-work"
import Ethos from "../components/ethos"
import Background from "../components/background"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Design Portfolio" />
    <WorkBanner />
    <Skills />
    <FeaturedWork />
    <Ethos />
    <Background />
  </HomeLayout>
)

export default IndexPage
