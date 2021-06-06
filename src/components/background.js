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
        title={"Senior Product Design Consultant"}
        details={"Thoughtbot, Oct 2018 - Current"}
        description={
          "Led cross-functional client teams for design sprints/concept explorations, MVP design & development, foundational design systems, and agile process improvement efforts. Deeply embedded with developers to implement software in multiple languages."
        }
        highlightOne={
          "Organized and conducted a multi-day workshop on facilitating design sprints."
        }
        highlightTwo={"Learned how to code in React, React Native, and Elm."}
        highlightThree={"Co-facilitated an over 100 attendee design summit."}
      />
      <BackgroundCard
        title={"Design Lead"}
        details={"Mobile Heartbeat, Feb 2017 - Oct 2018"}
        description={
          "As the first designer hired, I built up a team of three, established a design culture, and led the redesign of all iOS, Android, and web applications. Products contained over 79k daily users in over 92 hospitals."
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
        details={"Pegasystems, Sep 2016 - Feb 2017"}
        description={
          "Embedded with Pega teams across the country to lead their UX and front-end implementation efforts."
        }
        highlightOne={"Established a design system used by over 50 developers."}
        highlightTwo={"Led design workshops with customer teams."}
        highlightThree={"Earned the Pega System Architect certification."}
      />
      <BackgroundCard
        title={"UX Designer"}
        details={"HMH Labs, Jul 2013 - Sep 2016"}
        description={
          "An original member of SchoolChapters before being acquired by Houghton Mifflin Harcourt. We became HMH Labs, a cross-functional/agile internal lab focused on R&D in the EdTech space."
        }
        highlightOne={
          "Coded in Ruby on Rails and participated in design sprints."
        }
        highlightTwo={
          "Designed HMH Marketplace - users included Microsoft, Google, & Highlights Magazine."
        }
        highlightThree={"Completed the Firehose Coding Bootcamp."}
      />
      <BackgroundCard
        title={"Freelance Designer"}
        details={"Jeff Stolz Design, Nov 2011 - Jul 2013"}
        description={
          "After transitioning from a career in architecture, I got my feet wet in software design/development by freelancing and learning through experience."
        }
        highlightOne={"Designed web and native mobile apps."}
        highlightTwo={" Developed Wordpress and HTML/CSS sites."}
        highlightThree={
          "Designed a premium beer series of Boston Beer Works that remains in circulation."
        }
      />
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section``

const Header = styled.h2`
  padding-left: ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-left: ${Spacing.sectionPaddingMobile};
  }
`

const Container = styled.ul``

export default Background
