import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Container>
      <LargeText>Thank you</LargeText>
      <TextContainer>
        <FancyText>
          I appreciate you taking the time to review my portfolio. I am always
          looking for new opportunities to create, share, and grow as a
          designer. I look forward to hearing from you.
        </FancyText>
      </TextContainer>
    </Container>
    <SEO title="Contact" />
  </Layout>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 520pt;
  margin-bottom: 40pt;
`

const LargeText = styled.h1`
  font-size: 80pt;
  line-height: 75pt;
  text-transform: uppercase;
  margin-bottom: 30pt;
`

const TextContainer = styled.div`
  width: 450pt;
`

const FancyText = styled.div`
  font-family: "georgia", serif;
`

export default ContactPage
