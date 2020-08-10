import React from "react"
import styled from "styled-components"
import SkillsCard from "./skills-card"
import { Colors, Spacing } from "../styles/variables"

const Skills = () => (
  <OuterContainer>
    <Container>
      <DesignContainer>
        <div>
          <Header>How I Design</Header>
          <CardList>
            <SkillsCard
              heading={"Jobs-To-Be-Done"}
              text={
                "Ensuring we're solving the right problem is my first step to every project."
              }
            />
            <SkillsCard
              heading={"Personas"}
              text={
                "They can be rough, but ensuring we always maintain user context is crucial to success."
              }
            />
            <SkillsCard
              heading={"GV Design Sprints"}
              text={
                "An excellent guideline, although I've found that no two sprints are run exactly the same."
              }
            />
            <SkillsCard
              heading={"Atomic Design Systems"}
              text={
                "Always a fan of this methodology for larger projects - especially when paired with React."
              }
            />
            <SkillsCard
              heading={"Figma"}
              text={
                "I'll work with anything, but I prefer Figma for being cloud-based & platform agnostic."
              }
            />
            <SkillsCard
              heading={"Informal User Testing"}
              text={
                "Getting buy-in can be hard but validation is crucial - I opt for frequency over formality."
              }
            />
          </CardList>
        </div>
      </DesignContainer>
      <DevelopContainer>
        <div>
          <Header>How I Develop</Header>
          <CardList>
            <SkillsCard
              heading={"React"}
              text={
                "While I've worked in Rails & Elm before, I prefer React for it's component hierarchy."
              }
            />
            <SkillsCard
              heading={"React Native"}
              text={
                "For cross-platform apps, I find a single repo & team makes for smoother deliverables."
              }
            />
            <SkillsCard
              heading={"Accessibility Always"}
              text={
                "I see accessibile design & development as a responsibility, not an afterthought."
              }
            />
            <SkillsCard
              heading={"Ship Early & Often"}
              text={
                "Especially for MVPs, overbearing code review policies & CI can often hurt more than help."
              }
            />
            <SkillsCard
              heading={"Concise Pull Requests"}
              text={
                "I prefer to feature branch and keep my PRs focused & squashed into single commits."
              }
            />
            <SkillsCard
              heading={"Prioritize Mobile"}
              text={
                "Many users only have a mobile device to access the internet - let's keep them in mind."
              }
            />
          </CardList>
        </div>
      </DevelopContainer>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${Colors.cyan};
  padding: ${Spacing.huge} ${Spacing.base};
`

const Container = styled.div`
  width: ${Spacing.largeContainerWidth};
`

const DesignContainer = styled.div`
  padding-bottom: ${Spacing.large};
`

const DevelopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Header = styled.h2`
  margin-bottom: ${Spacing.small};
`

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding-left: ${Spacing.base};
  max-width: 55em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding-left: 0;
  }
`

export default Skills
