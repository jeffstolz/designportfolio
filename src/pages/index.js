import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkBanner from "../components/work-banner"
import Thumbnails from "../components/thumbnails"

const IndexPage = () => (
  <Layout>
    <SEO title="Design Portfolio" />
    <WorkBanner />
    <Thumbnails />
  </Layout>
)

export default IndexPage
