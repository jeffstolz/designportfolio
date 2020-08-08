import React from "react"
import HomeLayout from "../layouts/home-layout"
import SEO from "../components/seo"
import WorkBanner from "../components/work-banner"
import FeaturedWork from "../components/featured-work"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Design Portfolio" />
    <WorkBanner />
    <FeaturedWork />
  </HomeLayout>
)

export default IndexPage
