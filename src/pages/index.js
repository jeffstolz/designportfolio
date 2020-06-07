import React from "react"
import HomeLayout from "../layouts/home-layout"
import SEO from "../components/seo"
import WorkBanner from "../components/work-banner"
import Thumbnails from "../components/thumbnails"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Design Portfolio" />
    <WorkBanner />
    <Thumbnails />
  </HomeLayout>
)

export default IndexPage
