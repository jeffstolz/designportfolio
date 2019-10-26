import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkBanner from "../components/work-banner"
import Thumbnails from "../components/thumbnails"

const CipherbioPage = () => (
  <Layout>
    <SEO title="CipherBio" />
    <WorkBanner />
    <Thumbnails />
  </Layout>
)

export default CipherbioPage
