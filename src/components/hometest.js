import React from "react"
import styled from "styled-components"
import Menutest1 from "./menutest1"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import { Images } from "../images"
import { Typography } from "../styles/variables"

const Hometest = () => (
  <Container>
    <Menutest1 />
    <Main>
      <Header>
        <WelcomeHeading>Hi, I'm Jeff!</WelcomeHeading>
        <WelcomeSubheading>
          I'm a product designer who creates simple & powerful experiences
        </WelcomeSubheading>
        <LinkRow>
          <ScrollLink
            activeClass="active"
            to={"case-studies"}
            spy={true}
            smooth={true}
            duration={700}
          >
            <HeaderLink>View my work</HeaderLink>
          </ScrollLink>
          <Divider>|</Divider>
          <HeaderLink to={"about"}>Learn about me</HeaderLink>
        </LinkRow>
      </Header>
      <Cases id="case-studies">
        <CaseCard>
          <CaseThumbnail src={Images.PersonalizationThumb} alt="" />
          <CaseCopy>
            <CaseSubheading>HPE GreenLake</CaseSubheading>
            <CaseHeading>Platform Personalization</CaseHeading>
            <CaseDescription>
              Led the HPE GreenLake Platform towards a personalized user
              experience strategy. Formed the overall product direction, gained
              executive buy-in, introduced it into the product roadmap, and
              expanded & iterated on the experience.
            </CaseDescription>
            <CaseLink to="personalization">View case study</CaseLink>
          </CaseCopy>
        </CaseCard>
        <CaseCard>
          <CaseThumbnail src={Images.AdsThumbnail} alt="" />
          <CaseCopy>
            <CaseSubheading>Thoughtbot</CaseSubheading>
            <CaseHeading>Sales Quoting Tool</CaseHeading>
            <CaseDescription>
              Designed & developed a product dedicated to improving speed &
              accuracy of quoting for enterprise salespeople. An approach to
              reducing cognitive load for a data-heavy process and providing
              structure to a rapidly growing organization.
            </CaseDescription>
            <CaseLink to="ads">View case study</CaseLink>
          </CaseCopy>
        </CaseCard>
        <CaseCard>
          <CaseThumbnail src={Images.SkillsThumbnail} alt="" />
          <CaseCopy>
            <CaseSubheading>Thoughtbot</CaseSubheading>
            <CaseHeading>Early Startup MVP</CaseHeading>
            <CaseDescription>
              Designed & developed a product dedicated to providing high school
              & amateur athletes with a place to learn from their idols. An
              example around prioritizing features, mitigating assumptions, and
              building an MVP within a six-week timeline.
            </CaseDescription>
            <CaseLink to="theskills">View case study</CaseLink>
          </CaseCopy>
        </CaseCard>
        {/* <CaseCard>
          <CaseThumbnail src={Images.DragonThumbnail} alt="" />
          <CaseCopy>
            <CaseHeading>Unified Platform Strategy</CaseHeading>
            <CaseDescription>
              Co-led the effort to consolidate over ten products across the
              company into a unified GreenLake Platform experience. Introduced
              key features like global search/navigation & drove the
              organization-wide shift towards a service-centric architecture.
            </CaseDescription>
            <CaseLink to="platform">View case study</CaseLink>
          </CaseCopy>
        </CaseCard> */}
        {/* <CaseCard>
          <CaseThumbnail src={Images.MhThumbnail} alt="" />
          <CaseCopy>
            <CaseHeading>Cloud Marketplace</CaseHeading>
            <CaseDescription>
              Led the design of a third-party software marketplace on the HPE
              GreenLake Platform. Helped expand the HPE Technology Partner
              Program by 23%.
            </CaseDescription>
            <CaseLink to="marketplace">View case study</CaseLink>
          </CaseCopy>
        </CaseCard> */}
        {/* <CaseCard>
          <CaseThumbnail src={Images.SkillsThumbnail} alt="" />
          <CaseCopy>
            <CaseHeading>Building a Lean UX Culture</CaseHeading>
            <CaseDescription>
              A collection of case studies from my time as a product design
              consultant at Thoughtbot. Led clients through early product
              strategy, initial product launch, rapid validation, and roadmap
              planning.
            </CaseDescription>
            <CaseLink to="leanux">View case study</CaseLink>
          </CaseCopy>
        </CaseCard> */}
      </Cases>
    </Main>
  </Container>
)

const Container = styled.div`
  display: flex;

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
  align-items: center;
  justify-content: center;
  background-color: #1a1e23;
  height: 580px;
  padding: 0 40px;
  margin-bottom: 50px;
`

const WelcomeHeading = styled.h2`
  color: #b5b5b5;
  font-size: 30px;
  font-style: italic;
  font-weight: 300;
  font-family: Georgia, serif;
`

const WelcomeSubheading = styled.h3`
  color: #f3f5f6;
  font-size: 55px;
  text-align: center;
  font-family: ${Typography.headingFontFamilyAlt};
  font-weight: 400;
  padding: 25px 0 45px 0;
  max-width: 700px;
`

const LinkRow = styled.div`
  display: flex;
`

const HeaderLink = styled(Link)`
  color: #ef5350;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  &:hover {
    cursor: pointer;
    color: #d21714;
    text-decoration: underline;
  }
`

const Divider = styled.div`
  color: #474d55;
  padding: 0 20px;
`

const Cases = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`

const CaseCard = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 80px;
  margin-bottom: 25px;

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 50px;
  }
`

const CaseThumbnail = styled.img`
  height: 300px;
  width: 300px;
  background-color: blue;
  margin-right: 80px;

  @media (max-width: 1400px) {
    height: 150px;
    width: 150px;
    margin-right: 40px;
  }

  @media (max-width: 750px) {
    margin-bottom: 40px;
  }
`

const CaseCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CaseHeading = styled.h4`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 40px;
  color: #252b33;
  margin-bottom: 20px;
`

const CaseSubheading = styled.h5`
  font-family: ${Typography.headingFontFamilyAlt};
  font-size: 20px;
  color: #6e7581;
  font-weight: 300;
  padding-bottom: 10px;
`

const CaseDescription = styled.p`
  font-family: Georgia, serif;
  font-size: 20px;
  color: #474d55;
  max-width: 650px;
  margin-bottom: 20px;
`

const CaseLink = styled(Link)`
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

export default Hometest
