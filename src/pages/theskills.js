import React from "react"
import styled from "styled-components"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Menutest1 from "../components/menutest1"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import { FaArrowUp, FaArrowRight } from "react-icons/fa"
import { Images } from "../images"
import { Typography } from "../styles/variables"

const TheSkills = () => (
  <Layout>
    <Seo title="Early Startup MVP" />
    <Container>
      <Menutest1 />
      <Main id="top">
        <Header>
          <HeaderTitle>Early Startup MVP</HeaderTitle>
          <HeaderDescription>
            The Skills came to Thoughtbot in 2020 with a specific goal: to
            create a product for amateur athletes to gain insight into how their
            idols train and compete. With a limited budget, a team of two had a
            six-week timeline to design and develop an MVP that would be
            iterated on by their internal team and eventually launched for the
            2020 Olympics. The product would contain a subscription service
            where members can join and watch professional-quality videos of
            athletes like Shawn White or Michael Phelps, with breakdowns in how
            they train, key takeaways of their mentality to competing, and more.
          </HeaderDescription>
        </Header>
        <IntroImage
          src={Images.SkillsIndex}
          alt="Personalized HPE GreenLake dashboard over a textured background"
        />
        <LightSection>
          <Title>My Role</Title>
          <Description>
            I led all design efforts including initial discovery & ideation
            workshops, MVP planning, design, & execution. I implemented the
            front-end UI (Ruby on Rails) alongside full stack developers. I
            collaborated with Thoughtbot & client developers and the client
            founding team.
          </Description>
        </LightSection>
        <DarkSection>
          <PreTitle>Discovery</PreTitle>
          <Title>Is there a measurable need for this product?</Title>
          <Description>
            This, in addition to "what user problem is this solving?", are my
            typical first questions when beginning an engagement. It's our
            responsibility to the customer to ensure we have a well-formed
            hypothesis, backed by market and user research, before building
            expensive custom software. Even if we don't have time or budget for
            deep research and validation, it is important to identify
            assumptions, capture success metrics, and agree on the risk before
            moving forward. Building a tight MVP with a short timeline allowed
            them to realize this experiment with little financial investment.
          </Description>
          <TwoColumn>
            <Column>
              <SubTitle>COMPETING WITH MASTERCLASS</SubTitle>
              <Description>
                We couldn't ignore the industry giant. Our client's initial
                research found an opportunity to target young athletes that were
                eager for quality content and direct access to their heroes.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.SkillsCompare} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>MEASURING SUCCESS</SubTitle>
              <Description>
                We helped the customer determine the number of subscriptions
                needed to financially validate the concept and justify further
                investment.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.SkillsSuccess} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>USER VALIDATION</SubTitle>
              <Description>
                In addition to qualitative metrics, we provided the customer
                with a user testing strategy for when they launched around the
                Tokyo Olympics.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.SkillsValidation} alt="" />
            </Column>
          </TwoColumn>
        </DarkSection>
        <LightSection>
          <PreTitle>Planning</PreTitle>
          <Title>Focusing & prioritizing</Title>
          <Description>
            We kicked off the project by breaking down the client's desired
            feature sets. As a group, we rank-ordered them by priority, informed
            by the user research they had conducted independently to validate
            the idea. We then marked our waterline for MVP, ensuring there was a
            consensus across the board of the scope of the engagement. This
            exercise allowed us to determine the highest value product design
            and development exercises to conduct moving forward. In my
            experience, it is often difficult to convince a client to start with
            a small product scope, launch it, and then iterate on it based on
            the needs and feedback of their base users. Thankfully, our customer
            came in with a strong understanding and discipline when it came to
            MVP scoping.
          </Description>
          <CaseImageFull src={Images.SkillsNotes} alt="" />
        </LightSection>
        <DarkSection>
          <PreTitle>Explorations</PreTitle>
          <Title>Moving fast & loose with an agile approach</Title>
          <Description>
            With our short runway, there wasn't time to run extensive
            preliminary research or a design sprint. We relied on the interviews
            and persona research the client collected in the past and looked to
            competitors for inspiration and lessons. I created a rough workflow
            diagram and wireframes to ensure we were aligned with the client on
            the general user journey and layouts. Design and development worked
            synchronously and collaboratively.
          </Description>
          <CaseImageFull src={Images.SkillsFlowDiagram} alt="" />
          <CaseImagePadded src={Images.SkillsWireframes} alt="" />
        </DarkSection>
        <LightSection>
          <PreTitle>Explorations</PreTitle>
          <Title>Establishing a visual direction</Title>
          <Description>
            The Skills was an early-stage startup that lacked an established
            brand identity. We wanted to create a powerful visual aesthetic that
            would appeal to our younger audience without spinning our tires on
            complete brand identity guidelines, which were out of scope. I
            created a series of quick mood boards for the client to establish a
            mutual understanding of the overall look and feel. We explored
            bright, bold colors, lighter UI patterns, and typography treatments
            found in editorial design, sporting magazines, and in contrast to
            competitors like Masterclass. In the end, we decided on a dark theme
            displayed best for a video hosting platform. However, we still chose
            a kinetic, high-energy approach that would translate well to our
            users.
          </Description>
          <CaseImageFull src={Images.SkillsMoodboardOne} alt="" />
          <CaseImagePadded src={Images.SkillsMoodboardTwo} alt="" />
        </LightSection>
        <DarkSection>
          <Title>Solutions</Title>
          <Description>
            We iterated rapidly on the design work, establishing a clear visual
            direction within the first week of the engagement. This allowed us
            to focus the rest of our efforts on implementation, which was done
            in Ruby on Rails as it was the technology the customer was familiar
            with. The following images are the core screens to the final MVP
            designs, with placeholder copy and images, which were yet to be
            determined.
          </Description>
          <CaseImageFull src={Images.SkillsHome} alt="" />
          <CaseImagePadded src={Images.SkillsAthletes} alt="" />
          <CaseImagePadded src={Images.SkillsAthleteLanding} alt="" />
          <CaseImagePadded src={Images.SkillsAthlete} alt="" />
          <CaseImagePadded src={Images.SkillsVideo} alt="" />
        </DarkSection>
        <LightSection>
          <Title>Takeaways</Title>
          <Description>
            We were able to complete design and front-end development one week
            early, allowing for more budget to be allocated to full-stack
            development. This helped us hit our target without extending the
            engagement or cutting scope. As is the nature with many consulting
            projects, we were not able to stick around long enough with the
            customer to test the hypothesis with our users. However, with the
            strategy we provided them to validate the product, they will be able
            respond to user feedback accordingly. If the product is invalidated,
            then it reinforces the value of beginning with a low investment,
            risk-averse MVP approach.
          </Description>
          <TwoColumn>
            <Column>
              <SubTitle>IDENTIFY ASSUMPTIONS EARLY</SubTitle>
              <Description>
                Because of the speed of this engagement, we weren't able to
                validate every assumption - by identifying these and the risks
                they carried early, we were able to plan for unexpected changes.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.SkillsAssumptions} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>STAY COMMUNICATIVE</SubTitle>
              <Description>
                For short engagements, there is little room to course correct
                midway. Articulating decisions, and ensuring customer buy-in
                along the way, helps ensure all parties remain on the same page
                throughout.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationTradeoffs} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>KANBAN ROCKS</SubTitle>
              <Description>
                We avoided time-consuming story points and formal Scrum
                frameworks with a lightweight Kanban board. This limited project
                management time and ensured we were always working on the top
                priority.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.SkillsKanban} alt="" />
            </Column>
          </TwoColumn>
        </LightSection>
        <Footer>
          <LinkWrapper>
            <FaArrowUp style={{ color: "#ef5350" }} />
            <ScrollLink
              activeClass="active"
              to={"top"}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <BackTop>Back to top</BackTop>
            </ScrollLink>
          </LinkWrapper>
          <LinkWrapper>
            <PreUpNext>Up next:</PreUpNext>
            <UpNext to={"../personalization"}>Platform Personalization</UpNext>
            <FaArrowRight style={{ color: "#ef5350" }} />
          </LinkWrapper>
        </Footer>
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
  flex-direction: column;
  background-color: #1a1e23;
  padding: 200px;

  @media (max-width: 1400px) {
    padding: 100px;
  }

  @media (max-width: 750px) {
    padding: 100px 50px;
  }
