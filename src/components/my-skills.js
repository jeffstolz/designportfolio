import React from "react"
import styled from "styled-components"
import SkillsCard from "./skills-card"
import { Colors, Spacing } from "../styles/variables"

const MySkills = () => (
  <OuterContainer>
    <Container>
      <DesignContainer>
        <div>
          <Header>How I Design</Header>
          <CardList>
            <SkillsCard
              heading={"Jobs-To-Be-Done"}
              text={
                "Ensuring we're solving the right problem is my first step to every project, and this mental model is a great way to frame that."
              }
            />
            <SkillsCard
              heading={"Atomic Design Systems"}
              text={
                "Always a fan of this methodology for larger projects - it works especially well with React components."
              }
            />
            <SkillsCard
              heading={"GV Design Sprints"}
              text={
                "An excellent guideline, although I've found that no two sprints turn out the same - each customer and problem requires a bit of tweaking to the structure."
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
                "While I have built web apps in Rails & Elm, I prefer React for it's component hierarchy that plays well with atomic design systems and React Native."
              }
            />
            <SkillsCard
              heading={"React Native"}
              text={
                "On the mobile side, I prefer RN for cross-platform development - a single repo, and single team, makes for faster deliverables and a more in-sync dev team."
              }
            />
            <SkillsCard
              heading={"Accessibility Always"}
              text={
                "I see accessibile design & development as a responsibility, not an afterthought. I'm a big fan of the A11y Project."
              }
            />
          </CardList>
        </div>
      </DevelopContainer>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${Colors.cyan};
  padding: ${Spacing.huge} ${Spacing.base};
`

const Container = styled.div`
  width: ${Spacing.largeContainerWidth};
`

const DesignContainer = styled.div`
  padding-bottom: ${Spacing.xHuge};
`

const DevelopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Header = styled.h2`
  margin-bottom: ${Spacing.small};
`

const CardList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding-left: 0;
  }
`

export default MySkills
