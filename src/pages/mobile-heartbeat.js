import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/case-studies/intro"
import Experience from "../components/case-studies/experience"
import ExperienceItem from "../components/case-studies/experience-item"
import { Images } from "../images"

const MobileHeartbeatPage = () => (
  <Layout>
    <SEO title="Mobile Heartbeat Case Study" />
    <Intro
      company={"Mobile Heartbeat"}
      heading={"Redesigning a Deeply Embedded Clinical Communication Tool"}
      subheading={
        "Lessons learned from establishing a design culture and redesigning a product with over 92k existing users."
      }
    />
    <Experience>
      <ExperienceItem
        imageSrc={Images.Persona}
        heading={"Design Leadership"}
        body={
          "Lessons learned from establishing a design culture and redesigning a product with over 92k existing users."
        }
      />
      <ExperienceItem
        imageSrc={Images.Persona}
        heading={"Research"}
        body={
          "Lessons learned from establishing a design culture and redesigning a product with over 92k existing users."
        }
      />
      <ExperienceItem
        imageSrc={Images.Persona}
        heading={"Mobile Design"}
        body={
          "Lessons learned from establishing a design culture and redesigning a product with over 92k existing users."
        }
      />
    </Experience>
  </Layout>
)

export default MobileHeartbeatPage
