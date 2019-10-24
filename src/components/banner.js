import React from "react"
import styled from "styled-components"

const Banner = () => (
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
        PRODUCT <br />
        DESIGNER, <br />
        FRONTEND <br />
        DEVELOPER
      </LargeText>
    </div>
  </Container>
)

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #6e55c1, #80cbe6);
  height: 400pt;
`
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 210pt;
  height: 280pt;
  margin-right: 20pt;
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
`

const Divider = styled.div`
  border-bottom: 1pt solid black;
`

export default Banner
