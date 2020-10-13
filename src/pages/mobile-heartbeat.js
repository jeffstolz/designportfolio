import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/case-studies/intro"
import Experience from "../components/case-studies/experience"
import ExperienceItem from "../components/case-studies/experience-item"
import FeaturedImage from "../components/case-studies/featured-image"
import Background from "../components/case-studies/background"
import Quote from "../components/case-studies/quote"
import SectionHeader from "../components/case-studies/section-header"
import ImageRow from "../components/case-studies/image-row"
import Links from "../components/case-studies/links"
import { Images } from "../images"

const MobileHeartbeatPage = () => (
  <Layout>
    <SEO title="Mobile Heartbeat Case Study" />
    <Intro
      backgroundImage={Images.DesignCaseTwo}
      company={"Mobile Heartbeat"}
      heading={"Redesigning a Deeply Embedded Clinical Communication Tool"}
      subheading={
        "Lessons learned from establishing a design culture and redesigning a product with over 79k active users."
      }
    />
    <Experience>
      <ExperienceItem
        imageSrc={Images.Team}
        heading={"Design Leadership"}
        body={
          "Evangelizing the value of design in an organization & building a team."
        }
      />
      <ExperienceItem
        imageSrc={Images.Persona}
        heading={"Research"}
        body={
          "Partnering with clinicians to understand & solve their problems."
        }
      />
      <ExperienceItem
        imageSrc={Images.Mobile}
        heading={"Mobile Design"}
        body={"Enterprise design solutions for Android and iOS."}
      />
    </Experience>
    <FeaturedImage imageSrc={Images.MhOverview} />
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
        "When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating."
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
    <Experience>
      <ExperienceItem
        imageSrc={Images.Team}
        heading={"Communicating Value"}
        body={
          "Evangelizing the value of design in an organization & building a team."
        }
      />
      <ExperienceItem
        imageSrc={Images.Persona}
        heading={"Interviewing"}
        body={
          "Partnering with clinicians to understand & solve their problems."
        }
      />
      <ExperienceItem
        imageSrc={Images.Mobile}
        heading={"Management"}
        body={"Enterprise design solutions for Android and iOS."}
      />
    </Experience>
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
    <Experience>
      <ExperienceItem
        imageSrc={Images.Team}
        heading={"Design Leadership"}
        body={
          "Evangelizing the value of design in an organization & building a team."
        }
      />
      <ExperienceItem
        imageSrc={Images.Persona}
        heading={"Research"}
        body={
          "Partnering with clinicians to understand & solve their problems."
        }
      />
      <ExperienceItem
        imageSrc={Images.Mobile}
        heading={"Mobile Design"}
        body={"Enterprise design solutions for Android and iOS."}
      />
    </Experience>
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

export default MobileHeartbeatPage
