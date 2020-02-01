import React from "react"
import styled from "styled-components"

import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"

import Blog from "../images/cipherbio-blog.png"
import BlogArticle from "../images/cipherbio-blog-article.png"
import Article from "../images/cipherbio-article.png"
import Archives from "../images/cipherbio-archives.png"
import Community from "../images/cipherbio-community.png"
import Company from "../images/cipherbio-company.jpg"

const CipherbioPage = () => (
  <AboutLayout>
    <SEO title="CipherBio" />
    <OuterContainer>
      <Container>
        <LargeText>CipherBio</LargeText>
        <PillContainer>
          <ProductDesign>Product Design</ProductDesign>
        </PillContainer>
        <WelcomeText>
          In February 2019, I and another thoughtbot designer led a design
          sprint for CipherBio to determine how they could provide value to
          their users with a native mobile application. CipherBio is an
          information and networking platform for investors in the life sciences
          industry. During our discovery research and interviews, we learned
          that users needed a place to consume information about acquisitions
          and breakthroughs specific to the industry. We prototyped a mobile
          tool where investors could consume this information in a clean &
          concise mobile format. Ultimately, we ended up disproving the concept
          after user testing our prototype, and decided to move in a different
          direction with the customer. This is a great example of the value of
          design sprints, as only two weeks of effort was dedicated to this
          project before learning this key insight.
        </WelcomeText>
        <ImageRow>
          <LargeImage src={Blog} alt="CipherBio Blog" />
          <LargeImage src={BlogArticle} alt="CipherBio Blog Article" />
        </ImageRow>
        <ImageRow>
          <LargeImage src={Article} alt="CipherBio Article" />
          <LargeImage src={Archives} alt="CipherBio Archives" />
        </ImageRow>
        <ImageRow>
          <LargeImage src={Community} alt="CipherBio Community" />
          <LargeImage src={Company} alt="CipherBio Company" />
        </ImageRow>
      </Container>
    </OuterContainer>
  </AboutLayout>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 100pt;

  @media (max-width: 950px) {
    padding-left: 20pt;
    padding-right: 20pt;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700pt;
  padding-top: 80pt;
`

const LargeText = styled.h1`
  font-size: 40pt;
  margin-bottom: 10pt;
`

const PillContainer = styled.div`
  display: flex;
  margin-top: 10pt;
  margin-bottom: 40pt;
`

const ProductDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13pt;
  border: 1pt solid #00b8ff;
  height: 26pt;
  width: 108pt;
  font-size: 12pt;
  margin-right: 5pt;

  @media (max-width: 950px) {
    width: 85pt;
    font-size: 9pt;
  }
`

const WelcomeText = styled.p`
  margin-bottom: 100pt;
`

const LargeImage = styled.img`
  border: 1pt solid lightgray;
  height: 100%;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: 950px) {
    margin-bottom: 50pt;
    height: 600pt;
  }
`

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 550pt;
  margin-bottom: 80pt;

  @media (max-width: 950px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    margin-bottom: 0;
  }
`

export default CipherbioPage
