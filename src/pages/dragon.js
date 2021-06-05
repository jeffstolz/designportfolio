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
import Footer from "../components/case-studies/footer"
import { Images } from "../images"
import { Spacing } from "../styles/variables"

const DragonPage = () => (
  <Layout>
    <SEO title="Dragon Innovation Case Study" />
    <Intro
      heading={
        "Breaking down a PDS that invalidated a concept & provided a path forward"
      }
      subheading={
        "A love letter to product design sprints and the value they bring to proof of concepts."
      }
      imageSrc={Images.DragonIndex}
      imageAlt={"Dragon Innovation design solutions"}
    />
    <Background
      role={
        "Facilitated the design sprint with one other Thoughtbot designer and the customer team"
      }
      tools={"Sketch, InVision"}
    >
      While I've facilitated many design sprints, I chose to showcase this one
      for a specific reason:{" "}
      <Highlight>
        by invalidating our customer's assumptions, we prevented them from
        spending surmountable time and money on an idea that probably would not
        succeed.
      </Highlight>{" "}
      In 2019, Dragon Innovation, a manufacturing partner, hired Thoughtbot to
      design and build a scheduling application for their clients launching
      initial product offerings. Because there was no customer validation of
      this concept going into the engagement, we convinced them to agree to a
      five-day design sprint before implementation to validate the idea.
    </Background>
    <Quote
      quote={
        "Changes to the schedule impact all aspects of the business, and it's difficult for product owners to anticipate the problems and understand the tradeoffs so they can respond proactively to them."
      }
      source={"Problem Statement"}
    />
    <SectionHeader heading="Understanding the business & user problems">
      Because Dragon worked within a complex, niche industry, we spent a large
      portion of the Understand phase learning the business from their subject
      matter experts. I ran a "How Might We" exercise where we wrote down
      questions, concerns, opportunities, and assumptions that we formed
      throughout the day. We then dot voted on the items to ensure they were
      addressed during the sprint - this made sure all voices were heard and a
      consensus was formed on the goals of the week.{" "}
      <Highlight>
        We ensured we ended the day with a problem statement and critical path
        that we would explore on day two.
      </Highlight>
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.DragonNotes}
      imageAlt={"Product design exercise with MVP waterline"}
    />
    <SectionHeader heading="Sketching & exploring solutions">
      With our initial research conducted, we began exploring solutions with
      broad strokes. I began with a "Crazy 8s" exercise to help get everyone in
      the creative spirit and explore concepts rapidly. We then did more
      formalized solution sketches, presented them to the room, and dot voted on
      the concepts that seemed to best address our problem statement.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.DragonPath}
      imageAlt={"Product design exercise with MVP waterline"}
    />
    <SectionHeader heading="Coming together & forming a hypothesis">
      Wednesday was dedicated to our storyboard: our path forward inspired by
      the ideas of the week that we would prototype and test. This was a
      difficult exercise as the customer team was split on the direction
      forward: some members were deeply rooted in their assumptions due to their
      deep industry knowledge.{" "}
      <Highlight>
        We resolved the split by documenting all assumptions and reinforcing
        that our decision was a hypothesis - the team would be able to respond
        to change if our findings from the sprint invalidate the concept.
      </Highlight>
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.DragonStoryboard}
      imageAlt={"Product design exercise with MVP waterline"}
    />
    <SectionHeader heading="Prototyping the concept">
      We built the prototype in Sketch and the prototype in InVision (customer
      preference). We wrote an interview script we'd follow with each
      participant to ensure we consistently conducted the interviews and didn't
      miss any content. Because we only had a day to work, we focused on the
      section of the storyboard we had the least confidence in.
      <ButtonLink href="https://projects.invisionapp.com/share/GDQ9EDURFQP#/screens">
        <Button
          theme={primaryLight}
          label={"View InVision Prototype"}
          icon={<FaArrowRight />}
        />
      </ButtonLink>
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.DragonSolutionOne}
      imageAlt={"Dragon Innovation project information"}
    />
    <FeaturedImage
      imageSrc={Images.DragonSolutionTwo}
      imageAlt={"Dragon Innovation risks and tradeoffs"}
    />
    <FeaturedImage
      imageSrc={Images.DragonSolutionThree}
      imageAlt={"Dragon Innovation critical path"}
    />
    <SectionHeader heading="Evaluating the concept through interviewing">
      Thankfully, we had a solid group of eight interview participants, all
      desired end users for the new tool. Some of them had relationships with
      the customer, and we had to be careful about biases and failing the "Mom
      Test". We elected to record the sessions but keep the customer out of the
      room to prevent any steering of the conversation.{" "}
      <Highlight>
        Our findings were interesting - experienced product owners had no need
        for a tool for scheduling, they already had working processes in place.
        While early-stage startups saw value in it, they wouldn't be a
        profitable enough target group to warrant the investment.
      </Highlight>
      <ButtonLink href={Images.DragonInterviewScript}>
        <Button
          theme={primaryLight}
          label={"View Interview Script"}
          icon={<FaArrowRight />}
        />
      </ButtonLink>
    </SectionHeader>
    <SectionHeader heading="An invalidated approach & opportunity moving forward">
      The customer responded positively to the news that their idea was
      invalidated by the participants we interviewed the previous day.
      Additionally,{" "}
      <Highlight>
        they gained insight into how they can best serve their customers with
        software - communication was much a greater concern for their broader
        customer base.
      </Highlight>{" "}
      In the end, this case study is an excellent example of the value of design
      sprints: with little investment, a team can quickly validate, or
      invalidate, their project before substantial investment.
    </SectionHeader>
    <Footer />
  </Layout>
)

const ButtonLink = styled.a`
  display: flex;
  text-decoration: none;
  margin-top: ${Spacing.base};
`

export default DragonPage