`

const HeaderTitle = styled.h1`
  color: #f3f5f6;
  font-size: 55px;
  font-family: ${Typography.headingFontFamilyAlt};
  font-weight: 400;
  padding-bottom: 25px;
`

const HeaderDescription = styled.p`
  color: #b5b5b5;
  font-size: 20px;
  font-weight: 300;
  font-family: Georgia, serif;
  max-width: 650px;
`

const IntroImage = styled.img`
  width: 100%;
  max-height: 100%;
  margin-bottom: -5px;
`

const LightSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 200px;

  @media (max-width: 1400px) {
    padding: 100px;
  }

  @media (max-width: 750px) {
    padding: 100px 50px;
  }
`

const DarkSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f5f8f9;
  padding: 200px;

  @media (max-width: 1400px) {
    padding: 100px;
  }

  @media (max-width: 750px) {
    padding: 100px 50px;
  }
`

const Title = styled.h2`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 40px;
  color: #252b33;
  padding-bottom: 25px;
  font-weight: 300;
`

const PreTitle = styled.h3`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 20px;
  color: #6e7581;
  font-weight: 300;
  padding-bottom: 25px;
`

const SubTitle = styled.h4`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 30px;
  color: #252b33;
  font-weight: 300;
  padding-bottom: 25px;
`

const SubTitlePadded = styled.h4`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 30px;
  color: #252b33;
  font-weight: 300;
  padding-bottom: 25px;
  margin-top: 40px;
`

const SubTitlePaddedMore = styled.h4`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 30px;
  color: #252b33;
  font-weight: 300;
  padding-bottom: 25px;
  margin-top: 80px;
`

const Description = styled.p`
  font-family: Georgia, serif;
  font-size: 20px;
  color: #474d55;
  max-width: 650px;
  padding-bottom: 25px;
`

const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #1a1e23;
  padding: 50px;
`

const BackTop = styled(Link)`
  padding-left: 10px;
  color: #ef5350;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  &:hover {
    cursor: pointer;
    color: #ef5350;
    text-decoration: underline;
  }
`

const UpNext = styled(Link)`
  padding-right: 10px;
  color: #ef5350;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  &:hover {
    cursor: pointer;
    color: #ef5350;
    text-decoration: underline;
  }
`

const PreUpNext = styled.p`
  padding-right: 20px;
  color: #b5b5b5;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  @media (max-width: 750px) {
    display: none;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

const CaseImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  width: 100%;
  padding: 10px;
  background-color: #fff;
`

const CaseImageHalf = styled.img`
  max-height: 100%;
  width: 100%;
`

const CaseImageFull = styled.img`
  width: 100%;
`

const CaseImagePadded = styled.img`
  width: 100%;
  margin-top: 30px;
`

export default TheSkills
