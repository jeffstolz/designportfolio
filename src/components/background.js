import React from "react"
import styled from "styled-components"
import BackgroundCard from "./background-card"
import Highlights from "./highlights"
import { Spacing } from "../styles/variables"

const Background = () => (
  <OuterContainer id="background">
    <Container>
      <Header>My Background</Header>
      <BackgroundList>
        <BackgroundCard
          title={"Product Design Consultant"}
          company={"thoughtbot"}
          dates={"Oct 18 - Current"}
          description={
            "My most diverse role yet - thoughtbot designers assume the role of PM, designer & front-end developer. Our clients range from early-stage startups to major corporations."
          }
        >
          <Highlights
            descriptionOne={"Ran a multi-day workshop on facilitating PDSs"}
            descriptionTwo={"Learned how to code in React, RN, and Elm"}
            descriptionThree={"Helped train and mentor new designers"}
          />
        </BackgroundCard>
        <BackgroundCard
          title={"Design Lead"}
          company={"Mobile Heartbeat"}
          dates={"Feb 17 - Oct 18"}
          description={
            "As the first designer on, I built up a team of three, established a design culture, and led the redesign of a clinical product with over 79k users in over 92 hospitals."
          }
        >
          <Highlights
            descriptionOne={"Learned how to manage a team of designers"}
            descriptionTwo={
              "Got accepted by the Apple Certified Partner Program"
            }
            descriptionThree={
              "Shadowed a surgeon during (successful) open-heart surgery!"
            }
          />
        </BackgroundCard>
        <BackgroundCard
          title={"Senior Design Consultant"}
          company={"Pegasystems"}
          dates={"Sep 16 - Feb 17"}
          description={
            "My first experience with consulting where I embedded with teams across the country to lead their UX and front-end implementation efforts."
          }
        >
          <Highlights
            descriptionOne={
              "Set up a design system used by over 100 developers"
            }
            descriptionTwo={
              "Refined my consulting skills (and learned how to say no)"
            }
          />
        </BackgroundCard>
        <BackgroundCard
          title={"UX Designer/Developer"}
          company={"HMH Labs"}
          dates={"Jul 13 - Sep 16"}
          description={
            "A freelancing gig transitioned into a full-time opportunity with a startup, which led to us being acquired by an international publisher. We became their R&D team."
          }
        >
          <Highlights
            descriptionOne={"We got acquired!"}
            descriptionTwo={
              "Learned how to code in Rails & participated in my first PDS"
            }
            descriptionThree={"Completed the Firehose Coding Bootcamp"}
          />
        </BackgroundCard>
        <BackgroundCard
          title={"Freelance Designer"}
          company={"Jeff Stolz Design"}
          dates={"Nov 11 - Jul 13"}
          description={
            "After transitioning from a career in architecture, I got my feet wet in software design/development by freelancing and learning through experience."
          }
        >
          <Highlights
            descriptionOne={"Learned how to make Wordpress and HTML/CSS sites"}
            descriptionTwo={"Got my start in software and haven't looked back!"}
          />
        </BackgroundCard>
      </BackgroundList>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: ${Spacing.huge} ${Spacing.base};
`

const Container = styled.div`
  width: ${Spacing.largeContainerWidth};
`

const Header = styled.h2`
  margin-bottom: ${Spacing.small};
`

const BackgroundList = styled.ul`
  padding-left: ${Spacing.base};
`

export default Background
