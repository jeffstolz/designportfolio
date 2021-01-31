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
        details={"thoughtbot, Oct 2018 - Current"}
        description={
          "My most diverse role yet - thoughtbot designers assume the role of PM, designer & front-end developer. Our clients range from early-stage startups to major corporations."
        }
        highlightOne={
          "Ran a multi-day workshop on facilitating design sprints."
        }
        highlightTwo={"Learned how to code in React, React Native, and Elm."}
        highlightThree={"Helped train and mentor new designers."}
      />
      <BackgroundCard
        title={"Design Lead"}
        details={"Mobile Heartbeat, Feb 2017 - Oct 2018"}
        description={
          "As the first designer on, I built up a team of three, established a design culture, and led the redesign of a clinical product with over 79k daily users in over 92 hospitals."
        }
        highlightOne={"Learned how to manage a team of designers."}
        highlightTwo={"Got accepted by the Apple Certified Partner Program."}
        highlightThree={
          "Shadowed a surgeon during (successful) open-heart surgery!"
        }
      />
      <BackgroundCard
        title={"Senior Design Consultant"}
        details={"Pegasystems, Sep 2016 - Feb 2017"}
        description={
          "My first experience with consulting where I embedded with teams across the country to lead their UX and front-end implementation efforts."
        }
        highlightOne={"Set up a design system used by over 50 developers."}
        highlightTwo={
          "Refined my consulting skills (and learned how to say no)."
        }
        highlightThree={"Racked up a lot of hotel and airline points."}
      />
      <BackgroundCard
        title={"UX Designer"}
        details={"HMH Labs, Jul 2013 - Sep 2016"}
        description={
          "A freelancing gig transitioned into a full-time opportunity with a startup, which led to us being acquired by an international publisher. We became their R&D team."
        }
        highlightOne={"We got acquired!"}
        highlightTwo={
          "Learned how to code in Rails & participated in my first design sprint."
        }
        highlightThree={"Completed the Firehose Coding Bootcamp."}
      />
      <BackgroundCard
        title={"Freelance Designer"}
        details={"Jeff Stolz Design, Nov 2011 - Jul 2013"}
        description={
          "After transitioning from a career in architecture, I got my feet wet in software design/development by freelancing and learning through experience."
        }
        highlightOne={"Learned how to make Wordpress and HTML/CSS sites."}
        highlightTwo={"Designed my first native mobile apps."}
        highlightThree={"Got my start in software and haven't looked back!"}
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
