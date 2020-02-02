import React from "react"
import styled from "styled-components"
import AboutLayout from "../components/about-layout"
import SEO from "../components/seo"
import Overview from "../images/mh-overview.jpg"
import Discovery from "../images/mh-discovery.jpg"
import Persona from "../images/mh-persona.jpg"
import Sketch from "../images/mh-design-process-sketch.jpg"
import Wireframe from "../images/mh-wireframe.jpg"
import SolutionOne from "../images/mh-solution-1.jpg"
import SolutionTwo from "../images/mh-solution-2.jpg"
import SolutionThree from "../images/mh-solution-3.jpg"
import SolutionFour from "../images/mh-solution-4.jpg"
import SolutionFive from "../images/mh-solution-5.jpg"
import SolutionSix from "../images/mh-solution-6.jpg"
import { Spacing } from "../styles/variables"

const MobileHeartbeatPage = () => (
  <AboutLayout>
    <SEO title="Mobile Heartbeat" />
    <OuterContainer>
      <Container>
        <LargeText>Mobile Heartbeat</LargeText>
        <PillContainer>
          <CaseStudy>Case Study</CaseStudy>
          <ProductDesign>Product Design</ProductDesign>
          <UxDesign>UX Design</UxDesign>
        </PillContainer>
        <WelcomeText>
          Enabling clinicians to improve patient care through accelerated
          communication and collaboration in the hospital.
        </WelcomeText>
        <LargeImage src={Overview} alt="Mobile Heartbeat Overview" />
        <Row>
          <LeftHeader>The Problem</LeftHeader>
          <RightContent>
            At the time of the project, Mobile Heartbeat was a clinical
            communication tool in 92 hospitals and with over 100,000 active
            users. Although the product had a deep userbase, the company had not
            focused on design in it's past and end-users complained that the
            product had grown dated, unintuitive, and frustrating. Physicians
            were rejecting the application because it didn't support their
            specific workflow and urgent communications were a burden. I was
            brought on to establish a design culture within the company and lead
            the redesign of their iOS, Android, and web applications to help
            solve these problems.
          </RightContent>
        </Row>
        <Divider />
        <Row>
          <LeftHeader>Discovery Phase</LeftHeader>
          <RightContent>
            Our users had highly specific and complex workflows, and we needed
            to make sure to thoroughly research and understand them before
            beginning. Our research included shadowing, interviewing, focus
            groups & surveys. This ranged from observing a chaotic night shift
            in a Manhattan ER, to scrubbing into the OR to see how surgical
            teams communicate. As a result, we built a stronger understanding of
            the goals & frustrations of our customers.
          </RightContent>
        </Row>
        <LargeImageTight src={Discovery} alt="Mobile Heartbeat Discovery" />
        <p>
          We chose to follow the Lean UX Canvas for initial problem definition
          to help us maintain focus and establish measurable outcomes. Through
          our process, we formulated three hypotheses to measure against. In
          addition to a complete UI redesign of the application, we focused on
          solving the core problems around our information architecture,
          physician workflow, and speed of urgent communications.
        </p>
        <LargeImageTight src={Persona} alt="Mobile Heartbeat Persona" />
        <p>
          We created personas of our core users and gave them personalities,
          goals, and priorities. This helped us journey map ideal workflows
          during the design phase, and maintain a user-centric perspective for
          the other teams throughout the process.
        </p>
        <Divider />
        <Row>
          <LeftHeader>Design Process</LeftHeader>
          <RightContent>
            The culture I worked to build was one of highly rapid, transparent,
            and collaborative design and prototyping. We began with
            brainstorming workshops, low-fidelity sketches, wireframes, and then
            increased in detail as our vision became more defined. Additionally,
            we maintained a regular feedback loop with our users throughout the
            design process.
          </RightContent>
        </Row>
        <LargeImageTight
          src={Sketch}
          alt="Mobile Heartbeat Design Process Sketch"
        />
        <p>
          Based on our user feedback, it was clear that the navigation of Mobile
          Heartbeat needed to improve. Through card sorting studies, we were
          able to simplify the navigation and organize related functionality
          into intuitive groupings on the bottom tab bar.
        </p>
        <LargeImageTight src={Wireframe} alt="Mobile Heartbeat Wireframe" />
        <p>
          By starting with wireframes we were able to ideate rapidly with
          minimal commitment. We met with stakeholders, SMEs, and users early
          and often. We progressively added detail to our concepts as we
          received buy in. Once we felt we were in a strong direction with our
          information architecture and interaction design, we focused on
          refining our visual design.
        </p>
        <Divider />
        <Row>
          <LeftHeader>Solutions</LeftHeader>
          <RightContent>
            When we felt we had solid concepts, we conducted extensive end-user
            testing to validate (or revise) our solutions before implementation.
            This included in-person user testing via InVision prototypes. We
            conducted these tests in hospitals throughout the country, and
            evolved our designs based on the feedback. As a result, we were able
            to begin development with confidence in our approach.
          </RightContent>
        </Row>
        <SolutionRow>
          <SolutionColumn>
            <SolutionImage
              src={SolutionOne}
              alt="Mobile Heartbeat Solution One"
            />
            <SmallText>
              Previously, all functionality in the app was funnelled through a
              single ’home” screen. By reorganizing our features into a bottom
              tab bar, we could move all core functionality to single press
              away, and with clear visual signifiers.
            </SmallText>
          </SolutionColumn>
          <SolutionColumn>
            <SolutionImage
              src={SolutionTwo}
              alt="Mobile Heartbeat Solution Two"
            />
            <SmallText>
              Enabling our power users was a major focus of ours. By introducing
              3D Touch and long look notifications in iOS, users could access
              deep, critical functionality from the root of the application or
              within the context of an alert.
            </SmallText>
          </SolutionColumn>
        </SolutionRow>
        <SolutionRow>
          <SolutionColumn>
            <SolutionImage
              src={SolutionThree}
              alt="Mobile Heartbeat Solution Three"
            />
            <SmallText>
              To support the physician workflow better, we designed a way for
              clinicians to select and convey their presence in multiple units
              and facilities, as providers are often highly mobile and transient
              throughout the hospital.
            </SmallText>
          </SolutionColumn>
          <SolutionColumn>
            <SolutionImage
              src={SolutionFour}
              alt="Mobile Heartbeat Solution Four"
            />
            <SmallText>
              Additionally, we expanded on the dynamic role feature, a critical
              part of the physician workflow that allowed them to assign
              themselves unique roles in the hospitals. Now users would be able
              to search/browse, favorite, text, and assign patients to dynamic
              roles.
            </SmallText>
          </SolutionColumn>
        </SolutionRow>
        <SolutionRow>
          <SolutionColumn>
            <SolutionImage
              src={SolutionFive}
              alt="Mobile Heartbeat Solution Five"
            />
            <SmallText>
              Because clinical users receive lots of communications throughout
              the day, we needed to ensure urgent notifications were never lost.
              To solve this, we created the ’urgent banner.” This element
              populates every screen when triggered and can be directly actioned
              on so the user can respond immediately. Once the notification is
              marked as read, the banner is removed.
            </SmallText>
          </SolutionColumn>
          <SolutionColumn>
            <SolutionImage
              src={SolutionSix}
              alt="Mobile Heartbeat Solution Six"
            />
            <SmallText>
              To increase the speed of critical communications, we redesigned
              the texting module. During emergencies, the user is often
              extremely stressed with a dramatically increased cognitive load.
              By having a clear visual indicator near the input, the clinician
              will intuitively be able to identify and send critical texts to
              notify the care team.
            </SmallText>
          </SolutionColumn>
        </SolutionRow>
        <Divider />
        <Row>
          <LeftHeader>Outcome</LeftHeader>
          <RightContent>
            At the time of this case study, we were in the process of beta
            testing our MVP which had been well received by users. The next
            steps were to implement NPS surveys to compare against our original
            findings, and implement Appsee to collect analytics on the increased
            speed of urgent communications. Additionally, we were accepted into
            an Apple partnership program due to our adhearance to the Human
            Interface Guidelines.
            <br />
            <br />
            We learned a lot from carrying out a product redesign of this scale.
            Platform consistency became a pain point during the design, and as a
            response we created a design system to unify our solutions. Moving
            forward, we would introduce this earlier in the process.
            Additionally, for future projects I would include more engineers and
            stakeholders in the initial discovery research, as their expertise
            would have been valuable at that initial stage.
          </RightContent>
        </Row>
      </Container>
    </OuterContainer>
  </AboutLayout>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 100pt;

  @media (max-width: ${Spacing.breakPoint}) {
    padding-right: 20pt;
    padding-left: 20pt;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700pt;
  padding-top: 80pt;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
  }
`

const LargeText = styled.h1`
  font-size: 40pt;
  margin-bottom: 10pt;
`

const PillContainer = styled.div`
  display: flex;
  margin-top: 10pt;
  margin-bottom: 40pt;
`

const CaseStudy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13pt;
  border: 1pt solid #00d332;
  height: 26pt;
  width: 100pt;
  font-size: 12pt;
  margin-right: 5pt;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 85pt;
    font-size: 9pt;
  }
`

const ProductDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13pt;
  border: 1pt solid #00b8ff;
  height: 26pt;
  width: 108pt;
  font-size: 12pt;
  margin-right: 5pt;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 85pt;
    font-size: 9pt;
  }
