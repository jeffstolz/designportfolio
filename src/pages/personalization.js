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

const Personalization = () => (
  <Layout>
    <Seo title="Platform Personalization" />
    <Container>
      <Menutest1 />
      <Main id="top">
        <Header>
          <HeaderTitle>Platform personalization</HeaderTitle>
          <HeaderDescription>
            In early 2023, I was tasked with designing dashboard visualizations
            for HPE GreenLake, the company's flagship platform aimed at helping
            customers manage their on-premises IT infrastructure and resources.
            My research & explorations led to a strategic shift towards a
            broader personalization initiative, which transformed into a key
            strategy for the organization.
          </HeaderDescription>
        </Header>
        <IntroImage
          src={Images.PersonalizationBg}
          alt="Personalized HPE GreenLake dashboard over a textured background"
        />
        <LightSection>
          <PreTitle>Overview</PreTitle>
          <Title>The Challenge</Title>
          <Description>
            Traditionally, the HPE GreenLake Platform was designed as a
            "one-size-fits-all" solution, primarily catering to administrators.
            However, a diverse array of users with different needs found the
            platform lacking an understanding of their needs, which led them to
            adopt third-party tools to manage their IT estate. This not only
            resulted in decreased revenue for the company but also eroded user
            confidence in the product.
          </Description>
          <TwoColumn>
            <Column>
              <SubTitle>My Role</SubTitle>
              <Description>
                I introduced the strategy, gained executive buy-in, introduced
                it into the product roadmap, led the MVP design from conception
                through implementation, and continued to lead a team of
                designers as they iterated on this approach.
              </Description>
            </Column>
            <Column>
              <SubTitle>Collaborators</SubTitle>
              <Description>
                I worked alongside researchers, product managers, the design
                system team, engineering, and marketing. Included collaboration
                with the platform teams as well as our storage, networking,
                compute, and support business units.
              </Description>
            </Column>
          </TwoColumn>
        </LightSection>
        <DarkSection>
          <PreTitle>Discovery</PreTitle>
          <Title>Looking beyond the request</Title>
          <Description>
            This project began as a simple request: design some data
            visualizations that all users would find useful on the platform
            homepage. I began with a stakeholder workshop to identify
            opportunities to surface data on the platform, but we quickly
            learned that we were generalizing a solution-first approach. I
            reframed the task into a question: "what do users what to accomplish
            when they first enter the platform?" This gave us a proper starting
            point to explore the problem space.
          </Description>
          <CaseImageFull src={Images.PersonalizationWorkshop} alt="" />
          <TwoColumn>
            <Column>
              <SubTitle>Defining Jobs to be done</SubTitle>
              <Description>
                The team had collected a series of user personas that focused on
                user mindsets but lacked clearly defined user goals. I'm a big
                fan of jobs to be done for their focus on behaviors and changing
                context, and worked with the team to explore these before
                arriving at our solution.
              </Description>
            </Column>
            <Column>
              <CaseImageContainer>
                <CaseImageHalf src={Images.PersonalizationJtbd} alt="" />
              </CaseImageContainer>
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>A variety of users and needs</SubTitle>
              <Description>
                It became apparent quickly that there was no way to provide a
                static set of data visualizations that all users would value,
                due to our variety of IT infrastructure configurations, user
                roles & privileges, and resource types.
              </Description>
            </Column>
            <Column>
              <CaseImageContainer>
                <CaseImageHalf src={Images.PersonalizationMindsets} alt="" />
              </CaseImageContainer>
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Problem Statement</SubTitle>
              <Description>
                We all aligned on a problem statement that better framed the
                issue users were facing. This served as an anchor to our team
                when conversations began to shift towards premature solutions or
                unfocused brainstorming.
              </Description>
            </Column>
            <Column>
              <CaseImageContainer>
                <CaseImageHalf src={Images.PersonalizationProblem} alt="" />
              </CaseImageContainer>
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Thinking architecturally</SubTitle>
              <Description>
                Our discovery explorations forced us to change our thinking: as
                a platform, we couldn't dig into a few core personas and solve
                their specific problems. We needed to create solutions that
                would scale for a variety of use cases, both known and unknown.
              </Description>
            </Column>
            <Column>
              <CaseImageContainer>
                <CaseImageHalf
                  src={Images.PersonalizationArchitecture}
                  alt=""
                />
              </CaseImageContainer>
            </Column>
          </TwoColumn>
        </DarkSection>
        <LightSection>
          <PreTitle>The vision</PreTitle>
          <Title>Empowering our users</Title>
          <Description>
            With our new mindset, we dug deeper into where users would benefit
            from configuration & customization within their GreenLake experience
            to achieve their individual outcomes. As part of our brainstorming
            exercises, we created some end-to-end high level critical paths to
            help identify broader pain points and opportunities.
          </Description>
          <CaseImageFull src={Images.PersonalizationPath} alt="" />
          <TwoColumn>
            <Column>
              <SubTitlePadded>Surfacing Priorities</SubTitlePadded>
              <Description>
                We ran a quick cost-benefit analysis to determine what we should
                focus our efforts exploring.
              </Description>
            </Column>
            <Column>
              <SubTitlePadded>Discussing metrics early</SubTitlePadded>
              <Description>
                To remain outcome focused, we kept KPIs and metrics in mind
                early to ensure we were measuring our success.
              </Description>
            </Column>
          </TwoColumn>
        </LightSection>
        <DarkSection>
          <PreTitle>Early Explorations</PreTitle>
          <Title>Customizable dashboards</Title>
          <Description>
            Past user testing pointed to the greatest opportunity for
            personalization at the root platform experience. Managing the IT
            operations of a large organization is complex, and users wanted
            essential information surfaced when they first logged in to help
            answer the questions "what is most critical?" and "what should I do
            first?"
          </Description>
          <TwoColumn>
            <Column>
              <SubTitlePadded>Single pane of glass</SubTitlePadded>
              <Description>
                Users voiced frustration over their vendor-provided dashboards,
                and needed something that better understood their unique goals.
              </Description>
              <CaseImageFull src={Images.PersonalizationGlass} alt="" />
            </Column>
            <Column>
              <SubTitlePadded>Library of widgets</SubTitlePadded>
              <Description>
                Users expected a broad library of widgets that balanced
                simplicity with depth, and that offered immediate insights &
                access to detailed data if needed.
              </Description>
              <CaseImageFull src={Images.PersonalizationLibrary} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitlePadded>Quick actions</SubTitlePadded>
              <Description>
                Users spoke to a collection of common actions easily accessible
                in the platform, with the ability to tailor them as needed.
              </Description>
              <CaseImageFull src={Images.PersonalizationQuick} alt="" />
            </Column>
            <Column>
              <SubTitlePadded>Recommendations</SubTitlePadded>
              <Description>
                There were opportunities to elevate the value of our platform
                through useful, personalized recommendations.
              </Description>
              <CaseImageFull
                src={Images.PersonalizationRecommendations}
                alt=""
              />
            </Column>
          </TwoColumn>
        </DarkSection>
        <LightSection>
          <PreTitle>User testing</PreTitle>
          <Title>Gathering feedback before committing</Title>
          <Description>
            We had high confidence in our assumptions that users wanted
            configurable dashboards in their GreenLake experience, but knew it
            would be a tough sell to get into our product roadmap. We ran a 10
            person study to gut check the idea, learn more about user
            expectations, and gather some data to help make our pitch.
          </Description>
          <SubTitlePadded>Participatory design study</SubTitlePadded>
          <Description>
            Interview participants created their ideal dashboard arrangement &
            created their own widgets to achieve their specific goals &
            outcomes.
          </Description>
          <CaseImageFull src={Images.PersonalizationParticipatory} alt="" />
          <SubTitlePaddedMore>
            Greenlight to continue forward
          </SubTitlePaddedMore>
          <Description>
            10/10 users were excited about the idea of a configurable dashboard
            to help manage their GreenLake estate. While this met our
            assumption, we learned plenty from the interview: users expected far
            more customization than we originally anticipated, including the
            ability to create their own widgets.
          </Description>
          <CaseImageFull src={Images.PersonalizationReadout} alt="" />
        </LightSection>
        <DarkSection>
          <PreTitle>Evangelization</PreTitle>
          <Title>Selling the idea internally</Title>
          <Description>
            At HPE, designers have historically had little influence on the
            product roadmap, and usually received requirements downstream for
            implementation. This posed a challenge getting this initiative,
            which had a demonstrable need & value, into the hands of end users.
            I needed to flip this narrative, and pitched a north star vision
            directly to the CTO. With executive buy-in, we had a path to our
            product roadmap.
          </Description>
          <SubTitlePaddedMore>A dashboard for admins</SubTitlePaddedMore>
          <Description>
            One of our example dashboards was built for admin who was primarily
            focused on billing & management of their overall IT estate.
          </Description>
          <CaseImageFull src={Images.PersonalizationPitch} alt="" />
          <SubTitlePaddedMore>A dashboard for executives</SubTitlePaddedMore>
          <Description>
            Another dashboard example focused on user management and the
            ecological footprint of their resources.
          </Description>
          <CaseImageFull src={Images.PersonalizationPitchTwo} alt="" />
          <SubTitlePaddedMore>A dashboard for technologists</SubTitlePaddedMore>
          <Description>
            Our third example focused on a developer who wanted to elevate some
            detailed data from the networking service that they are responsible
            for managing closely.
          </Description>
          <CaseImageFull src={Images.PersonalizationPitchThree} alt="" />
        </DarkSection>
        <LightSection>
          <PreTitle>Implementation</PreTitle>
          <Title>Validating with an MVP</Title>
          <Description>
            Although our initiative made it into the product roadmap, limited
            engineering resources were dedicated to the effort: we'd have to
            make early consolidations to get this shipped.
          </Description>
          <SubTitlePaddedMore>A limited library</SubTitlePaddedMore>
          <Description>
            We ran another cost-benefit analysis with SMEs across the org to
            determine what our initial library of widgets would be. We knew we
            wouldn't cover all cases, but targeted the highest value to the most
            users.
          </Description>
          <CaseImageFull src={Images.PersonalizationWidgets} alt="" />
          <SubTitlePaddedMore>Starting small</SubTitlePaddedMore>
          <Description>
            Rather than dedicating the entire home experience to the dashboard
            concept, we started small so we can learn more from our users before
            fully committing.
          </Description>
          <CaseImageFull src={Images.PersonalizationMvpdash} alt="" />
          <SubTitlePaddedMore>Editable quick links</SubTitlePaddedMore>
          <Description>
            Before building out the quick actions feature, we tested our edit
            patterns with our existing quick links.
          </Description>
          <CaseImageFull src={Images.PersonalizationEditlinks} alt="" />
          <TwoColumn>
            <Column>
              <SubTitlePadded>Design System Contributions</SubTitlePadded>
              <Description>
                Many of our patterns stretched our design system, and we worked
                with the team to contribute back to the library.
              </Description>
              <CaseImageHalf />
            </Column>
            <Column>
              <SubTitlePadded>Beta Release</SubTitlePadded>
              <Description>
                We shipped the MVP to a limited number of willing participants
                in collaboration with our customer relations team.
              </Description>
              <CaseImageHalf />
            </Column>
          </TwoColumn>
        </LightSection>
        <DarkSection>
          <PreTitle>Metrics</PreTitle>
          <Title>Measuring Success</Title>
          <Description>
            Gathering metrics can be challenging at HPE - customer relationships
            are carefully guarded and quantitative analytics are limited. We
            established our KPIs with the understanding that hard data was
            scarce and we would have to trust some of our core assumptions and
            respond to feedback from beta participants.
          </Description>
          <CaseImageFull src={Images.PersonalizationKpi} alt="" />
          <TwoColumn>
            <Column>
              <SubTitlePadded>Hitting our KPIs</SubTitlePadded>
              <Description>
                As part of our drive towards an outcomes over output
                transformation across the org, I pushed for establishing KPIs
                for us to track and measure against post MVP launch. We are
                still working to hit our goals before going GA.
              </Description>
            </Column>
            <Column>
              <SubTitlePadded>Introducing Analytics</SubTitlePadded>
              <Description>
                Although we were unable to get it set up for MVP launch, we have
                since used Amplitude to track usage and user behavior within the
                platform. It's help us track adoption, widget usage, and
                identify pain points in the experience.
              </Description>
            </Column>
          </TwoColumn>
        </DarkSection>
        <LightSection>
          <PreTitle>Next Steps</PreTitle>
          <Title>Learning & Iterating</Title>
          <Description>
            Through surveys, conversations with our beta participations, and
            post-beta amplitude metrics, we were able to learn a lot from our
            users. This helped inform our product roadmap ahead.
          </Description>
          <SubTitlePaddedMore>Tailored user onboarding</SubTitlePaddedMore>
          <Description>
            We introduced a personalized onboarding experience based on the
            user's roles & self defined goals so we could anticipate their needs
            are reduce the manual configuration.
          </Description>
          <CaseImageFull src={Images.PersonalizationOnboarding} alt="" />
          {/* <SubTitlePaddedMore>Resizable dashboard widgets</SubTitlePaddedMore>
          <Description>
            We iterated on our designs to include the more flexible UI
            configuration requested by users from our study.
          </Description> */}
          {/* <SubTitlePaddedMore>Expanding our widget library</SubTitlePaddedMore>
          <Description>
            Users & internal stakeholders came to us with plenty of ideas for
            how we could expand our widget library, requiring us to scale up how
            users searched for, and configured, their widgets.
          </Description>
          <CaseImageFull /> */}
          <SubTitlePaddedMore>Personalized global search</SubTitlePaddedMore>
          <Description>
            We found near term opportunities to integrate personalization into
            our global platform search through a pin search functionality.
          </Description>
          <CaseImageFull src={Images.PersonalizationPin} alt="" />
          <SubTitlePaddedMore>Service recommendations</SubTitlePaddedMore>
          <Description>
            The platform would also recommend related services to users based on
            their related services & role (rather than a static list).
          </Description>
          <CaseImageFull src={Images.PersonalizationRecommendservice} alt="" />
          {/* <SubTitlePaddedMore>User preferences service</SubTitlePaddedMore>
          <Description>
            We created a centralized preferences service to allow users to
            configure their experience at a global, workspace, and service
            level.
          </Description>
          <CaseImageFull /> */}
        </LightSection>
        <DarkSection>
          <PreTitle>Thinking ahead</PreTitle>
          <Title>Leveraging AI</Title>
          <Description>
            The rise of AI/ML has opened the doors for deeper personalization in
            all software experiences, creating a huge opportunity for product
            designers to go beyond user configuration and proactively anticipate
            user needs. I dedicated some time, through course work &
            conferences, to better educate myself on the subject, and came back
            with recommendations on how we could leverage this technology for
            our GreenLake users.
          </Description>
          <TwoColumn>
            <Column>
              <SubTitle>Conversational AI</SubTitle>
              <Description>
                Our platform user needs are diverse, and it's difficult to
                account for all considertions in our UI. Conversational AIs can
                simulate the "white glove" experience and act as a helpful
                companion along the user journey.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf
                src={Images.PersonalizationConversational}
                alt=""
              />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Generative AI</SubTitle>
              <Description>
                The current platform experience relies on a lot of manual data
                entry in multiple contexts. Generative AI could provide
                opportunities for bulk actions and automation.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationGenerative} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Recommendation engine</SubTitle>
              <Description>
                Leveraing retrival-augmented generation (RAG) could help our
                platform provide intelligent recomendations from relevant data &
                user behaviors. This could be particularly useful for complex,
                multi-tenant IT estates.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationRecommend} alt="" />
            </Column>
          </TwoColumn>
          <SubTitlePaddedMore>GreenLake AI Companion</SubTitlePaddedMore>
          <Description>
            Through our Innovation Lab, we experimented with conversational AI
            to assist the user through their platform experience to help with
            knowledge gathering, navigation, automation, and optimization.
          </Description>
          <CaseImageFull src={Images.PersonalizationChathpe} alt="" />
          <SubTitlePaddedMore>Intelligent Search Results</SubTitlePaddedMore>
          <Description>
            We also experimented with ML to provide meaningful search results
            based on the user's context, behavior, and role.
          </Description>
          <CaseImageFull src={Images.PersonalizationSearch} alt="" />
          <SubTitlePaddedMore>Contextual Recommendations</SubTitlePaddedMore>
          <Description>
            Providing recommendations through push notifications could help
            surface opportunities to optimize the user's IT estate and show the
            value of extending into other GreenLake services.
          </Description>
          <CaseImageFull src={Images.PersonalizationSmartwidgets} alt="" />
        </DarkSection>
        <LightSection>
          <PreTitle>Debrief</PreTitle>
          <Title>Lessons Learned</Title>
          <Description>
            Every project creates opportunities to learn and grow as a designer.
            This particular effort taught me a lot about design leadership and
            user advocacy. I also learned a great deal about the emerging field
            of AI/ML.
          </Description>
          <TwoColumn>
            <Column>
              <SubTitle>Presenting to Executives</SubTitle>
              <Description>
                This was the first time I presented to a senior executives at a
                Fortune 100 company. Similary to how we design software, it was
                important to tailor the message to the audience and understand
                their motivations.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationPresenting} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>The value of quantitative data</SubTitle>
              <Description>
                Once we implemented Amplitude in the platform, we learned a
                great deal about user patterns and behavior. Qualitative
                interviewing is great, but needs to be paired with hard data for
                the complete picture of user activity and motivations.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationData} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Making tradeoffs</SubTitle>
              <Description>
                Shipping software in a large enterprise is challenging. It's
                important to approach blockers and constraints with empathy and
                curiosity, and work with the team to get the best solution to
                the user. "Perfection is the enemy of progress."
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationTradeoffs} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>AI is here to help</SubTitle>
              <Description>
                It's natural to feel threatened by how AI is changing the
                landscape of software and design. However, it can be an
                incredible asset when seen as a companion to help users navigate
                the complexities of their experience & anticipate their needs.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationAihelp} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Design leadership</SubTitle>
              <Description>
                This project required me to step outside of my comfort zone and
                advocate for an idea across the company. It required a lot of
                evangelization, coordination, and cooperation. The success of
                this initiative greatly built my confidence led to my promotion
                to principal designer.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationLeadership} alt="" />
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
            <UpNext to={"../ads"}>Sales Quoting Tool</UpNext>
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

export default Personalization
