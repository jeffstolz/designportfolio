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
        title={"Senior Product Designer"}
        details={"Thoughtbot, 2018 - 2021"}
        description={
          "Led cross-functional client teams through design sprints, MVP design & development, and foundational design systems. Deeply embedded with developers to implement code in React, React Native, Ruby on Rails, and Elm."
        }
        highlightOne={
          "Organized and conducted a multi-day workshop on facilitating design sprints."
        }
        highlightTwo={"Wrote responsive, accessible, scalable, and maintainable production markup and styling."}
        highlightThree={"Conducted code / pull request reviews, audits, and pair programming with customer teams."}
      />
      <BackgroundCard
        title={"UX Lead"}
        details={"Mobile Heartbeat, 2017 - 2018"}
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
        title={"Senior UI Solutions Developer"}
        details={"Pegasystems, 2016 - 2017"}
        description={
          "Embedded with Pega teams across the country to lead their UX efforts and implement front end code."
        }
        highlightOne={"Established a design system used by over 50 developers."}
        highlightTwo={"Built custom interfaces within the Pega platform."}
        highlightThree={"Earned the Pega System Architect certification."}
      />
      <BackgroundCard
        title={"UX Designer"}
        details={"HMH Labs, 2013 - 2016"}
        description={
          "An original member of SchoolChapters before being acquired by Houghton Mifflin Harcourt. We became HMH Labs, a cross-functional/agile internal lab focused on R&D in the EdTech space."
        }
        highlightOne={
          "Designed HMH Marketplace - users included Microsoft, Google, & Highlights Magazine."
        }
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
`

const Header = styled.h2`
  padding-left: ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-left: ${Spacing.sectionPaddingMobile};
  }
`

const Container = styled.ul``

export default Background
