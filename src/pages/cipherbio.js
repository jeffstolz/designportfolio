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
import { Colors, Spacing, Typography } from "../styles/variables"

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
  margin-bottom: ${Spacing.pageBottom};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-right: ${Spacing.base};
    padding-left: ${Spacing.base};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
  padding-top: ${Spacing.xHuge};
`

const LargeText = styled.h1`
  font-size: ${Typography.headingFontSize};
  margin-bottom: ${Spacing.xSmall};
`

const PillContainer = styled.div`
  display: flex;
  margin-top: ${Spacing.small};
  margin-bottom: ${Spacing.medium};
`

const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Spacing.pillHeight};
  width: ${Spacing.pillWidth};
  color: ${Colors.black};
  border-radius: ${Spacing.pillRadius};
  border: 1pt solid;
  margin-right: 0.5em;
  font-size: ${Typography.smallFontSize};

  @media (max-width: ${Spacing.breakPoint}) {
    width: ${Spacing.pillMobileWidth};
    font-size: ${Typography.xSmallFontSize};
  }
`

const ProductDesign = styled(Pill)`
  border-color: ${Colors.blue};
`

const WelcomeText = styled.p``

const LargeImage = styled.img`
  width: 24em;
  object-fit: contain;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.large};
  }
`

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${Spacing.large};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
    align-items: center;
  }
`

export default CipherbioPage
