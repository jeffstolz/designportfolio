import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import FeaturedWorkCard from "./featured-work-card"
import { Spacing } from "../styles/variables"
import Fade from "react-reveal/Fade"

const FeaturedWork = () => (
  <OuterContainer>
    <Container>
      <Fade>
        <Header>Featured Work</Header>
      </Fade>
      <FeaturedWorkCard
        imageSrc={Images.SkillsThumbnail}
        imageAlt={"The Skills case study thumbnail image"}
        previewLabels={"Product Management / SaaS Design / Ruby on Rails"}
        previewHeading={
          "Designing and Building an Online Education MVP in Six Weeks"
        }
        previewText={
          "An example around prioritizing features, mitigating assumptions, and building scalable software in a pinch."
        }
        projectLink={"/theskills"}
      />
      <FeaturedWorkCard
        imageSrc={Images.DragonThumbnail}
        imageAlt={"Dragon Innovation case study thumbnail image"}
        previewLabels={"Facilitation / Consulting / Interviewing"}
        previewHeading={
          "Breaking Down a PDS that Invalidated a Concept & Provided a Path Forward"
        }
        previewText={
          "A love letter to product design sprints and the value they bring to proof of concepts."
        }
        projectLink={"/dragon"}
      />
      <FeaturedWorkCard
        imageSrc={Images.NeocovaThumbnail}
        imageAlt={"Neocova Design System case study thumbnail image"}
        previewLabels={"Design Systems / Enterprise Design / React"}
        previewHeading={
          "Establishing a Design System for a Complex Enterprise Organization"
        }
        previewText={
          "An approach to providing structure for a rapidly growing organization with products moving in multiple directions."
        }
        projectLink={"/neocova"}
      />
      <FeaturedWorkCard
        imageSrc={Images.MhThumbnail}
        imageAlt={"Mobile Heartbeat case study thumbnail image"}
        previewLabels={"Design Leadership / Research / Mobile Design"}
        previewHeading={
          "Redesigning a Deeply Embedded Clinical Communication Tool"
        }
        previewText={
          "Lessons learned from establishing a design culture and redesigning a product with over 79k existing users."
        }
        projectLink={"/mobile-heartbeat"}
      />
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: ${Spacing.xxHuge} 12%;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.large} 8%;
  }
`

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`

const Header = styled.h2`
  margin-bottom: 1.5em;
`

export default FeaturedWork
