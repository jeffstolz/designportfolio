import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/case-studies/intro"
import Experience from "../components/case-studies/experience"
import ExperienceItem from "../components/case-studies/experience-item"
import FeaturedImage from "../components/case-studies/featured-image"
import Background from "../components/case-studies/background"
import Quote from "../components/case-studies/quote"
import { Images } from "../images"

const MobileHeartbeatPage = () => (
  <Layout>
    <SEO title="Mobile Heartbeat Case Study" />
    <Intro
      company={"Mobile Heartbeat"}
      heading={"Redesigning a Deeply Embedded Clinical Communication Tool"}
      subheading={
        "Lessons learned from establishing a design culture and redesigning a product with over 79k active users."
      }
    />
    <FeaturedImage imageSrc={Images.MhOverview} />
    <Experience>
      <ExperienceItem
        imageSrc={Images.Persona}
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
        imageSrc={Images.Persona}
        heading={"Mobile Design"}
        body={"Enterprise design solutions for Android and iOS."}
      />
    </Experience>
    <Background
      overview={
        "When I was brought on to the team, Mobile Heartbeat was a clinical communication tool used daily in 92 hospitals. Although the product had a deep userbase, the company had not focused on design in it's past and end-users reported that the product had grown dated, unintuitive, and frustrating. Physicians were rejecting the application because it didn't support their specific workflow and urgent communications were a burden that slowed down urgent response times to patients."
      }
      role={
        "Led all product design efforts and managed a team of two designers."
      }
      tools={"Sketch, Zeplin, Usertesting.com"}
    />
    <Quote />
  </Layout>
)

export default MobileHeartbeatPage
