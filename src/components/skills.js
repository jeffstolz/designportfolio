import React from "react"
import styled, { css, ThemeProvider } from "styled-components"
import Fade from "react-reveal/Fade"
import Button from "./button"
import { FaArrowRight } from "react-icons/fa"
import { darkButton } from "./themes"
import { Colors, Spacing, Typography } from "../styles/variables"

const Skills = () => (
  <OuterContainer id="skills">
    <Container>
      <Column>
        <Fade>
          <Heading>How I Design</Heading>
          <DesignHeading>Tools</DesignHeading>
          <Description>
            Figma, Photoshop, Miro, Trello, UserTesting, The Noun Project,
            Iconify, Unsplash, Figmotion, Coolors, pen & paper, lots of sticky
            notes.
          </Description>
          <DesignHeading>Methods</DesignHeading>
          <Description>
            Jobs-To-Be-Done, GV Design Sprints, Atomic Design Systems, Lean UX
            Canvas, HEART, personas, card sorting, frequent / informal user
            testing.
          </Description>
          <Divider />
          <SmallDescription>
            To get a sense of how I tick, check out this (geeky) article I wrote
            about facilitating design sprints.
          </SmallDescription>
          <ThemeProvider theme={darkButton}>
            <Button
              path={
                "https://thoughtbot.com/blog/how-dnd-made-me-better-at-facilitating-design-sprints"
              }
              label={"View Article"}
              icon={<FaArrowRight />}
            />
          </ThemeProvider>
        </Fade>
      </Column>
      <Column>
        <Fade>
          <Heading>How I Develop</Heading>
          <DevelopHeading>Technologies</DevelopHeading>
          <Description>
            React, React Native, Ruby on Rails, Elm (novice), HTML5, CSS3, SCSS,
            Git, Gatsby, Middleman.
          </Description>
          <DevelopHeading>Methods</DevelopHeading>
          <Description>
            Styled Components, BEM, ITCSS, A11y Project, squashed / focused pull
            requests.
          </Description>
          <Divider />
          <SmallDescription>
            For a good example of how I like to code, check out the repo to this
            site.
          </SmallDescription>
          <ThemeProvider theme={darkButton}>
            <Button
              path={"https://github.com/jeffstolz/gatsby-portfolio"}
              label={"View Codebase"}
              icon={<FaArrowRight />}
            />
          </ThemeProvider>
        </Fade>
      </Column>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: ${Spacing.xHuge} 12%;
  background-color: ${Colors.black};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.xHuge} 8%;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 65em;

  @media (max-width: ${Spacing.largeBreakPoint}) {
    flex-direction: column;
    max-width: 27em;
  }
`

const Column = styled.div`
  width: 45%;

  @media (max-width: ${Spacing.largeBreakPoint}) {
    width: 100%;
    margin-bottom: ${Spacing.xHuge};
  }
`

const Heading = styled.h2`
  color: ${Colors.white};
  margin-bottom: ${Spacing.small};
`

const subheading = css`
  font-weight: ${Typography.lightFontWeight};
  margin-bottom: ${Spacing.xSmall};
`

const DesignHeading = styled.h3`
  ${subheading};
  color: ${Colors.red};
`

const DevelopHeading = styled.h3`
  ${subheading};
  color: ${Colors.blue};
`

const Description = styled.p`
  color: ${Colors.gray2};
  margin-bottom: ${Spacing.base};
`

const Divider = styled.hr`
  border: 1px solid ${Colors.gray4};
  width: ${Spacing.base};
  margin-left: 0;
  margin-bottom: ${Spacing.base};
`

const SmallDescription = styled.p`
  width: 75%;
  font-size: ${Typography.smallFontSize};
  color: ${Colors.gray3};
  margin-bottom: 1.5em;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
  }
`

export default Skills
