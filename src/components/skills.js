import React from "react"
import styled from "styled-components"
import SkillsCard from "./skills-card"
import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const Skills = () => (
  <OuterContainer id="skills">
    <BackgroundOverlay>
      <Container>
        <DesignContainer>
          <div>
            <Header>How I Design</Header>
            <CardList>
              <SkillsCard
                imageSrc={Images.Jtbd}
                imageAlt={"Icon of a whiteboard with sections of writing"}
                heading={"Jobs-To-Be-Done"}
                text={
                  "Ensuring we're solving the right problems, for the right people, is my first step to every project."
                }
              />
              <SkillsCard
                imageSrc={Images.Persona}
                imageAlt={"Icon of a user persona"}
                heading={"Personas"}
                text={
                  "I tend to blend these with JTBD to ensure we maintain user empathy throughout the project."
                }
              />
              <SkillsCard
                imageSrc={Images.Pds}
                imageAlt={"Icon of a user journey diagram"}
                heading={"GV Design Sprints"}
                text={
                  "An excellent guideline, although I've written about how sprints never quite go as planned."
                }
              />
              <SkillsCard
                imageSrc={Images.Atomic}
                imageAlt={"Icon of three atoms linked together"}
                heading={"Atomic Design Systems"}
                text={
                  "Always a fan of this methodology for larger projects, especially when paired with React."
                }
              />
              <SkillsCard
                imageSrc={Images.Figma}
                imageAlt={"Figma logo"}
                heading={"Figma"}
                text={
                  "I'll work with anything, but I prefer Figma for it's cloud-based & platform agnostic architecture."
                }
              />
              <SkillsCard
                imageSrc={Images.Interview}
                imageAlt={
                  "Icon of two users with a shared chat bubble above them"
                }
                heading={"Informal User Testing"}
                text={
                  "Stakeholder buy-in can be hard but validation is crucial. I opt for frequency over formality."
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
                imageSrc={Images.React}
                imageAlt={"React Logo"}
                heading={"React"}
                text={
                  "I prefer React for it's component hierarchy. This repo is a good example of how I code."
                }
              />
              <SkillsCard
                imageSrc={Images.React}
                imageAlt={"React Native Logo"}
                heading={"React Native"}
                text={
                  "For cross-platform apps, I find a single repo & team makes for smoother deliverables."
                }
              />
              <SkillsCard
                imageSrc={Images.A11y}
                imageAlt={"The A11y Project Logo"}
                heading={"Accessibility Always"}
                text={
                  "I see accessibile design & development as a responsibility. I'm a big fan of the A11y Project."
                }
              />
              <SkillsCard
                imageSrc={Images.Ship}
                imageAlt={"Icon of a rocket ship"}
                heading={"Ship Early & Often"}
                text={
                  "Especially for MVPs, overbearing code review policies & CI can often hurt more than help."
                }
              />
              <SkillsCard
                imageSrc={Images.Github}
                imageAlt={"Github Logo"}
                heading={"Concise Pull Requests"}
                text={
                  "I prefer to feature branch and keep my PRs focused & squashed into single commits."
                }
              />
              <SkillsCard
                imageSrc={Images.Mobile}
                imageAlt={"Icon of a mobile phone"}
                heading={"Prioritize Mobile"}
                text={
                  "Many users only have a mobile device to access the internet - let's keep them in mind."
                }
              />
            </CardList>
          </div>
        </DevelopContainer>
      </Container>
    </BackgroundOverlay>
  </OuterContainer>
)

const OuterContainer = styled.section`
  background-image: linear-gradient(-25deg, ${Colors.blue}, ${Colors.cyan});
`

const BackgroundOverlay = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.huge} ${Spacing.base};
  background-image: url(${Images.DesignSkills}), url(${Images.DevelopSkills});
  background-position: top right, bottom left;
  background-repeat: no-repeat;
  background-size: 44.5em, 42em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
    background-size: 28em, 28em;
  }
`

const Container = styled.div`
  width: ${Spacing.largeContainerWidth};
`

const DesignContainer = styled.div`
  display: flex;
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
  max-width: 55em;
  padding-left: ${Spacing.base};

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding-left: 0;
  }
`

export default Skills
