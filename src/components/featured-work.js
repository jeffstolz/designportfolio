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
        previewLabels={"Design Leadership / Research / Mobile Design"}
        previewHeading={
          "Redesigning a Deeply Embedded Clinical Communication Tool"
        }
        previewText={
          "Lessons learned from establishing a design culture and redesigning a product with over 79k existing users."
        }
        projectLink={"/mobile-heartbeat"}
      />
      <FeaturedWorkCard
        previewLabels={"Design Systems / Enterprise Design / React Native"}
        previewHeading={
          "Establishing a Design System for a Complex Enterprise Organization"
        }
        previewText={
          "An approach to providing structure to a rapidly growing organization with products moving in multiple directions."
        }
        projectLink={"/neocova"}
      />
      <FeaturedWorkCard
        previewLabels={"Facilitation / Consulting / Interviewing"}
        previewHeading={
          "Breaking Down a PDS that Invalidated a Concept & Provided a Path Forward"
        }
        previewText={
          "A love letter to product design sprints and the value they bring to greenfield projects."
        }
        projectLink={"/dragon"}
      />
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: ${Spacing.huge} ${Spacing.base};
  background-image: url(${Images.DevelopFeatured}),
    url(${Images.DesignFeatured});
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  background-size: 18em, 25em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
    background-size: 12em, 11.3em;
  }
`

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`

const Header = styled.h2`
  margin-bottom: ${Spacing.small};
`

export default FeaturedWork
