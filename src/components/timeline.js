import React from "react"
import styled from "styled-components"

const Timeline = () => (
  <OuterContainer>
    <Container>
      <Job>
        <Title>Product Design Consultant</Title>
        <Company>thoughtbot</Company>
        <Dates>Oct 18 - Current</Dates>
        <Description>
          Led customer engagements from initial concept to full implementation
          of web and mobile applications. Design responsibilities included
          product, visual, ux, and interaction design as well as information
          architecture, usability testing, and front end development.
          Facilitated design sprints and other design thinking exercises with
          clients. Mentored designers within thoughtbot and on client teams,
          hosted meetup groups, and blogged about best practices. Couselled
          customers on process improvement techniques centered around
          lightweight, Agile methodologies. Developed design systems and coached
          clients on how to maintain and evolve them. Collaborated with
          customers such as GE, Dragon Innovation, CypherBio, ViralGains,
          SplitFit, and ADS. Worked primarily with Rails/Middleman,
          React/Gatsby, React Native, and Elm.
        </Description>
      </Job>
      <Job>
        <Title>UX Lead</Title>
        <Company>Mobile Heartbeat</Company>
        <Dates>Feb 17 - Oct 18</Dates>
        <Description>
          Responsible for driving & evangelizing the UX for an 80 person
          clinical communication company that was present in over 90 hospitals
          with over 80,000 active users. Led all product design efforts for iOS,
          Android, and web applications. Regularly shadowed clinicians and ran
          focus groups, user testing sessions, & design symposiums with users.
          Established a design culture & process for the company and managed a
          team of two designers, with a focus on Agile and Lean UX. Collaborated
          with the product team to define business requirements and user
          stories. Collaborated with engineering on handoff and QA.
        </Description>
      </Job>
      <Job>
        <Title>Senior Design Consultant</Title>
        <Company>Pegasystems</Company>
        <Dates>Sep 16 - Feb 17</Dates>
        <Description>
          Led the design & front end development of product implementations by
          working directly on-site with client teams. Included an initiative at
          DLL Group, a 5,500 member global vendor finance company, to develop a
          design system across the company.
        </Description>
      </Job>
      <Job>
        <Title>UX Designer</Title>
        <Company>HMH Labs</Company>
        <Dates>Jul 13 - Sep 16</Dates>
        <Description>
          Key member of Schoolchapters, an e-portfolio startup, until successful
          acquisition by HMH in 2014. Reformed into HMH Labs, a highly agile,
          multi-disciplinary R&D team within Houghton Mifflin Harcourt.
          Responsible for UX design and front-end development of the HMH
          Marketplace, an online marketplace for educators. Users included
          Google, Microsoft, and Highlights Magazine. Worked primarily in Rails.
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
  margin-bottom: 100pt;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700pt;
`
const Job = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30pt;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  color: #076ca9;
  font-size: 20pt;
`

const Company = styled.h3`
  font-size: 14pt;
`

const Dates = styled.p`
  line-height: 15pt;
`

const Description = styled.p``

const Divider = styled.div`
  border-bottom: 1pt solid black;
  width: 100%;
  margin-bottom: 40pt;
`

const Education = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  color: #4707a9;
  font-size: 20pt;
`

export default Timeline
