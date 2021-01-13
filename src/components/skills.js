import React from "react"
import styled, { css, ThemeProvider } from "styled-components"
import Fade from "react-reveal/Fade"
import { FaArrowRight } from "react-icons/fa"
import Button from "./button"
import { darkTheme } from "./themes"
import { Colors, Spacing, Typography } from "../styles/variables"

const Skills = () => (
  <OuterContainer>
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
            testing, ship early & often, prioritize mobile.
          </Description>
          <Divider />
          <SmallDescription>
            To learn more about how I tick, check out my geeky realizations
            about facilitating design sprints.
          </SmallDescription>
          <ThemeProvider theme={darkTheme}>
            <Button label={"View Article"} icon={<FaArrowRight />} />
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
            Styled Components, A11y Project, BEM, ITCSS, squashed / single
            commit pull requests.
          </Description>
          <Divider />
          <SmallDescription>
            Check out the Github repo to this site for a good example of how I
            like to code.
          </SmallDescription>
          <ThemeProvider theme={darkTheme}>
            <Button label={"View Codebase"} icon={<FaArrowRight />} />
          </ThemeProvider>
        </Fade>
      </Column>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 12%;
  background-color: ${Colors.black};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-top: ${Spacing.xHuge};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
  }
`

const Column = styled.div`
  width: 40%;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
    margin-bottom: ${Spacing.xHuge};
  }
`

const Heading = styled.h2`
  color: ${Colors.white};
  margin-bottom: ${Spacing.small};
`

const subheading = css`
  font-size: ${Typography.mediumFontSize};
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
  color: ${Colors.mediumGray};
  margin-bottom: ${Spacing.base};
`

const Divider = styled.hr`
  border: 1px solid ${Colors.darkGray};
  width: ${Spacing.base};
  margin-left: 0;
  margin-bottom: ${Spacing.base};
`

const SmallDescription = styled.p`
  width: 75%;
  font-size: ${Typography.smallFontSize};
  color: ${Colors.mediumGray};
  margin-bottom: ${Spacing.small};

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
  }
`

export default Skills
