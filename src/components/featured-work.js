import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Images } from "../images"
import FeaturedWorkCard from "./featured-work-card"
import { Spacing } from "../styles/variables"

const FeaturedWork = () => (
  <OuterContainer>
    <Fade>
      <Header>Case Studies</Header>
    </Fade>
    <Container>
      <FeaturedWorkCard
        imageSrc={Images.SkillsThumbnail}
        imageAlt={"The Skills case study"}
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
        imageAlt={"Dragon Innovation case study"}
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
        imageAlt={"Neocova Design System case study"}
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
        imageAlt={"Mobile Heartbeat case study"}
        previewLabels={"Design Leadership / Research / Mobile Design"}
        previewHeading={
          "Redesigning a Deeply Embedded Clinical Communication Tool"
        }
        previewText={
          "Lessons learned from establishing a design culture and redesigning an enterprise product with over 79k daily users."
        }
        projectLink={"/mobile-heartbeat"}
      />
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${Spacing.xxHuge} ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.sectionPaddingMobile};
  }
`

const Header = styled.h2`
  margin-bottom: ${Spacing.xBase};
`

const Container = styled.ul`
  max-width: 62em;

  @media (max-width: ${Spacing.breakPoint}) {
    max-width: 25em;
  }
`

export default FeaturedWork
