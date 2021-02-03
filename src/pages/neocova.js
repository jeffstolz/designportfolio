import React from "react"
import styled from "styled-components"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/case-studies/intro"
import Background from "../components/case-studies/background"
import Highlight from "../components/case-studies/highlight"
import Quote from "../components/case-studies/quote"
import SectionHeader from "../components/case-studies/section-header"
import Button from "../components/button"
import { primaryLight } from "../components/themes"
import { FaArrowRight } from "react-icons/fa"
import FeaturedImage from "../components/case-studies/featured-image"
import Blocks from "../components/case-studies/blocks"
import Footer from "../components/case-studies/footer"
import { Images } from "../images"
import { blueHeading } from "../components/themes"
import { Colors, Spacing } from "../styles/variables"

const NeocovaPage = () => (
  <Layout>
    <SEO title="Neocova Case Study" />
    <Intro
      heading={
        "Establishing a Design System for a Complex Enterprise Organization"
      }
      subheading={
        "An approach to providing structure for a rapidly growing company with products moving in multiple directions."
      }
      imageSrc={Images.NeocovaIndex}
      imageAlt={"Neocova design system solutions"}
    />
    <Background
      role={"Led all design efforts with a team of three Thoughtbot designers"}
      tools={"Figma, Mural, Trello"}
    >
      In 2020, Neocova, a rising fintech company, came to Thoughtbot with a
      not-so-unique problem: their suite of products, and team, were growing
      exponentially and in unruly directions. Products lacked visual unity and
      brand initiatives competed with each other. Developers didn't know which
      assets to use, and velocity was slowing. We were hired for a brief
      three-week engagement to reel things in before they spun too far out of
      control.{" "}
      <Highlight>
        After some initial problem definition exercises, our team identified
        that the company would benefit from a foundational design system that
        the company could leverage, own, and grow with over time.
      </Highlight>
    </Background>
    <Quote
      quote={
        "My main concerns are after the engagement ends and you all turn into pumpkins, who will own this design system moving forward? How do we ensure that it gets maintained and doesn't degrade over time?"
      }
      source={"Head of Product, Neocova"}
    />
    <SectionHeader heading="Research">
      We began the engagement with a comprehensive audit of their existing brand
      identity and UI components. We met with stakeholders and identified with
      the customer the elements that they wanted to keep, and which we could
      discard. By interviewing their team, we determined that a practical and
      flexible system would work best for their growing organization. Because
      the engagement was limited and we wouldn't be able to build out a complete
      system,{" "}
      <Highlight>
        I lead an exercise with the stakeholders to identify the features that
        would be valuable in the system, individually dot vote on priorities and
        then rank them as a group.
      </Highlight>{" "}
      This helped us align as a team before work began.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.NeocovaExploration}
      imageAlt={"Design system dot map voting exercise"}
    />
    <SectionHeader heading="Atomic Design System">
      I'm a big fan of atomic design systems for larger projects, especially
      with customers without prior design system experience. The chemistry
      analogy is understandable and elegant, and because this client worked in
      React, the framework translated well to React components. We chose to
      build and maintain the system in Figma - Neocova already had strong
      cultural adoption with this tool, and it serves as a great centralized and
      dynamic resource to maintain a single source of truth.
      <Divider />
      <Highlight>
        I've provided an example of the colors section in this case study to
        showcase the structure of the system. I recommend viewing the complete
        deliverable in Figma.
      </Highlight>
      <ButtonLink href="https://www.figma.com/file/wcm8Ra8pY6A2ZzBdPEhBi4/Neocova-Design-System?node-id=70%3A241">
        <Button
          theme={primaryLight}
          label={"View Figma Project"}
          icon={<FaArrowRight />}
        />
      </ButtonLink>
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.NeocovaSolutionOne}
      imageAlt={"Design system color overview"}
    />
    <FeaturedImage
      imageSrc={Images.NeocovaSolutionTwo}
      imageAlt={"Design system color palette"}
    />
    <FeaturedImage
      imageSrc={Images.NeocovaSolutionThree}
      imageAlt={"Design system color use cases"}
    />
    <SectionHeader heading="Evangelizing Adoption">
      Although we worked alongside the customer throughout the engagement, we
      wanted to formally present the system to the broader company once it was
      completed to answer outstanding questions and increase visibility and
      adoption. This also ended up being a great opportunity to teach the
      broader company about general product design and user experience
      principles.
    </SectionHeader>
    <Blocks
      theme={blueHeading}
      headingOne="Establish an Owner"
      descriptionOne="We pushed the client to select an owner of the design system at
      the beginning of the engagement to partner with us and establish themself as a subject matter expert."
      headingTwo="Shared Purpose"
      descriptionTwo="We needed to articulate the value of the design system for both designers and developers, and the responsibility that all parties have to follow and strengthen it over time."
      headingThree="Respond to Change"
      descriptionThree="A design system is both a tool to enforce consistency and respond to change. We taught the team how to identify when to follow, diverge, or expand on the system appropriately."
    />
    <SectionHeader heading="Takeaways">
      Reflecting on the engagement,{" "}
      <Highlight>
        I would certainly carry forward the prioritization exercise that we
        conducted during our initial research
      </Highlight>
      , as it helped reel in the varied expectations from our customer team.
      This, in addition to highly communicative and transparent progress
      updates, helped prevent any pivots and kept our velocity strong. Moving
      forward, I would work to incorporate the development team more into the
      early decision process - we could have done better to articulate the
      shared purpose of the system as being much more than a design resource.
    </SectionHeader>
    <Footer />
  </Layout>
)

const Divider = styled.hr`
  border: 1px solid ${Colors.gray1};
  width: ${Spacing.base};
  margin: ${Spacing.base} 0;
`

const ButtonLink = styled.a`
  display: flex;
  text-decoration: none;
  margin-top: ${Spacing.base};
`

export default NeocovaPage
