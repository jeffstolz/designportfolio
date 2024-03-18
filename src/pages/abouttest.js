import React from "react"
import styled from "styled-components"
import Menutest from "../components/menutest"
import { Link } from "gatsby"
import { Images } from "../images"
import { Typography } from "../styles/variables"

const Abouttest = () => (
  <Container>
    <Menutest />
    <Main>
      <Header>
        <Quote>
          <QuoteHeading>
            “Ever tried. ever failed. no matter. try again. fail again. fail
            better.”
          </QuoteHeading>
          <QuoteAuthor>- Samuel Beckett</QuoteAuthor>
        </Quote>
        <Aboutimage src={Images.Headshot} alt="Picture of Jeff Stolz" />
      </Header>
      <AboutMe>
        <Title>About Me</Title>
        <Description>
          Hello! I am a product designer based in Boston with 12+ years
          experience. I thrive in small, collaborative, cross-functional teams
          that focus on rapid delivery & iteration. I am a big fan of Lean UX,
          Jobs to Be Done, Design Sprints, and Atomic Design Systems.
        </Description>
        <Description>
          My current role is principal product designer at HPE. I am
          functionally leading a team of 12 globally distributed designers and
          responsible for driving the product design strategy for the HPE
          GreenLake Platform. This has included spearheading initiatives to
          introduce user personalization, commerce, global search & navigation,
          onboarding, contextual help, service management, and a third-party
          marketplace.
        </Description>
        <Description>
          Additionally, my team leads the HPE Innovation Lab which has explored
          solutions for generative AI, asset management, carbon footprint
          tracking, & hardware anomaly detection.
        </Description>
        <Description>
          I am interested in solving complex user problems alongside wonderful
          people. I value humility, curiosity, decisiveness, and humor.
        </Description>
      </AboutMe>
      <Collage>
        <CollageLeft>
          <LargeImage src={Images.Headshot} alt="Picture of Jeff Stolz" />
        </CollageLeft>
        <CollageRight>
          <CollageRightTop>
            <SmallImage src={Images.Headshot} alt="Picture of Jeff Stolz" />
            <SmallImage src={Images.Headshot} alt="Picture of Jeff Stolz" />
          </CollageRightTop>
          <CollageRightBottom>
            <SmallImage src={Images.Headshot} alt="Picture of Jeff Stolz" />
            <SmallImage src={Images.Headshot} alt="Picture of Jeff Stolz" />
          </CollageRightBottom>
        </CollageRight>
      </Collage>
      <Testimonial>
        <TestimonialWrapper>
          <TestimonialQuote>
            “Jeff is a designer who can cut through the BS and self direct to
            successful outcomes despite the ambiguity & inertia of our larger
            company. He pushes for better, embraces courage over comfort, and is
            driving an action-biased, lean mindset across our org.”
          </TestimonialQuote>
          <TestimonialAuthor>
            - Justin Barton, Head of Product Design @ HPE
          </TestimonialAuthor>
        </TestimonialWrapper>
      </Testimonial>
      <AboutMe>
        <Title>Get in touch</Title>
        <Description>
          Thanks for visiting. I'm always looking for new opportunities to
          create, share, and grow as a designer. Please reach out!
        </Description>
        <ContactLinks>
          <ContactLink>Email</ContactLink>
          <ContactLink>LinkedIn</ContactLink>
          <ContactLink>Github</ContactLink>
        </ContactLinks>
      </AboutMe>
    </Main>
  </Container>
)

const Container = styled.div`
  display: flex;
`

const Main = styled.section`
  width: 1200px;
`

const Header = styled.section`
  display: flex;
  width: 100%;
`

const Aboutimage = styled.img`
  width: 300px;
  height: 580px;
`

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1e23;
  height: 580px;
  padding: 0 20px;
  width: 100%;
`

const QuoteHeading = styled.h2`
  color: #f3f5f6;
  font-size: 40px;
  text-align: center;
  font-family: ${Typography.headingFontFamilyAlt};
  font-weight: 400;
  padding-bottom: 25px;
  max-width: 500px;
`

const QuoteAuthor = styled.h3`
  color: #b5b5b5;
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  font-family: Georgia, serif;
`

const AboutMe = styled.div`
  background-color: #ffffff;
  padding: 200px;
`

const Title = styled.h2`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 40px;
  color: #252b33;
  padding-bottom: 25px;
`

const Description = styled.p`
  font-family: Georgia, serif;
  font-size: 20px;
  color: #474d55;
  max-width: 650px;
  padding-bottom: 25px;
`

const Collage = styled.div`
  display: flex;
  width: 100%;
`

const CollageLeft = styled.div`
  width: 50%;
`

const CollageRight = styled.div`
  width: 50%;
`

const CollageRightTop = styled.div`
  display: flex;
`

const CollageRightBottom = styled.div`
  display: flex;
`

const LargeImage = styled.img`
  width: 100%;
  max-width: 600px;
`

const SmallImage = styled.img`
  width: 100%;
  max-width: 300px;
`

const Testimonial = styled.div`
  background-color: #1a1e23;
  padding: 200px;
`

const TestimonialWrapper = styled.div`
  border-left: 5px solid #ef5350;
  padding-left: 40px;
`

const TestimonialQuote = styled.h2`
  color: #f3f5f6;
  font-size: 20px;
  line-height: 32px;
  font-style: italic;
  font-weight: 500;
  font-family: Georgia, serif;
  max-width: 600px;
  margin-bottom: 40px;
`

const TestimonialAuthor = styled.h3`
  color: #b5b5b5;
  font-size: 20px;
  font-weight: 500;
  font-family: Georgia, serif;
`

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactLink = styled(Link)`
  color: #d21714;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    color: #d21714;
    text-decoration: underline;
  }
`

export default Abouttest
