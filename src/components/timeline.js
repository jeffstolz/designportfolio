import React from "react"
import styled from "styled-components"
import Job from "./job"
import Education from "./education"
import { Colors, Spacing } from "../styles/variables"

const Timeline = () => (
  <Container>
    <Job
      title={"Product Design Consultant"}
      company={"thoughtbot"}
      dates={"Oct 18 - Current"}
      description={"Led customer engagements from initial concept to full implementation of web and mobile applications. Facilitated design sprints with clients. Counseled customers on process improvement techniques centered around lightweight, Agile methodologies. Mentored designers within thoughtbot and on client teams. Collaborated with customers such as GE, Alyce, CypherBio, ViralGains, and SplitFit. Worked primarily in Rails, React, React Native, and Elm."}
    />
    <Job
      title={"UX Lead"}
      company={"Mobile Heartbeat"}
      dates={"Feb 17 - Oct 18"}
      description={"Responsible for driving & evangelizing all design efforts for a clinical communication company present in over 92 hospitals with over 79,000 active users. Regularly shadowed clinicians, ran focus groups, user testing sessions, & design symposiums with users. Established a design culture & managed a team of two designers."}
    />
    <Job
      title={"Senior Design Consultant"}
      company={"Pegasystems"}

      dates={"Sep 16 - Feb 17"}
      description={"Led the UI design & development of product implementations with client teams. Included an initiative at DLL Group, a 5,500 member global vendor finance company, to develop a design system across the company."}
    />
    <Job
      title={"UX Designer"}
      company={"HMH Labs"}
      dates={"Jul 13 - Sep 16"}
      description={"Original member of Schoolchapters, an e-portfolio startup, until successful acquisition by HMH in 2014. Responsible for UX design and front-end development of the HMH Marketplace, an online marketplace for educators. Users included Google, Microsoft, and Highlights Magazine. Worked primarily in Rails."}
    />
    <Job
      title={"Freelance Web Designer"}
      company={"Jeff Stolz Design"}
      dates={"Nov 11 - Jul 13"}
      description={"Designed mobile and web applications for clients including People’s Medical, CONNSACS, SilverBull, Boston Beer Works, The Melting Pot, and Southport Brewing Company."}
    />
    <Job
      title={"Architectural Designer"}
      company={"AE Design Group"}
      dates={"May 05 - Nov 11"}
      description={"Created graphics and architectural designs."}
    />
    <Divider />
    <Education
      heading={"Education"}
      school={"Virginia Tech"}
      degree={"Bachelor of Architecture"}
      graduation={"2010"}
      program={"Firehose Coding Bootcamp"}
      certificate={"Certificate"}
      date={"2015"}
    />
  </Container>
)

const Container = styled.div`
  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.huge};
  }
`

const Divider = styled.div`
  width: 100%;
  margin-bottom: ${Spacing.large};
  border-bottom: 1pt solid ${Colors.black};
`

export default Timeline
