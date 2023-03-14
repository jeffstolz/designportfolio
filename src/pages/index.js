import React from "react"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Intro from "../components/intro"
import Skills from "../components/skills"
import CaseStudies from "../components/case-studies"
import Background from "../components/background"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <Navbar />
    <Intro />
    <Skills />
    <Background />
    <CaseStudies />
    <Contact />
  </Layout>
)

export default IndexPage
