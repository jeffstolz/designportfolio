import React from "react"
import styled from "styled-components"
import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"
import { Images } from "../images";
import { Colors, Spacing, Typography } from "../styles/variables"

const MobileHeartbeatPage = () => (
  <AboutLayout>
    <SEO title="The Skills" />
    <OuterContainer>
      <Container>
        <LargeText>The Skills</LargeText>
        <PillContainer>
          <CaseStudy>Case Study</CaseStudy>
          <ProductDesign>Product Design</ProductDesign>
          <VisualDesign>Visual Design</VisualDesign>
        </PillContainer>
        <WelcomeText>
          Six weeks to build an online education platform to share how
          world-class athletes train and compete.
        </WelcomeText>
        <LargeImage src={Images.SkillsHome} alt="The Skills Home Page" />
        <Row>
          <LeftHeader>Background</LeftHeader>
          <RightContent>
            The Skills came to thoughtbot with the goal of creating a product
            for amateur athletes to gain insight into how their idols train and
            compete. With a limited budget, I and one other developer had a six
            week timeline to design and develop a Ruby on Rails MVP that would
            be iterated on by their internal team and eventually launched for
            the 2020 Olympics. The product would contain a subscription service
            where members can join and watch professional-quality videos of
            athletes like Shawn White or Michael Phelps, with breakdowns in how
            they train, key takeaways of their mentality to competing, and more.
          </RightContent>
        </Row>
        <Divider />
        <Row>
          <LeftHeader>Kickoff</LeftHeader>
          <RightContent>
            We kicked off the project by breaking down the client's desired
            feature sets. As a group, we rank-ordered them by priority, informed
            by the user research they had conducted independently to validate
            the idea. We then marked our waterline for MVP, ensuring there was a
            consensus across the board of the scope of the engagement. This
            exercise allowed us to determine the highest value product design
            and development exercises to conduct moving forward.
          </RightContent>
        </Row>
        <LargeImageTight
          src={Images.SkillsNotes}
          alt="The Skills Feature Prioritization Exercise"
        />
        <p>
          In my experience, it is often difficult to convince a client to start
          with a small product scope, launch it, and then iterate on it based on
          the needs and feedback of their base users. Thankfully, our customer
          came in with a strong understanding and discipline when it came to MVP
          scoping. We conducted this exercise on the wall with sticky notes and
          translated our findings into Trello, where we tracked the progress of
          the project moving forward.
        </p>
        <Divider />
        <Row>
          <LeftHeader>Information Architecture</LeftHeader>
          <RightContent>
            With our short runway, there was little time to run extensive
            preliminary research and design exercises. We relied on the
            interviews and persona research the client collected in the past and
            looked to competitors for inspiration and lessons. I created a rough
            workflow diagram and wireframes to ensure we were aligned with the
            client on the general user journey and layouts.
          </RightContent>
        </Row>
        <LargeImageTight src={Images.SkillsFlowDiagram} alt="The Skills User Flow Diagram" />
        <LargeImageTight src={Images.SkillsWireframes} alt="The Skills Wireframes" />
        <Divider />
        <Row>
          <LeftHeader>Mood Boards</LeftHeader>
          <RightContent>
            The Skills was an early-stage startup that had no established brand
            identity. We wanted to create a powerful visual aesthetic for the
            MVP without spinning our tires on fleshing out brand identity
            guidelines, which were out of scope. I created a series of quick
            mood boards for the client to establish a mutual understanding of
            the overall look and feel. After a day or two of iterations, we were
            able to agree on an approach that both excited the customer and I
            felt confident I could implement in the timeline given.
          </RightContent>
        </Row>
        <LargeImageTight src={Images.SkillsMoodBoardOne} alt="The Skills Mood Board" />
        <LargeImageTight src={Images.SkillsMoodBoardTwo} alt="The Skills Mood Board" />
        <p>
          One of the competitors we drew inspiration from for our UI patterns
          was Masterclass, a leader in a similar space. Because Masterclass was
          such a well-known brand, we also wanted to make sure we built a unique
          identity from them. We explored bright, bold colors, lighter UI
          patterns, and typography treatments found in editorial design. In the
          end, we decided a dark theme displayed best for a video hosting
          platform. However, we still chose a kinetic, high-energy approach that
          would translate well to our users.
        </p>
        <Divider />
        <Row>
          <LeftHeader>Solutions</LeftHeader>
          <RightContent>
            We iterated rapidly on the design work, establishing a clear visual
            direction within the first week of the engagement. This allowed us
            to focus the rest of our efforts on implementation, which was done
            in Ruby on Rails. The following images are the core screens to the
            final MVP designs, with placeholder copy and images, which are yet
            to be determined.
          </RightContent>
        </Row>
        <LargeImageTight src={Images.SkillsHome} alt="The Skills Homepage" />
        <LargeImageTight src={Images.SkillsAthletes} alt="The Skills Athletes Page" />
        <LargeImageTight
          src={AthleteLanding}
          alt="The Skills Athlete Landing Page"
        />
        <LargeImageTight src={Images.SkillsAthlete} alt="The Skills Athlete Page" />
        <LargeImageTight src={Images.SkillsVideo} alt="The Skills Athlete Video Page" />
        <Divider />
        <Row>
          <LeftHeader>Outcome</LeftHeader>
          <RightContent>
            I was proud of our ability as a team to prioritize and focus, and as
            a result, we were able to deliver the MVP scope on-time to a happy
            customer. This was one of the first times I used informal mood
            boards with clients, and I will most likely be carrying this
            technique along for future visual design engagements. The ability to
            rapidly iterate on design, before getting into the weeds of UI
            layouts, was invaluable.
          </RightContent>
        </Row>
      </Container>
    </OuterContainer>
  </AboutLayout>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: ${Spacing.pageBottom};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-right: ${Spacing.base};
    padding-left: ${Spacing.base};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
  padding-top: ${Spacing.xHuge};

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
  }
`

const LargeText = styled.h1`
  font-size: ${Typography.headingFontSize};
  margin-bottom: ${Spacing.xSmall};
`

const PillContainer = styled.div`
  display: flex;
  margin-top: ${Spacing.small};
  margin-bottom: ${Spacing.medium};
`

const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Spacing.pillHeight};
  width: ${Spacing.pillWidth};
  color: ${Colors.black};
  border-radius: ${Spacing.pillRadius};
  border: 1pt solid;
  margin-right: 0.5em;
  font-size: ${Typography.smallFontSize};

  @media (max-width: ${Spacing.breakPoint}) {
    width: ${Spacing.pillMobileWidth};
    font-size: ${Typography.xSmallFontSize};
  }
`

const ProductDesign = styled(Pill)`
  border-color: ${Colors.blue};
`

const VisualDesign = styled(Pill)`
  border-color: ${Colors.violet};
`

const CaseStudy = styled(Pill)`
  border-color: ${Colors.green};
`

const WelcomeText = styled.p`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.largeLineHeight};
`

const LargeImage = styled.img`
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.xxHuge};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.huge};
    margin-bottom: ${Spacing.huge};
  }
`

const LargeImageTight = styled.img`
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.base};
  }
`

const Row = styled.div`
  display: flex;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
  }
`

const LeftHeader = styled.h2`
  display: flex;
  width: 100%;
  font-size: ${Typography.headingFontSize};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.small};
  }
`

const RightContent = styled.p`
  display: flex;
  width: 100%;
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 1pt solid ${Colors.black};
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.xxHuge};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.large};
    margin-bottom: ${Spacing.large};
  }
`

export default MobileHeartbeatPage
