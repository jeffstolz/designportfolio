import React from "react"
import styled from "styled-components"

const WorkBanner = () => (
  <Container>
    <Intro>
      <Divider />
      <IntroText>
        <Greeting>Hi, I’m Jeff.</Greeting> I work with teams from the ground up
        to ideate, design, and implement software. My favorite tools are React
        and Figma. I’m a big fan of design sprints, design systems, and end user
        testing.
      </IntroText>
      <IntroText>
        I’m always interested in geeking out about travel, science fiction, and
        D&D.
      </IntroText>
      <Divider />
    </Intro>
    <div>
      <LargeText>
        Product <br />
        Designer, <br />
        Frontend <br />
        Developer
      </LargeText>
    </div>
  </Container>
)

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450pt;
`
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 210pt;
  height: 280pt;
  margin-right: 20pt;

  @media (max-width: 950px) {
    margin-right: 0;
    width: 400pt;
    padding-left: 20pt;
    padding-right: 20pt;
    margin-top: 40pt;
  }
`

const IntroText = styled.div`
  font-family: "georgia", serif;
`

const Greeting = styled.span`
  font-weight: 800;
  font-style: italic;
`

const LargeText = styled.h1`
  font-size: 80pt;
  line-height: 75pt;
  margin-bottom: 0;
  text-transform: uppercase;

  @media (max-width: 950px) {
    display: none;
  }
`

const Divider = styled.div`
  border-bottom: 1pt solid black;
`

export default WorkBanner
