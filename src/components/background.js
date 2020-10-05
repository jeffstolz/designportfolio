import React from "react"
import styled from "styled-components"
import BackgroundCard from "./background-card"
import Highlight from "./highlight"
import { Images } from "../images"
import { Spacing, Typography } from "../styles/variables"
import Fade from "react-reveal/Fade"

const Background = () => (
  <OuterContainer>
    <Container>
      <Fade>
        <Header>My Background</Header>
      </Fade>
      <BackgroundList>
        <BackgroundCard
          title={"Product Design Consultant"}
          company={"thoughtbot"}
          dates={"Oct 18 - Current"}
          description={
            "My most diverse role yet - thoughtbot designers assume the role of PM, designer & front-end developer. Our clients range from early-stage startups to major corporations."
          }
        >
          <Fade delay={500}>
            <HighlightsContainer>
              <HighlightsHeading>Highlights</HighlightsHeading>
              <HighlightList>
                <Highlight
                  imageSrc={Images.Workshop}
                  imageAlt={"Icon of person at a whiteboard"}
                  description={"Ran a multi-day workshop on facilitating PDSs"}
                />
                <Highlight
                  imageSrc={Images.Elm}
                  imageAlt={"Elm logo"}
                  description={
                    "Learned how to code in React, React Native, and Elm"
                  }
                />
                <Highlight
                  imageSrc={Images.Mentor}
                  imageAlt={
                    "Icon with two people with an arrow pointing to the right below them"
                  }
                  description={"Helped train and mentor new designers"}
                />
              </HighlightList>
            </HighlightsContainer>
          </Fade>
        </BackgroundCard>
        <BackgroundCard
          title={"Design Lead"}
          company={"Mobile Heartbeat"}
          dates={"Feb 17 - Oct 18"}
          description={
            "As the first designer on, I built up a team of three, established a design culture, and led the redesign of a clinical product with over 79k users in over 92 hospitals."
          }
        >
          <Fade delay={500}>
            <HighlightsContainer>
              <HighlightsHeading>Highlights</HighlightsHeading>
              <HighlightList>
                <Highlight
                  imageSrc={Images.Team}
                  imageAlt={"Icon of three people linked together"}
                  description={"Learned how to manage a team of designers"}
                />
                <Highlight
                  imageSrc={Images.Apple}
                  imageAlt={"Apple logo"}
                  description={
                    "Got accepted by the Apple Certified Partner Program"
                  }
                />
                <Highlight
                  imageSrc={Images.Surgeon}
                  imageAlt={"Icon of a surgeon"}
                  description={
                    "Shadowed a surgeon during (successful) open-heart surgery!"
                  }
                />
              </HighlightList>
            </HighlightsContainer>
          </Fade>
        </BackgroundCard>
        <BackgroundCard
          title={"Senior Design Consultant"}
          company={"Pegasystems"}
          dates={"Sep 16 - Feb 17"}
          description={
            "My first experience with consulting where I embedded with teams across the country to lead their UX and front-end implementation efforts."
          }
        >
          <Fade delay={500}>
            <HighlightsContainer>
              <HighlightsHeading>Highlights</HighlightsHeading>
              <HighlightList>
                <Highlight
                  imageSrc={Images.Grid}
                  imageAlt={"Icon of nine squares arranged in a grid"}
                  description={
                    "Set up a design system used by over 50 developers"
                  }
                />
                <Highlight
                  imageSrc={Images.Nope}
                  imageAlt={
                    "Icon of two people with a shared chat bubble above their heads and the word nope inside"
                  }
                  description={
                    "Refined my consulting skills (and learned how to say no)"
                  }
                />
                <Highlight
                  imageSrc={Images.Airplane}
                  imageAlt={"Icon of an airplane"}
                  description={"Racked up a lot of hotel and airline points"}
                />
              </HighlightList>
            </HighlightsContainer>
          </Fade>
        </BackgroundCard>
        <BackgroundCard
          title={"UX Designer"}
          company={"HMH Labs"}
          dates={"Jul 13 - Sep 16"}
          description={
            "A freelancing gig transitioned into a full-time opportunity with a startup, which led to us being acquired by an international publisher. We became their R&D team."
          }
        >
          <Fade delay={500}>
            <HighlightsContainer>
              <HighlightsHeading>Highlights</HighlightsHeading>
              <HighlightList>
                <Highlight
                  imageSrc={Images.Celebrate}
                  imageAlt={"Icon of two hands raised in a celebratory fashion"}
                  description={"We got acquired!"}
                />
                <Highlight
                  imageSrc={Images.Ruby}
                  imageAlt={"Ruby logo"}
                  description={
                    "Learned how to code in Rails & participated in my first PDS"
                  }
                />
                <Highlight
                  imageSrc={Images.Certificate}
                  imageAlt={"Icon of a certificate"}
                  description={"Completed the Firehose Coding Bootcamp"}
                />
              </HighlightList>
            </HighlightsContainer>
          </Fade>
        </BackgroundCard>
        <BackgroundCard
          title={"Freelance Designer"}
          company={"Jeff Stolz Design"}
          dates={"Nov 11 - Jul 13"}
          description={
            "After transitioning from a career in architecture, I got my feet wet in software design/development by freelancing and learning through experience."
          }
        >
          <Fade delay={500}>
            <HighlightsContainer>
              <HighlightsHeading>Highlights</HighlightsHeading>
              <HighlightList>
                <Highlight
                  imageSrc={Images.Wordpress}
                  imageAlt={"Wordpress logo"}
                  description={
                    "Learned how to make Wordpress and HTML/CSS sites"
                  }
                />
                <Highlight
                  imageSrc={Images.Native}
                  imageAlt={"Icon of a desktop, tablet, and mobile phone"}
                  description={"Designed my first native mobile apps"}
                />
                <Highlight
                  imageSrc={Images.Horns}
                  imageAlt={
                    "Icon of a hand closed with the index and pinky fingers raised"
                  }
                  description={
                    "Got my start in software and haven't looked back!"
                  }
                />
              </HighlightList>
            </HighlightsContainer>
          </Fade>
        </BackgroundCard>
      </BackgroundList>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: ${Spacing.huge} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.large} ${Spacing.small};
  }
`

const Container = styled.div`
  width: 74em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 100%;
  }
`

const Header = styled.h2`
  margin-bottom: ${Spacing.small};
`

const BackgroundList = styled.ul`
  padding-left: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding-left: 0;
  }
`

const HighlightsContainer = styled.div`
  margin-left: ${Spacing.large};
  padding-top: ${Spacing.small};

  @media (max-width: 1280px) {
    margin-left: 0;
    padding-top: ${Spacing.base};
  }
`

const HighlightsHeading = styled.h4`
  font-family: ${Typography.headingFontFamily};
  font-style: italic;
  margin-bottom: ${Spacing.base};
`

const HighlightList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 25em;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: column;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`

export default Background
