import React from "react"
import styled from "styled-components"
import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"
import Overview from "../images/hmh-overview.jpg"
import Hmw from "../images/hmh-uxcanvas.jpg"
import MapSketch from "../images/hmh-map.jpg"
import SolutionSketches from "../images/hmh-sketches.jpg"
import SolutionOne from "../images/hmh-solution-1.jpg"
import SolutionTwo from "../images/hmh-solution-2.jpg"
import SolutionThree from "../images/hmh-solution-3.jpg"
import SolutionFour from "../images/hmh-solution-4.jpg"
import SolutionFive from "../images/hmh-solution-5.jpg"
import { Colors, Spacing, Typography } from "../styles/variables"

const HmhPage = () => (
  <AboutLayout>
    <SEO title="HMH Marketplace" />
    <OuterContainer>
      <Container>
        <LargeText>HMH Marketplace</LargeText>
        <PillContainer>
          <CaseStudy>Case Study</CaseStudy>
          <ProductDesign>Product Design</ProductDesign>
        </PillContainer>
        <WelcomeText>
          A PDS to build an online destination that offers teachers & content
          creators the opportunity to share digital resources for the classroom.
        </WelcomeText>
        <LargeImage src={Overview} alt="HMH Overview" />
        <Row>
          <LeftHeader>Background</LeftHeader>
          <RightContent>
            At HMH Labs, our focus as a tech incubator was to experiment with
            technology to transform the learning experience for students,
            teachers, and parents. One project we worked on was the HMH
            Marketplace, an online marketplace for educators. The following case
            study outlines the 5-day Design Sprint that we conducted, in
            partnership with thoughtbot, to test & validate this concept.
          </RightContent>
        </Row>
        <Divider />
        <Row>
          <LeftHeader>Understand</LeftHeader>
          <RightContent>
            We began by defining our challenge, which was to create an online
            marketplace for educators and content creators to buy and sell
            digital resources. We created an affinity map to catalog and
            organize our ideas, defined our personas, and created a basic
            journey map to visualize the customer experience. At the end of the
            day we determined our success metrics by following the Google HEART
            Framework.
          </RightContent>
        </Row>
        <LargeImageTight src={Hmw} alt="HMH How Might We Statements" />
        <p>
          We used the ’How Might We” method to catalog our ideas and assumptions
          in the morning. Once we had a large sample set of ideas on the board,
          we organized them into an affinity map to identify themes and
          categories. We then voted as a group on the ideas that we wanted to be
          mindful of moving forward.
        </p>
        <LargeImageTight src={MapSketch} alt="HMH Journey Map" />
        <p>
          Additionally, we created a rough journey map to determine how our
          customer would experience the product. This helped us established a
          user-centric mindset from the beginning and remain empathetic to their
          goals throughout the week.
        </p>
        <Divider />
        <Row>
          <LeftHeader>Sketch</LeftHeader>
          <RightContent>
            Tuesday was all about rapid ideation and collaboration. After
            conducting some industry research as a group, we created a diverse
            set of solutions through short sketching exercises. This was a
            refreshing experience, as many members of the sprint team were not
            experienced product designers, and enjoyed the unique opportunity to
            grab a pen and participate in the process.
          </RightContent>
        </Row>
        <LargeImageTight src={SolutionSketches} alt="HMH Solution Sketches" />
        <p>
          The morning was spent conducting various ’Crazy 8” sketching exercises
          to rapidly ideate on rough concepts. After each round, the team
          members presented their ideas and we voted on the viable solutions.
          Once we had a collection of realistic options, we each focused on a
          solution to flesh out. We gave ourselves more time to think through
          the details and provide a presentable option to be considered for the
          prototype.
        </p>
        <Divider />
        <Row>
          <LeftHeader>Decide</LeftHeader>
          <RightContent>
            We each presented our solution sketches to the team and used heatmap
            voting to help us identify the most viable solutions. Our opinions
            were originally scattered, so we created a decision matrix to help
            us determine what to focus on. It was a grueling day, but in the end
            we had a consensus: we would focus on the core buyer workflow of a
            free product. We completed the day by listing our assumptions that
            we needed to validate through user interviews.
          </RightContent>
        </Row>
        <Divider />
        <Row>
          <LeftHeader>Prototype</LeftHeader>
          <RightContent>
            With a clear vision, it was now time to build out our solution. We
            created a simple storyboard to map out the workflow we wanted to
            validate. Because we only scheduled a day for prototyping, we built
            a simple UI in Rails without any backend functionality. This gave us
            enough to user test for Friday, while still minimizing effort.
          </RightContent>
        </Row>
        <SolutionContainer>
          <SolutionRow>
            <SolutionColumn>
              <SolutionImage src={SolutionOne} alt="HMH Solution One" />
            </SolutionColumn>
            <SolutionColumn>
              <SolutionImage src={SolutionTwo} alt="HMH Solution Two" />
            </SolutionColumn>
          </SolutionRow>
          <SolutionRow>
            <SolutionColumn>
              <SolutionImage src={SolutionThree} alt="HMH Solution Three" />
            </SolutionColumn>
            <SolutionColumn>
              <SolutionImage src={SolutionFour} alt="HMH Solution Four" />
            </SolutionColumn>
          </SolutionRow>
        </SolutionContainer>
        <Divider />
        <Row>
          <LeftHeader>Validate</LeftHeader>
          <RightContent>
            With a finished prototype, we met with our collection of users
            consisting of teachers, developers, and a scattering of coworkers
            around the office. We asked users to explore the application and
            express their thoughts and opinions, and then had them to complete
            specific, targeted tasks. This allowed us to generate an initial
            consensus and test against our assumptions.
          </RightContent>
        </Row>
        <Divider />
        <Row>
          <LeftHeader>Outcome</LeftHeader>
          <RightContent>
            After our successful design sprint, we spent the next six months
            developing our MVP and released a public beta. The HMH Marketplace
            beta generated over 5,000 products and 200 users within it's first
            week of launch. Our users included Google, Microsoft, and Highlights
            Magazine. In the end, HMH chose to focus on another direction
            strategically, and no longer supports the marketplace. However, as a
            team we were able to rapidly test out the solution on the market
            with little investment in resources, which was the overall purpose
            of our team.
          </RightContent>
        </Row>
        <LargeImage src={SolutionFive} alt="HMH Solution Five" />
        <Row>
          <LeftHeader>Reflection</LeftHeader>
          <RightContent>
            In retrospect, we would have done more research leading into the
            design sprint on the market need for a product like this and the
            problems it would solve. Additionally, we would schedule more users
            to test with during the validation stage, as we did have to result
            to interviewing some team members which may have skewed our results.
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
  object-fit: contain;
  width: 100%;

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.huge};
    margin-bottom: ${Spacing.huge};
  }
`

const LargeImageTight = styled.img`
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.huge};
  }
`

const SolutionImage = styled.img`
  margin-bottom: ${Spacing.base};
`

const Row = styled.div`
  display: flex;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
  }
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

const SolutionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 0;
  }
`

const SolutionColumn = styled.div`
  width: 48%;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 40em;
    margin-bottom: ${Spacing.base};
  }
`

const SolutionContainer = styled.div`
  margin-top: 100pt;
`

export default HmhPage
