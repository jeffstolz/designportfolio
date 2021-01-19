import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Link as ScrollLink } from "react-scroll"
import Button from "./button"
import { secondaryLight } from "./themes"
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
        <Wave src={Images.Wave} alt="" />
      </Fade>
    </HeadingContainer>
    <Fade delay={1000}>
      <Subheading>
        I'm a <DesignerText>product designer</DesignerText> and{" "}
        <DeveloperText>front end developer</DeveloperText>.&nbsp;
      </Subheading>
    </Fade>
    <Fade delay={2000}>
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
            label={"Wecome!"}
            icon={<FaArrowDown />}
          />
        </ScrollLink>
      </ButtonContainer>
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

const HeadingContainer = styled.div`
  display: flex;
`

const Heading = styled.h1`
  margin-bottom: 0.35em;
`

const Wave = styled.img`
  width: 3.5em;
  margin-bottom: -2.2em;
  margin-left: ${Spacing.xBase};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 2.5em;
    margin-bottom: -1.2em;
    margin-left: ${Spacing.small};
  }
`

const Subheading = styled.h2`
  ${Typography.subheading};
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    max-width: 14em;
  }
`

const DesignerText = styled.span`
  color: ${Colors.red};
`

const DeveloperText = styled.span`
  color: ${Colors.blue};
`

const ButtonContainer = styled.div`
  display: flex;
`

export default Intro
