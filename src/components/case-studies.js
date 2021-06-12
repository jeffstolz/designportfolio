import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Images } from "../images"
import CaseStudyCard from "./case-study-card"
import { Spacing } from "../styles/variables"

const CaseStudies = () => (
  <OuterContainer id="case-studies">
    <Fade>
      <Header>Case Studies</Header>
    </Fade>
    <Container>
      <CaseStudyCard
        imageSrc={Images.AdsThumbnail}
        imageAlt={"ADS case study"}
        previewLabels={"UX Design / Design Systems / Enterprise Design"}
        previewHeading={
          "Improving speed & accuracy of quoting for enterprise salespeople"
        }
        previewText={
          "An approach to reducing cognitive load for a data-heavy process and providing structure to a rapidly growing organization."
        }
        projectLink={"/ads"}
      />
      <CaseStudyCard
        imageSrc={Images.DragonThumbnail}
        imageAlt={"Dragon Innovation case study"}
        previewLabels={"Facilitation / Consulting / Research"}
        previewHeading={
          "Breaking down a PDS that invalidated a concept & provided a path forward"
        }
        previewText={
          "A love letter to product design sprints and the value they bring to proof of concepts."
        }
        projectLink={"/dragon"}
      />
      <CaseStudyCard
        imageSrc={Images.SkillsThumbnail}
        imageAlt={"The Skills case study"}
        previewLabels={"Product Management / Visual Design / SaaS Design"}
        previewHeading={
          "Providing high school & amateur athletes with a place to learn from their idols"
        }
        previewText={
          "An example around prioritizing features, mitigating assumptions, and building an MVP within a six-week timeline."
        }
        projectLink={"/theskills"}
      />
      <CaseStudyCard
        imageSrc={Images.MhThumbnail}
        imageAlt={"Mobile Heartbeat case study"}
        previewLabels={"UX Design / Research / Mobile Design"}
        previewHeading={
          "Improving critical communications for clinicians in a hospital setting"
        }
        previewText={
          "Lessons learned from establishing a design culture and redesigning a deeply embedded clinical tool with over 79k daily users."
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

export default CaseStudies
