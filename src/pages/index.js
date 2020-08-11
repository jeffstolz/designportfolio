import React from "react"
import HomeLayout from "../layouts/home-layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import FeaturedWork from "../components/featured-work"
import Ethos from "../components/ethos"
import Background from "../components/background"
import Contact from "../components/contact"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Design Portfolio" />
    <Intro />
    <Skills />
    <FeaturedWork />
    <Ethos />
    <Background />
    <Contact />
  </HomeLayout>
)

export default IndexPage
