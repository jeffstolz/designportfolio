import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import BackgroundCard from "./background-card"
import { Spacing } from "../styles/variables"

const Background = () => (
  <OuterContainer>
    <Fade>
      <Header>My Background</Header>
    </Fade>
    <Container>
      <BackgroundCard
        title={"Senior Designer"}
        details={"HPE, 2021 - Current"}
        description={
          "Led the design of B2B cloud computing SaaS products spanning multiple platforms and workstreams. Helped evolve the design culture towards design thinking, design systems, and cross functional collaboration."
        }
        highlightOne={
          "Created, evangelized, and rolled out process improvement efforts across teams."
        }
        highlightTwo={
          "Trained designers on best practices through share outs, design critiques, and 1:1 mentorship."
        }
        highlightThree={
          "Contributed towards expanding, refining, and evangelizing the global design system."
        }
      />
      <BackgroundCard
        title={"Senior Product Designer"}
        details={"Thoughtbot, 2018 - 2021"}
        description={
          "Led cross-functional client teams through design sprints, MVP design & development, and foundational design systems. Deeply embedded with developers to implement code in React, React Native, Ruby on Rails, and Elm."
        }
        highlightOne={
          "Mentored client teams and in-house designers on usability, accessibility, design system, and research."
        }
        highlightTwo={
          "Organized and conducted a multi-day workshop on facilitating design sprints."
        }
        highlightThree={
          "Wrote responsive, accessible, scalable, and maintainable production markup and styling."
        }
      />
      <BackgroundCard
        title={"UX Lead"}
        details={"Mobile Heartbeat, 2017 - 2018"}
        description={
          "Responsible for the design of all company-wide initiatives, including clinical communication applications for iOS, Android, and web with over 79k daily users in over 92 hospitals. Started as the sole designer before hiring, scaling, and managing a team of three designers."
        }
        highlightOne={"Helped grow the active user base by 30% in 18 months."}
        highlightTwo={
          "Earned acceptance into the Apple Certified Partner Program."
        }
        highlightThree={
          "Regularly interviewed, shadowed, and conducted focus groups with clinicians across the country."
        }
      />
      <BackgroundCard
        title={"Senior Design Consultant"}
        details={"Pegasystems, 2016 - 2017"}
        description={
          "Embedded with Pega teams across the country to lead their UX efforts and implement front end code. Mentored client teams on usability, design system, accessibility, and design thinking best practices."
        }
        highlightOne={"Established a design system used by over 50 developers."}
        highlightTwo={"Built custom interfaces within the Pega platform."}
        highlightThree={"Earned the Pega System Architect certification."}
      />
      <BackgroundCard
        title={"UX Designer"}
        details={"HMH Labs, 2013 - 2016"}
        description={
          "An original member of SchoolChapters before being acquired by Houghton Mifflin Harcourt. We became HMH Labs, a cross-functional/agile internal lab focused on R&D."
        }
        highlightOne={"Designed web and mobile edtech products."}
        highlightTwo={
          "Worked alongside developers to implement markup & styling in Ruby on Rails."
        }
        highlightThree={"Completed the Firehose Coding Bootcamp."}
      />
      <BackgroundCard
        title={"Freelance Designer"}
        details={"Jeff Stolz Design, 2011 - 2013"}
        description={
          "After transitioning from a career in architecture, I got my feet wet in software design/development by freelancing and learning through experience."
        }
        highlightOne={"Designed web and native mobile apps."}
        highlightTwo={"Developed Wordpress and HTML/CSS sites."}
        highlightThree={
          "Designed a premium beer series of Boston Beer Works that remains in circulation."
        }
      />
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  padding-top: ${Spacing.xxHuge};
`

const Header = styled.h2`
  padding-left: ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-left: ${Spacing.sectionPaddingMobile};
  }
`

const Container = styled.ul``

export default Background
