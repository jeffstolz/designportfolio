import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerContainer>
      <Left>
        <Divider />
        <FancyText>
          <Greeting>Hi, I’m Jeff.</Greeting> I work with teams from the ground
          up to ideate, design, and implement software. My favorite tools are
          React and Figma. I’m a big fan of design sprints, design systems, and
          end user testing.
        </FancyText>
        <FancyText>
          I’m always interested in geeking out about travel, science fiction,
          and D&D.
        </FancyText>
        <Divider />
      </Left>
      <Right>
        <LargeText>
          PRODUCT <br />
          DESIGNER, <br />
          FRONTEND <br />
          DEVELOPER
        </LargeText>
      </Right>
    </BannerContainer>
  </Layout>
)

const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #6e55c1, #80cbe6);
  height: 400pt;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200pt;
  height: 280pt;
  margin-right: 20pt;
`

const FancyText = styled.div`
  font-family: "georgia", serif;
`

const Greeting = styled.span`
  font-weight: 800;
  font-style: italic;
`

const Right = styled.div``

const LargeText = styled.h1`
  font-size: 80pt;
  line-height: 75pt;
  margin-bottom: 0;
`

const Divider = styled.div`
  border-bottom: 1pt solid black;
`

export default IndexPage
