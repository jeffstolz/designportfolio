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

const Startup = () => (
  <Layout>
    <Seo title="Startup MVP" />
    <Container>
      <Menutest3 />
      <Main id="top">
        <Header>
          <HeaderTitle>Startup MVP</HeaderTitle>
          <HeaderDescription>
            Improving speed & accuracy of quoting for enterprise salespeople. An
            approach to reducing cognitive load for a data-heavy process and
            providing structure to a rapidly growing organization.
          </HeaderDescription>
        </Header>
        <IntroImage
          src={Images.StartupBg}
          alt="The Skills MVP over a textured background"
        />
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
          <Title>The Challenge</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <LightSection>
          <Title>Product-Market Fit</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
        <DarkSection>
          <Title>Focusing & Prioritizing</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <LightSection>
          <Title>Low-Fi Explorations</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
        <DarkSection>
          <Title>Visual Design</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <LightSection>
          <Title>Building the MVP</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
        <DarkSection>
          <Title>Testing Viability</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </DarkSection>
        <LightSection>
          <Title>Learnings</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done, Design Sprints, and Atomic Design Systems.
          </Description>
        </LightSection>
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
              <BackTop>Back to top</BackTop>
            </ScrollLink>
          </LinkWrapper>
          <LinkWrapper>
            <PreUpNext>Up next:</PreUpNext>
            <UpNext to={"../personalization"}>User personalization</UpNext>
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

export default Startup
