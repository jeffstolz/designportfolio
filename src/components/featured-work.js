import React from "react"
import styled from "styled-components"
import FeaturedWorkCard from "./featured-work-card"
import { Spacing } from "../styles/variables"

const FeaturedWork = () => (
  <OuterContainer>
    <Container>
      <Header>Featured Work</Header>
      <FeaturedWorkCard
        previewLabels={"Product Design / Research / Mobile Design"}
        previewHeading={
          "Redesigning a Deeply Embedded Clinical Communication Tool"
        }
        previewText={
          "Lessons learned from establishing a design culture and redesigning a product with over 92k existing users."
        }
        projectLink={"/mobile-heartbeat"}
      />
      <FeaturedWorkCard
        previewLabels={"Facilitation / Product Design / Ruby on Rails"}
        previewHeading={
          "Designing and Building an Online Education MVP in Six Weeks"
        }
        previewText={
          "An example around prioritizing features, mitigating assumptions, and building scalable software."
        }
        projectLink={"/theskills"}
      />
      <FeaturedWorkCard
        previewLabels={"Design System / Mobile Design / React Native"}
        previewHeading={
          "Establishing a Design System for a Complex Enterprise Organization"
        }
        previewText={
          "An approach to providing structure for a fast-moving company with multiple products growing in different directions."
        }
        projectLink={"/airxos"}
      />
      <FeaturedWorkCard
        previewLabels={"Facilitation / Product Design"}
        previewHeading={
          "Breaking Down a PDS that Invalidated a Product and Provided a New Path Forward"
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
`

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  width: ${Spacing.containerWidth};
`

const Header = styled.h2`
  margin-bottom: ${Spacing.base};
`

export default FeaturedWork
