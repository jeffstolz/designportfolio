import React from "react"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Abouttest from "./abouttest"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Abouttest />
  </Layout>
)

export default IndexPage