`

const UxDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13pt;
  border: 1pt solid #ff6f00;
  height: 26pt;
  width: 85pt;
  font-size: 12pt;
  margin-right: 5pt;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 85pt;
    font-size: 9pt;
  }
`

const WelcomeText = styled.p`
  font-size: 20pt;
  line-height: 25pt;
`

const LargeImage = styled.img`
  margin-top: 100pt;
  margin-bottom: 100pt;
`

const LargeImageTight = styled.img`
  margin-top: 100pt;
  margin-bottom: 20pt;
`

const SolutionImage = styled.img`
  margin-bottom: 20pt;
`

const Row = styled.div`
  display: flex;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
  }
`

const SolutionRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100pt;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
    margin-top: 0;
  }
`

const SolutionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280pt;

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: 50pt;
  }
`

const LeftHeader = styled.h2`
  font-size: 40pt;
  display: flex;
  width: 100%;

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: 20pt;
  }
`

const RightContent = styled.p`
  display: flex;
  width: 100%;
`

const Divider = styled.div`
  border-bottom: 1pt solid black;
  margin-top: 100pt;
  margin-bottom: 100pt;
  width: 100%;
`

const SmallText = styled.p`
  font-size: 10pt;
  line-height: 14pt;
`

export default MobileHeartbeatPage
