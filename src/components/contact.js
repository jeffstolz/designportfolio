import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const Contact = () => (
  <Container>
    <Fade>
      <Heading>Let's Chat!</Heading>
    </Fade>
    <Fade>
      <Text>
        Thanks for taking the time to review my site. I am always looking for
        new opportunities to create, share, and grow as a designer. Please reach
        out if you'd like to chat over a (remote?) coffee. I look forward to
        hearing from you!
      </Text>
    </Fade>
    <Fade>
      <LinkList>
        <LinkItem>
          <LinkText href="mailto:j%73%74o%6Cz12%33@%67ma%69%6C.co%6D">
            Email
          </LinkText>
          <Slash aria-hidden="true">/</Slash>
        </LinkItem>
        <LinkItem>
          <LinkText href="https://github.com/jeffstolz">Github</LinkText>
          <Slash aria-hidden="true">/</Slash>
        </LinkItem>
        <LinkItem>
          <LinkText href="https://www.linkedin.com/in/jeff-stolz-17666725/">
            LinkedIn
          </LinkText>
          <Slash aria-hidden="true">/</Slash>
        </LinkItem>
        <LinkItem>
          <LinkText href={Images.JeffStolzResume} download>
            Resume
          </LinkText>
        </LinkItem>
      </LinkList>
    </Fade>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 12%;
  background-color: ${Colors.black};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: 0 8%;
  }
`

const Heading = styled.h2`
  color: ${Colors.white};
  margin-bottom: ${Spacing.small};
`

const Text = styled.p`
  color: ${Colors.gray2};
  max-width: 47em;
`

const LinkList = styled.ul`
  display: flex;
  margin: ${Spacing.medium} 0;
`

const LinkItem = styled.li`
  margin-right: ${Spacing.small};
`

const LinkText = styled.a`
  color: ${Colors.white};

  &:hover {
    color: ${Colors.gray1};
  }
`

const Slash = styled.span`
  margin-left: ${Spacing.small};
  color: ${Colors.gray3};
`

export default Contact
