import React from "react"
import styled from "styled-components"
import SkillsCard from "./skills-card"
import { Colors, Spacing } from "../styles/variables"

const MySkills = () => (
  <OuterContainer>
    <Container>
      <h2>How I like to Design</h2>
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
        <SkillsCard
          heading={"Frequent / Informal User Testing"}
          text={
            "Time and budget is often limited on projects, and tend to choose quick & dirty user testing techniques for easier customer buy-in and increased frequency."
          }
        />
        <SkillsCard
          heading={"Figma"}
          text={
            "Ah, the prototyping tool wars! I don't have strong preferences here, but I prefer Figma for being cloud-based and platform agnostic. Ask me again in a week."
          }
        />
      </CardList>
    </Container>
    <Container>
      <h2>How I like to Develop</h2>
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
          heading={"Styled Components"}
          text={
            "I hold this opinion lightly, but I tend to use styled components for their readable markup and scoped styling."
          }
        />
        <SkillsCard
          heading={"Accessibility Always"}
          text={
            "I see accessibile design & development as a responsibility, not an afterthought. I'm a big fan of the A11y Project."
          }
        />
        <SkillsCard
          heading={"Ship Early / Ship Often"}
          text={
            "I prefer trusting dev environments that aren't bogged down by overly controlling code review policies & CI. Balance is key."
          }
        />
      </CardList>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  padding: ${Spacing.base};
`

const Container = styled.div`
  width: 45%;
`

const CardList = styled.ul`
  list-style-type: none;
  margin: 0;
`

export default MySkills
