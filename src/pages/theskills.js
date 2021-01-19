import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/case-studies/intro"
import Experience from "../components/case-studies/experience"
import FeaturedImage from "../components/case-studies/featured-image"
import Background from "../components/case-studies/background"
import Quote from "../components/case-studies/quote"
import SectionHeader from "../components/case-studies/section-header"
import ImageRow from "../components/case-studies/image-row"
import Links from "../components/case-studies/links"
import { Images } from "../images"

const TheSkillsPage = () => (
  <Layout>
    <SEO title="The Skills Case Study" />
    <Intro
      heading={"Designing and Building an Online Education MVP in Six Weeks"}
      subheading={
        "An example around prioritizing features, mitigating assumptions, and building scalable software in a pinch."
      }
      imageSrc={Images.MhOverview}
      imageAlt={"Mobile Heartbeat design solutions on mobile and web"}
    />
    <Background
      overview={
        "When I was brought on to the team in 2017, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating. Physicians were rejecting the application because it didn't support their specific workflow and urgent communications were a burden."
      }
      role={
        "Led all product design efforts and managed a team of two designers."
      }
      tools={"Sketch, Zeplin, Usertesting.com"}
    />
    <Quote
      quote={
        "When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase."
      }
      source={"Someone Special"}
    />
    <SectionHeader
      heading="Determining the Problem"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <FeaturedImage imageSrc={Images.MhDiscovery} />
    <SectionHeader
      heading="Building a Team"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <Experience
      headingOne="Communicating value"
      descriptionOne="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
      headingTwo="Interviewing"
      descriptionTwo="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
      headingThree="Management"
      descriptionThree="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
    />
    <SectionHeader
      heading="Evangelizing User Empathy"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <FeaturedImage imageSrc={Images.MhPersona} />
    <SectionHeader
      heading="Establishing a Design Process"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <FeaturedImage imageSrc={Images.MhDesignProcessSketch} />
    <FeaturedImage imageSrc={Images.MhWireframe} />
    <SectionHeader
      heading="Damming the Waterfall"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <SectionHeader
      heading="Outcomes"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <ImageRow
      imageSrcOne={Images.MhSolutionOne}
      imageSrcTwo={Images.MhSolutionTwo}
    />
    <ImageRow
      imageSrcOne={Images.MhSolutionThree}
      imageSrcTwo={Images.MhSolutionFour}
    />
    <ImageRow
      imageSrcOne={Images.MhSolutionFive}
      imageSrcTwo={Images.MhSolutionSix}
    />
    <Links
      linkSrcOne={"/mobile-heartbeat"}
      linkTitleOne="Designing and Building an Online Education MVP in Six Weeks"
      linkSrcTwo={"/mobile-heartbeat"}
      linkTitleTwo="Establishing a Design System for a Complex Enterprise Organization"
      linkSrcThree={"/mobile-heartbeat"}
      linkTitleThree="Breaking Down a PDS that Invalidated a Concept & Provided a Path Forward"
    />
  </Layout>
)

export default TheSkillsPage
