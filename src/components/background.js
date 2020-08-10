import React from "react"
import styled from "styled-components"
import BackgroundCard from "./background-card"
import { Spacing } from "../styles/variables"

const Background = () => (
  <OuterContainer>
    <Container>
      <Header>My Background</Header>
      <ul>
        <BackgroundCard
          title={"Product Design Consultant"}
          company={"thoughtbot"}
          dates={"Oct 18 - Current"}
          description={
            "My most diverse role yet - thoughtbot designers assume the role of PM, designer & front-end developer. We embed with teams & lead from concept to production."
          }
        />
        <BackgroundCard
          title={"Design Lead"}
          company={"Mobile Heartbeat"}
          dates={"Feb 17 - Oct 18"}
          description={
            "As the first designer on, I built up a team, established a design culture, and led the redesign of a product with over 100k users in over 100 hospitals."
          }
        />
        <BackgroundCard
          title={"Senior Design Consultant"}
          company={"Pegasystems"}
          dates={"Sep 16 - Feb 17"}
          description={
            "My first experience with consulting where I embedded with teams across the country to lead their UX and front-end implementation efforts. LOTS of travel."
          }
        />
        <BackgroundCard
          title={"UX Designer/Developer"}
          company={"HMH Labs"}
          dates={"Jul 13 - Sep 16"}
          description={
            "A freelancing gig transitioned into a full-time role with a startup, which led to us being acquired by an international publisher. We became their Agile R&D team."
          }
        />
        <BackgroundCard
          title={"Freelance Designer"}
          company={"Jeff Stolz Design"}
          dates={"Nov 11 - Jul 13"}
          description={
            "After transitioning from a career in architecture, I got my feet wet in software design/development by freelancing and learning through experience."
          }
        />
      </ul>
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
  margin-bottom: ${Spacing.base};
`

export default Background
