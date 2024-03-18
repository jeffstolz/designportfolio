import React from "react"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Hometest from "../components/hometest"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hometest />
  </Layout>
)

export default IndexPage
