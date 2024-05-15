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

const Ads = () => (
  <Layout>
    <Seo title="Sales Quoting Tool" />
    <Container>
      <Menutest1 />
      <Main id="top">
        <Header>
          <HeaderTitle>Sales Quoting Tool</HeaderTitle>
          <HeaderDescription>
            ADS is a growing logistics company that handles supply chain
            management - their 220 salespeople write around 40-50k quotes a
            year. Their existing quoting tool, a module built on top of
            Salesforce, was dated and becoming unworkable, affecting the team's
            overall morale and profitability. Thoughtbot was hired in 2019 to
            re-evaluate their existing quoting process and provide a solution
            that would allow them to break free from the Salesforce module and
            increase the speed and accuracy of the quoting process.
          </HeaderDescription>
        </Header>
        <IntroImage
          src={Images.AdsBackground}
          alt="Personalized HPE GreenLake dashboard over a textured background"
        />
        <LightSection>
          <Title>My Role</Title>
          <Description>
            I led all design efforts including initial discovery & ideation
            workshops, user testing, initial MVP design & execution, and
            iteration alongside customer teams. I implemented the front-end UI
            (React) alongside full stack developers. I collaborated with
            Thoughtbot & client developers, product managers, Salesforce
            engineers, executive stakeholders, and salesperson SMEs.
          </Description>
        </LightSection>
        <DarkSection>
          <PreTitle>Discovery</PreTitle>
          <Title>Understanding the problem & validating the approach</Title>
          <Description>
            ADS works in a highly specialized, complex industry - I wanted to
            begin with a design sprint to clearly understand the problems we
            needed to solve before jumping into the engagement. I extended the
            understand phase by two additional days to ensure I could ramp up on
            the existing product and understand our user personas, and included
            two rounds of prototyping & interviewing since we had a large group
            of users available for the full week. I typically treat the design
            sprint as a toolbox over a rigid format - each exercise is a tool
            that can be leveraged differently each time to complete the job at
            hand.
          </Description>
          <CaseImageFull src={Images.AdsSketches} alt="" />
        </DarkSection>
        <LightSection>
          <PreTitle>Planning</PreTitle>
          <Title>Tightly scoping our MVP</Title>
          <Description>
            Determining our MVP scope was a careful balancing act between
            business and user needs. We had a tight deadline to roll out the new
            tool before the customer had to renew their expensive contract with
            the Salesforce module for another year. However, we needed to ensure
            that the replacement would solve our user problems and satisfy our
            success metrics determined in our PDS.
          </Description>
          <TwoColumn>
            <Column>
              <SubTitle>Understanding tradeoffs</SubTitle>
              <Description>
                MVP scoping is difficult and tradeoffs are almost always made.
                It is important to articulate them, identify the risks
                associated with making them, and ensure consensus before moving
                forward.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationTradeoffs} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Establishing KPIs</SubTitle>
              <Description>
                Our KPIs were specific because of our clear and concise problem
                statement. We needed to measurably increase performance, speed
                of quoting, and NPS score of our users.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.PersonalizationData} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Reinforcing iteration</SubTitle>
              <Description>
                It is always important to communicate to users that an MVP is
                not the final product, but more the start. The goal is to get
                working software in the hands of users as soon as possible and
                iterate from there.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.AdsIteration} alt="" />
            </Column>
          </TwoColumn>
        </LightSection>
        <DarkSection>
          <PreTitle>Architecture</PreTitle>
          <Title>Establishing a design system early & evangelizing it</Title>
          <Description>
            Because ADS had plans to grow the tool over time and build a suite
            of products, we wanted to scale appropriately by establishing a
            design system early in the engagement. This helped inform our design
            process and articulate design decisions to the customer throughout
            the engagement. I'm a big fan of atomic design systems for larger
            projects, especially with customers without prior design system
            experience. The chemistry analogy is understandable and elegant and
            translates well to UI components. We chose to build and maintain the
            system in Figma as it serves as a great centralized and dynamic
            resource to maintain a single source of truth.
          </Description>
          <CaseImageFull src={Images.AdsDesignSystem} alt="" />
        </DarkSection>
        <LightSection>
          <PreTitle>Collaboration</PreTitle>
          <Title>Partnering with users to iterate on our design</Title>
          <Description>
            This engagement was a rare opportunity for me - because this was an
            enterprise tool being built for a specific sales team, we had
            regular access to our complete group of active users. I wanted to
            ensure we leveraged this access and built a formal user group that
            we met weekly with to review design work. The members of this group
            rotated monthly to ensure we diversified our feedback. Additionally,
            we regularly sent out surveys to the full team to provide feedback
            on mockups and prototypes to ensure we amplified the quieter voices
            on the team.
          </Description>
          <CaseImageFull src={Images.AdsDashboard} alt="" />
        </LightSection>
        <DarkSection>
          <PreTitle>Design</PreTitle>
          <Title>Providing context with simple data visualizations</Title>
          <Description>
            Many of our users were juggling multiple quotes with hundreds of
            lines at a time. They often had to switch contexts quickly, often in
            the middle of calls with suppliers or purchasers. We wanted to make
            sure we presented the overall state of a quote through simple data
            visualizations that could be digested at a glance. Through
            interviewing and surveying, we determined that the quote status, win
            percentage, and overall validation of the lines were the most
            important items that needed to be visually amplified. This helped
            users jump into quotes and switch contexts faster.
          </Description>
          <CaseImageBorder src={Images.AdsData} alt="" />
        </DarkSection>
        <LightSection>
          <PreTitle>Design</PreTitle>
          <Title>
            Providing inline feedback on quote completion & accuracy
          </Title>
          <Description>
            Building a quote is complex, and many of the fields are
            interdependent on each other. As the complexity of a quote grows and
            more constraints and validations are added, the risk of adding
            inconsistencies and errors grows as well. The previous tool did not
            communicate validations to the user until the final submission of
            the quote - we wanted to ensure we were providing this information
            in real-time, so the user could contextually understand the impact
            of the changes they were making and action on the in context. This
            helped users feel confident in the accuracy of their quote when it
            came time to export, improving both the speed and accuracy of the
            overall process.
          </Description>
          <CaseImageFull src={Images.AdsInline} alt="" />
        </LightSection>
        <DarkSection>
          <PreTitle>Design</PreTitle>
          <Title>Reducing unnecessary manual data entry</Title>
          <Description>
            A section of our user group reported quotes with hundreds of lines
            which would take them days to complete with the previous tool. Upon
            further examination, many of the quotes had fields that were
            repetitively applied throughout. We added the ability to apply a
            field value to the entire quote, saving hours from the process and
            reducing mistakes from dull manual entry. Additionally, we examined
            the relationship salespeople had with purchasers to find more
            opportunities for optimization. Purchasers would often send them CSV
            files with their order requests that the salespeople would then
            manually translate into the quoting tool. By building out a bulk
            upload feature, we were able to dramatically reduce the speed &
            inaccuracies associated with manual data entry.
          </Description>
          <CaseImageBorder src={Images.AdsApply} alt="" />
        </DarkSection>
        <LightSection>
          {" "}
          <PreTitle>Wrapup</PreTitle>
          <Title>Measuring Success</Title>
          <Description>
            While we kept our KPIs in mind throughout the entire design process,
            we developed a plan to formally evaluate them after launching the
            MVP. Over the course of the next month, we sent out NPS score
            surveys to compare general opinion between the old and new quoting
            tools. Additionally, the customer was able to track the speed of
            quote fulfillment and accuracy on their end, providing a mix of
            qualitative and quantitative analysis.
          </Description>
          <TwoColumn>
            <Column>
              <SubTitle>Improving Speed</SubTitle>
              <Description>
                Our implementations of bulk upload, inline validations, overall
                performance, and general usability improvements dramatically
                increased the speed of quoting.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.AdsSpeed} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Improving accuracy</SubTitle>
              <Description>
                Inline validations had a dramatic impact on the auditing team as
                we were able to identify and resolve errors in the quoting
                process before moving them forward for review.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.AdsAccuracy} alt="" />
            </Column>
          </TwoColumn>
          <TwoColumn>
            <Column>
              <SubTitle>Next steps</SubTitle>
              <Description>
                We provided the customer with a plan on how to iterate on our
                designs after the engagement. Maintaining the formal user group
                and regular surveys were critical to this process.
              </Description>
            </Column>
            <Column>
              <CaseImageHalf src={Images.AdsNextsteps} alt="" />
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
            <UpNext to={"../theskills"}>Early Startup MVP</UpNext>
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

const CaseImageBorder = styled.img`
  width: 100%;
  padding: 30px;
  background: white;
`

export default Ads
