import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/case-studies/intro"
import Blocks from "../components/case-studies/blocks"
import FeaturedImage from "../components/case-studies/featured-image"
import Background from "../components/case-studies/background"
import Quote from "../components/case-studies/quote"
import SectionHeader from "../components/case-studies/section-header"
import Footer from "../components/case-studies/footer"
import { Images } from "../images"
import { redHeading, blueHeading } from "../components/themes"

const MobileHeartbeatPage = () => (
  <Layout>
    <SEO title="Mobile Heartbeat Case Study" />
    <Intro
      heading={"Redesigning a Deeply Embedded Clinical Communication Tool"}
      subheading={
        "Lessons learned from establishing a design culture and redesigning an enterprise product with over 79k daily users."
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
    <Blocks
      theme={blueHeading}
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
    <Blocks
      theme={redHeading}
      headingOne="Communicating value"
      descriptionOne="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
      headingTwo="Interviewing"
      descriptionTwo="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
      headingThree="Management"
      descriptionThree="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
    />
    <SectionHeader
      heading="Outcomes"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <SectionHeader
      heading="Learnings"
      content="When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
    />
    <Blocks
      theme={blueHeading}
      headingOne="Communicating value"
      descriptionOne="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
      headingTwo="Interviewing"
      descriptionTwo="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
      headingThree="Management"
      descriptionThree="Evangelizing the value of design in an organization & building a team. Evangelizing the value of design in an organization & building a team."
    />
    <Footer pageLink={"/#case-studies"} />
  </Layout>
)

export default MobileHeartbeatPage
