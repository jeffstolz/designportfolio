import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Button from "./button"
import { FaArrowDown } from "react-icons/fa"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const Intro = () => (
  <Container id="intro">
    <HeadingContainer>
      <Fade>
        <Heading>Hi, I'm Jeff</Heading>
      </Fade>
      <Fade delay={250}>
        <Wave src={Images.Wave} alt="Image of waving hand" />
      </Fade>
    </HeadingContainer>
    <Fade delay={1000}>
      <Subheading>
        I'm a <DesignerText>product designer</DesignerText> and{" "}
        <DeveloperText>front end developer</DeveloperText>.&nbsp;
      </Subheading>
    </Fade>
    <Fade delay={2000}>
      <Button path={"#skills"} label={"Welcome!"} icon={<FaArrowDown />} />
    </Fade>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 12%;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: 0 8%;
  }
`

const HeadingContainer = styled.div`
  display: flex;
`

const Heading = styled.h1`
  margin-bottom: 0.35em;
`

const Wave = styled.img`
  width: 3.5em;
  margin-bottom: -2.2em;
  margin-left: 1.5em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 2.5em;
    margin-bottom: -1.2em;
    margin-left: 1em;
  }
`

const Subheading = styled.h2`
  font-family: ${Typography.primaryFontFamily};
  font-size: ${Typography.mediumFontSize};
  font-weight: ${Typography.lightFontWeight};
  line-height: ${Typography.hugeLineHeight};
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.baseFontSize};
    max-width: 14em;
  }
`

const DesignerText = styled.span`
  color: ${Colors.red};
`

const DeveloperText = styled.span`
  color: ${Colors.blue};
`

export default Intro
