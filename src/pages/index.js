import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import FeaturedWork from "../components/featured-work"
import Background from "../components/background"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Intro />
    <Skills />
    <FeaturedWork />
    <Background />
    <Contact />
  </Layout>
)

export default IndexPage
