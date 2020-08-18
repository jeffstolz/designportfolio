import React from "react"
import Layout from "../layouts/layout"
import styled from "styled-components"

import { Spacing } from "../styles/variables"

const MobileHeartbeatPage = () => (
  <Layout>
    <Container></Container>
  </Layout>
)

const Container = styled.div`
  margin-bottom: ${Spacing.base};
`

export default MobileHeartbeatPage
