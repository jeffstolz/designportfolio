import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkBanner from "../components/work-banner"
import Thumbnails from "../components/thumbnails"

const ArcadeChessPage = () => (
  <Layout>
    <SEO title="ArcadeChess" />
    <WorkBanner />
    <Thumbnails />
  </Layout>
)

export default ArcadeChessPage
