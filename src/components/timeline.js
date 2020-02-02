import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Timeline = () => (
  <OuterContainer>
    <Container>
      <Job>
        <Title>Product Design Consultant</Title>
        <Company>thoughtbot</Company>
        <Dates>Oct 18 - Current</Dates>
        <Description>
          Led customer engagements from initial concept to full implementation
          of web and mobile applications. Facilitated design sprints with
          clients. Counseled customers on process improvement techniques
          centered around lightweight, Agile methodologies. Mentored designers
          within thoughtbot and on client teams. Collaborated with customers
          such as GE, Alyce, CypherBio, ViralGains, and SplitFit. Worked
          primarily in Rails, React, React Native, and Elm.
        </Description>
      </Job>
      <Job>
        <Title>UX Lead</Title>
        <Company>Mobile Heartbeat</Company>
        <Dates>Feb 17 - Oct 18</Dates>
        <Description>
          Responsible for driving & evangelizing all design efforts for a
          clinical communication company present in over 92 hospitals with over
          79,000 active users. Regularly shadowed clinicians, ran focus groups,
          user testing sessions, & design symposiums with users. Established a
          design culture & managed a team of two designers.
        </Description>
      </Job>
      <Job>
        <Title>Senior Design Consultant</Title>
        <Company>Pegasystems</Company>
        <Dates>Sep 16 - Feb 17</Dates>
        <Description>
          Led the UI design & development of product implementations with client
          teams. Included an initiative at DLL Group, a 5,500 member global
          vendor finance company, to develop a design system across the company.
        </Description>
      </Job>
      <Job>
        <Title>UX Designer</Title>
        <Company>HMH Labs</Company>
        <Dates>Jul 13 - Sep 16</Dates>
        <Description>
          Original member of Schoolchapters, an e-portfolio startup, until
          successful acquisition by HMH in 2014. Responsible for UX design and
          front-end development of the HMH Marketplace, an online marketplace
          for educators. Users included Google, Microsoft, and Highlights
          Magazine. Worked primarily in Rails.
        </Description>
      </Job>
      <Job>
        <Title>Freelance Web Designer</Title>
        <Company>Jeff Stolz Design</Company>
        <Dates>Nov 11 - Jul 13</Dates>
        <Description>
          Designed mobile and web applications for clients including People’s
          Medical, CONNSACS, SilverBull, Boston Beer Works, The Melting Pot, and
          Southport Brewing Company.
        </Description>
      </Job>
      <Job>
        <Title>Architectural Designer</Title>
        <Company>AE Design Group</Company>
        <Dates>May 05 - Nov 11</Dates>
        <Description>Created graphics and architectural designs. </Description>
      </Job>
      <Divider />
      <Job>
        <Education>Education</Education>
        <Company>Virginia Tech</Company>
        <Dates>
          Bachelor of Architecture <br />
          2010
        </Dates>
        <Company>Firehose Coding Bootcamp</Company>
        <Dates>
          Certificate <br />
          2015
        </Dates>
      </Job>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: ${Spacing.pageBottom};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-left: ${Spacing.base};
    padding-right: ${Spacing.base};
    margin-top: ${Spacing.huge};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`
const Job = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${Spacing.medium};
`

const AboutHeading = styled.h2`
  text-transform: uppercase;
  font-weight: ${Typography.lightFontWeight};
  font-size: ${Typography.mediumFontSize};
`

const Title = styled(AboutHeading)`
  color: ${Colors.navy};
`

const Education = styled(AboutHeading)`
  color: ${Colors.purple};
`

const Company = styled.h3`
  font-size: ${Typography.baseFontSize};
  line-height: ${Typography.largeLineHeight};
`

const Dates = styled.p`
  line-height: ${Typography.largeLineHeight};
`

const Description = styled.p``

const Divider = styled.div`
  width: 100%;
  margin-bottom: ${Spacing.large};
  border-bottom: 1pt solid ${Colors.black};
`

export default Timeline
