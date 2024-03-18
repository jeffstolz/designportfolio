import React from "react"
import styled, { css } from "styled-components"
import Fade from "react-reveal/Fade"
import { Link as ScrollLink } from "react-scroll"
import Button from "./button"
import { secondaryLight } from "./themes"
import { FaArrowDown } from "react-icons/fa"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const Intro = () => (
  <Container id="intro">
    <Fade delay={800}>
      <InnerContainer>
        <Headshot src={Images.Headshot} alt="Picture of Jeff Stolz" />
        <ContentContainer>
          <HeadingContainer>
            <Heading>Hi, I'm Jeffrey</Heading>
            <WaveAnimation>
              <WaveIcon src={Images.Wave} alt="Animated icon of waving hand" />
            </WaveAnimation>
          </HeadingContainer>
          <Subheading>
            I'm a <RedText>product designer </RedText>who creates simple &
            powerful experiences.
          </Subheading>
          <Fade delay={1200}>
            <ButtonContainer>
              <ScrollLink
                activeClass="active"
                to={"skills"}
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Button
                  theme={secondaryLight}
                  label={"Welcome!"}
                  icon={<FaArrowDown />}
                />
              </ScrollLink>
            </ButtonContainer>
          </Fade>
        </ContentContainer>
      </InnerContainer>
    </Fade>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: 0 ${Spacing.sectionPaddingMobile};
  }
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`

const Headshot = styled.img`
  width: 18em;
  border-radius: 100%;

  @media (max-width: 70em) {
    display: none;
  }
`

const ContentContainer = styled.div`
  margin-left: 3em;

  @media (max-width: ${Spacing.breakPoint}) {
    margin-left: 0;
  }
`

const HeadingContainer = styled.div`
  display: flex;
`

const Heading = styled.h1`
  font-size: ${Typography.largeHeadingFontSize};
  margin-bottom: 0.15em;

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.smallHeadingFontSize};
  }
`

const wavekeyframes = css`
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(12deg);
    }
    20% {
      transform: rotate(-6deg);
    }
    30% {
      transform: rotate(12deg);
    }
    40% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(8deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const WaveAnimation = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  transform-origin: 50px 100px;
  display: inline-block;
  ${wavekeyframes};
`

const WaveIcon = styled.img`
  width: 3.5em;
  margin-bottom: -2.4em;
  margin-left: ${Spacing.xBase};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 2.5em;
    margin-bottom: -1.2em;
    margin-left: ${Spacing.small};
  }
`

const Subheading = styled.h2`
  ${Typography.subheading};
  color: ${Colors.gray4};
  margin-bottom: ${Spacing.base};
`

const RedText = styled.span`
  color: ${Colors.red};
`

const ButtonContainer = styled.div`
  display: flex;
`

export default Intro
