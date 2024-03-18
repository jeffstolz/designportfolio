import React from "react"
import styled from "styled-components"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Menutest2 from "../components/menutest2"
import { Link } from "gatsby"
import { Images } from "../images"
import { Typography } from "../styles/variables"

const Abouttest = () => (
  <Layout>
    <Seo title="About Jeff Stolz" />
    <Container>
      <Menutest2 />
      <Main>
        <Header>
          <Quote>
            <QuoteHeading>
              “Ever tried. ever failed. no matter. try again. fail again. fail
              better.”
            </QuoteHeading>
            <QuoteAuthor>- Samuel Beckett</QuoteAuthor>
          </Quote>
          <Aboutimage src={Images.AboutJeff} alt="Jeff at the Grand Canyon" />
        </Header>
        <AboutMe>
          <Title>About Me</Title>
          <Description>
            Hello! I am a product designer based in Boston with 12+ years
            experience. I thrive in small, collaborative, cross-functional teams
            that focus on rapid delivery & iteration. I am a big fan of Lean UX,
            Jobs to Be Done,{" "}
            <AboutLink href="https://thoughtbot.com/blog/how-dnd-made-me-better-at-facilitating-design-sprints">
              Design Sprints
            </AboutLink>
            , and Atomic Design Systems.
          </Description>
          <Description>
            My current role is principal product designer at HPE. I am
            functionally leading a team of 12 globally distributed designers and
            responsible for driving the product design strategy for the HPE
            GreenLake Platform. This has included spearheading initiatives to
            introduce <AboutLink to="/">user personalization</AboutLink>,
            commerce, <AboutLink to="/">global search & navigation</AboutLink>,
            onboarding, contextual help, service management, and a third-party{" "}
            <AboutLink to="/">marketplace</AboutLink>.
          </Description>
          <Description>
            Additionally, my team leads the HPE{" "}
            <AboutLink to="/">Innovation Lab</AboutLink> which has explored
            solutions for generative AI, asset management, carbon footprint
            tracking, & hardware anomaly detection.
          </Description>
          <Description>
            I am interested in solving complex user problems alongside wonderful
            people. I value humility, curiosity, decisiveness, and humor.
          </Description>
        </AboutMe>
        <Collage>
          <CollageColumn>
            <LargeImage
              src={Images.JeffGalina}
              alt="Jeff and partner on a hill overlooking Prague"
            />
          </CollageColumn>
          <CollageColumn>
            <CollageRow>
              <SmallImage src={Images.Piano} alt="Piano" />
              <SmallImage src={Images.Sushi} alt="Sushi" />
            </CollageRow>
            <CollageRow>
              <SmallImage src={Images.Boys} alt="Jeff's two sons playing" />
              <SmallImage
                src={Images.Dice}
                alt="Dice sitting on a dungeons and dragons game board"
              />
            </CollageRow>
          </CollageColumn>
        </Collage>
        <Testimonial>
          <TestimonialWrapper>
            <TestimonialQuote>
              “Jeff is a designer who can cut through the BS and self direct to
              successful outcomes despite the ambiguity & inertia of our larger
              company. He pushes for better, embraces courage over comfort, and
              is driving an action-biased, lean mindset across our org.”
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
          <ContactList>
            <ContactListItem>
              <AboutLink href="mailto:j%73%74o%6Cz12%33@%67ma%69%6C.co%6D">
                Email
              </AboutLink>
            </ContactListItem>
            <ContactListItem>
              <AboutLink href="https://www.linkedin.com/in/jeff-stolz-17666725/">
                LinkedIn
              </AboutLink>
            </ContactListItem>
            <ContactListItem>
              <AboutLink href="https://github.com/jeffstolz">Github</AboutLink>
            </ContactListItem>
          </ContactList>
        </AboutMe>
      </Main>
    </Container>
  </Layout>
)

const Container = styled.div`
  display: flex;
  margin-bottom: 80px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Main = styled.section`
  width: 1200px;
  margin-right: 50px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
`

const Header = styled.section`
  display: flex;
  width: 100%;
`

const Aboutimage = styled.img`
  width: 300px;
  height: 580px;

  @media (max-width: 1400px) {
    display: none;
  }
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

  @media (max-width: 1400px) {
    padding: 200px 100px;
  }

  @media (max-width: 1000px) {
    padding: 150px 50px;
  }
`

const Title = styled.h2`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 40px;
  color: #252b33;
  padding-bottom: 25px;
  font-weight: 300;
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
  max-height: 500px;

  @media (max-width: 1000px) {
    flex-direction: column;
    max-height: 100%;
  }
`

const CollageColumn = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const CollageRow = styled.div`
  display: flex;
`

const LargeImage = styled.img`
  width: 100%;
`

const SmallImage = styled.img`
  width: 50%;
`

const Testimonial = styled.div`
  background-color: #1a1e23;
  padding: 200px;

  @media (max-width: 1400px) {
    padding: 200px 100px;
  }

  @media (max-width: 1000px) {
    padding: 150px 50px;
  }
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

const ContactList = styled.ul``

const ContactListItem = styled.li`
  margin-bottom: 20px;
`

const AboutLink = styled(Link)`
  color: #d21714;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  &:hover {
    cursor: pointer;
    color: #d21714;
    text-decoration: underline;
  }
`

export default Abouttest
