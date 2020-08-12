import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const Contact = () => (
  <OuterContainer id="contact">
    <Container>
      <Heading>Let's Chat!</Heading>
      <Text>
        Thanks for taking the time to review my site. I am always looking for
        new opportunities to create, share, and grow as a designer. Please reach
        out if you'd like to chat over a (remote?) coffee. I look forward to
        hearing from you!
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
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${Colors.lightGray};
  padding: ${Spacing.huge} ${Spacing.base};
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
    margin-left: 0;
  }
`

const LinkList = styled.ul`
  display: flex;
  padding-top: ${Spacing.small};
`

const LinkItem = styled.li`
  font-size: ${Typography.mediumFontSize};
  margin-left: ${Spacing.small};
`

export default Contact
