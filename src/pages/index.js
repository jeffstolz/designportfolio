import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Thumbnails from "../components/thumbnails"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Thumbnails />
  </Layout>
)

export default IndexPage
