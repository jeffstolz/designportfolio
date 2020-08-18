import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import FeaturedWork from "../components/featured-work"
import Ethos from "../components/ethos"
import Background from "../components/background"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Design Portfolio" />
    <Intro />
    <Skills />
    <FeaturedWork />
    <Ethos />
    <Background />
    <Contact />
  </Layout>
)

export default IndexPage
