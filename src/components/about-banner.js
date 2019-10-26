import React from "react"
import styled from "styled-components"

import JeffStolz from "../images/jeff-stolz.png"

const AboutBanner = () => (
  <Container>
    <TopRow>
      <HeadshotImage src={JeffStolz} alt="Jeff Stolz" />
      <LargeText>About Me</LargeText>
      <FancyText>My Style:</FancyText>
    </TopRow>
    <MiddleRow>
      <IntroText>
        I value strong opinions, loosely held. I thrive in small, collaborative,
        multi-disciplinary teams that foster transparency and continuous
        improvement. I believe in self-management and trusting environments.
        While I have experience with a variety of roles, I especially enjoy the
        energy and unique challenges of startups.
      </IntroText>
      <Callouts>
        Figma <br />
        Jobs to be Done
        <br />
        Atomic Design Systems
        <br />
        GV Design Sprints
        <br />
        React / React Native
        <br />
        A11Y Project
        <br />
        Styled Components
      </Callouts>
    </MiddleRow>
    <BottomRow>
      <Divider />
    </BottomRow>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500pt;
`

const HeadshotImage = styled.img`
  position: absolute;
  z-index: -1;
  object-fit: contain;
  height: 415pt;
  top: -157pt;
  left: -197pt;
`

const TopRow = styled.div`
  display: flex;
  width: 700pt;
  margin-bottom: 20pt;
  position: relative;
`

const MiddleRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 700pt;
`

const BottomRow = styled.div`
  display: flex;
  width: 700pt;
  justify-content: flex-end;
`

const IntroText = styled.div`
  font-family: "georgia", serif;
  width: 320pt;
  padding-right: 25pt;
`

const LargeText = styled.h1`
  font-size: 80pt;
  line-height: 75pt;
  margin-bottom: 0;
  margin-right: 38pt;
  text-transform: uppercase;
`

const Callouts = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  line-height: 20pt;
  font-size: 20pt;
  color: #898989;
`

const FancyText = styled.div`
  display: flex;
  align-items: flex-end;
  color: #898989;
  font-style: italic;
  font-family: "georgia", serif;
`

const Divider = styled.div`
  border-bottom: 1pt solid black;
  width: 582pt;
  margin-top: 25pt;
`

export default AboutBanner
