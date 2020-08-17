import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const Contact = () => (
  <OuterContainer id="contact">
    <BackgroundOverlay>
      <Container>
        <Heading>Let's Chat!</Heading>
        <Text>
          Thanks for taking the time to review my site. I am always looking for
          new opportunities to create, share, and grow as a designer. Please
          reach out if you'd like to chat over a (remote?) coffee. I look
          forward to hearing from you!
        </Text>
        <LinkList>
          <LinkItem>
            <a href="mailto:j%73%74o%6Cz12%33@%67ma%69%6C.co%6D">Email</a>
          </LinkItem>
          <LinkItem>
            <a href="https://github.com/jeffstolz">Github</a>
          </LinkItem>
          <LinkItem>
            <a href="https://www.linkedin.com/in/jeff-stolz-17666725/">
              LinkedIn
            </a>
          </LinkItem>
          <LinkItem>
            <a href={Images.JeffStolzResume} download>
              Resume
            </a>
          </LinkItem>
        </LinkList>
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
  background-image: url(${Images.CoffeeContact});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 31em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
    background-size: 18em;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.small};
`

const Text = styled.p`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.hugeLineHeight};
  margin-left: ${Spacing.small};
  padding-bottom: ${Spacing.small};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.baseFontSize};
    margin-left: 0;
  }
`

const LinkList = styled.ul`
  display: flex;
  padding-top: ${Spacing.small};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
  }
`

const LinkItem = styled.li`
  font-size: ${Typography.mediumFontSize};
  margin-left: ${Spacing.small};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.baseFontSize};
    margin-left: 0;
    margin-bottom: ${Spacing.small};
  }
`

export default Contact
