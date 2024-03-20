import React from "react"
import styled from "styled-components"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Menutest3 from "../components/menutest3"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import { FaArrowUp, FaArrowRight } from "react-icons/fa"
import { Images } from "../images"
import { Typography } from "../styles/variables"

const Personalization = () => (
  <Layout>
    <Seo title="User Personalization" />
    <Container>
      <Menutest3 />
      <Main id="top">
        <Header>
          <HeaderTitle>User Personalization</HeaderTitle>
          <HeaderDescription>
            Improving speed & accuracy of quoting for enterprise salespeople. An
            approach to reducing cognitive load for a data-heavy process and
            providing structure to a rapidly growing organization.
          </HeaderDescription>
        </Header>
        <IntroImage src={Images.AdsBackground} alt="Ads" />
        <LightSection>
          <Title>My Role</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
        <DarkSection>
          <Title>The Problem</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <LightSection>
          <Title>Discovery</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
        <DarkSection>
          <Title>Early Explorations</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <LightSection>
          <Title>Designing with Users</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
        <DarkSection>
          <Title>One size does not fit all</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <LightSection>
          <Title>Measuring success</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
        <DarkSection>
          <Title>Learnings</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <Footer>
          <LinkWrapper>
            <FaArrowUp style={{ color: "#ef5350" }} />
            <ScrollLink
              activeClass="active"
              to={"top"}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <BackTop>Back to Top</BackTop>
            </ScrollLink>
          </LinkWrapper>
          <LinkWrapper>
            <PreUpNext>Up Next:</PreUpNext>
            <UpNext to={"../platform"}>Unified platform strategy</UpNext>
            <FaArrowRight style={{ color: "#ef5350" }} />
          </LinkWrapper>
        </Footer>
      </Main>
    </Container>
  </Layout>
)

const Container = styled.div`
  display: flex;
  margin-bottom: 80px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Main = styled.section`
  width: 1200px;
  margin-right: 50px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #1a1e23;
  padding: 200px;
`

const HeaderTitle = styled.h1`
  color: #f3f5f6;
  font-size: 55px;
  font-family: ${Typography.headingFontFamilyAlt};
  font-weight: 400;
  padding-bottom: 25px;
`

const HeaderDescription = styled.p`
  color: #b5b5b5;
  font-size: 20px;
  font-weight: 300;
  font-family: Georgia, serif;
  max-width: 650px;
`

const IntroImage = styled.img`
  width: 1200px;
  height: 600px;
`

const LightSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 200px;
`

const DarkSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f5f8f9;
  padding: 200px;
`

const Title = styled.h2`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 40px;
  color: #252b33;
  padding-bottom: 25px;
  font-weight: 300;
`

const Description = styled.p`
  font-family: Georgia, serif;
  font-size: 20px;
  color: #474d55;
  max-width: 650px;
  padding-bottom: 25px;
`

const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #1a1e23;
  padding: 50px;
`

const BackTop = styled(Link)`
  padding-left: 10px;
  color: #ef5350;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  &:hover {
    cursor: pointer;
    color: #ef5350;
    text-decoration: underline;
  }
`

const UpNext = styled(Link)`
  padding-right: 10px;
  color: #ef5350;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  &:hover {
    cursor: pointer;
    color: #ef5350;
    text-decoration: underline;
  }
`

const PreUpNext = styled.p`
  padding-right: 20px;
  color: #b5b5b5;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

export default Personalization
