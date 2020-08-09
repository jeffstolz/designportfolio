import React from "react"
import HomeLayout from "../layouts/home-layout"
import SEO from "../components/seo"
import WorkBanner from "../components/work-banner"
import MySkills from "../components/my-skills"
import FeaturedWork from "../components/featured-work"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Design Portfolio" />
    <WorkBanner />
    <MySkills />
    <FeaturedWork />
  </HomeLayout>
)

export default IndexPage
