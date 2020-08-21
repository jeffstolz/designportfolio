import React from "react"
import styled from "styled-components"
import FeaturedWorkCard from "./featured-work-card"
import { Spacing } from "../styles/variables"

const FeaturedWork = () => (
  <OuterContainer>
    <Container>
      <Header>Featured Work</Header>
      <FeaturedWorkCard
        previewLabels={"Product Management / SaaS Design / Ruby on Rails"}
        previewHeading={
          "Designing and Building an Online Education MVP in Six Weeks"
        }
        previewText={
          "An example around prioritizing features, mitigating assumptions, and building scalable software."
        }
        projectLink={"/theskills"}
      />
      <FeaturedWorkCard
        previewLabels={"Design Leadership / Research / Mobile Design"}
        previewHeading={
          "Redesigning a Deeply Embedded Clinical Communication Tool"
        }
        previewText={
          "Lessons learned from establishing a design culture and redesigning a product with over 92k existing users."
        }
        projectLink={"/mobile-heartbeat"}
      />
      <FeaturedWorkCard
        previewLabels={"Design Systems / Enterprise Design / React Native"}
        previewHeading={
          "Establishing a Design System for a Complex Enterprise Organization"
        }
        previewText={
          "An approach to providing structure to a rapidbly growing organization with products moving in multiple directions."
        }
        projectLink={"/airxos"}
      />
      <FeaturedWorkCard
        previewLabels={"Facilitation / Consulting / Interviewing"}
        previewHeading={
          "Breaking Down a PDS that Invalidated a Concept & Provided a Path Forward"
        }
        previewText={
          "A love letter to product design sprints and the value they bring to greenfield projects."
        }
        projectLink={"/cipherbio"}
      />
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: ${Spacing.huge} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
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
