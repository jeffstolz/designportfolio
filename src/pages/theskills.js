import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Intro from "../components/case-studies/intro"
import Background from "../components/case-studies/background"
import Highlight from "../components/case-studies/highlight"
import Quote from "../components/case-studies/quote"
import SectionHeader from "../components/case-studies/section-header"
import FeaturedImage from "../components/case-studies/featured-image"
import Blocks from "../components/case-studies/blocks"
import Footer from "../components/case-studies/footer"
import { Images } from "../images"
import { blueHeading, redHeading } from "../components/themes"

const TheSkillsPage = () => (
  <Layout>
    <SEO title="The Skills Case Study" />
    <Intro
      heading={
        "Providing high school & amateur athletes with a place to learn from their idols"
      }
      subheading={
        "An example around prioritizing features, mitigating assumptions, and building an MVP within a six-week timeline."
      }
      imageSrc={Images.SkillsIndex}
      imageAlt={"The Skills design solutions"}
    />
    <Background
      role={
        "Led all design efforts, paired with a Thoughtbot developer for implementation."
      }
      tools={"Ruby on Rails, Figma, Trello"}
    >
      The Skills came to Thoughtbot in 2020 with a specific goal: to create a
      product for amateur athletes to gain insight into how their idols train
      and compete. With a limited budget, a team of two had a six-week timeline
      to design and develop a Ruby on Rails MVP that would be iterated on by
      their internal team and eventually launched for the 2020 Olympics. The
      product would contain a subscription service where members can join and
      watch professional-quality videos of athletes like Shawn White or Michael
      Phelps, with breakdowns in how they train, key takeaways of their
      mentality to competing, and more.
    </Background>
    <Quote
      quote={
        "By targeting high school and amateur athletes with highly personalized content, we feel we can compete with Masterclass in this space."
      }
      source={"Product Owner, The Skills"}
    />
    <SectionHeader heading="Is there a measurable need for this product?">
      <Highlight>
        This, in addition to "what user problem is this solving?", are my
        typical first questions when beginning an engagement.
      </Highlight>{" "}
      It's our responsibility to the customer to ensure we have a well-formed
      hypothesis, backed by market and user research, before building expensive
      custom software. Even if we don't have time or budget for deep research
      and validation, it is important to identify assumptions, capture success
      metrics, and agree on the risk before moving forward. Building a tight MVP
      with a short timeline allowed them to realize this experiment with little
      financial investment.
    </SectionHeader>
    <Blocks
      theme={blueHeading}
      headingOne="Competing with Masterclass"
      descriptionOne="We couldn't ignore the industry giant. Our client's initial research found an opportunity to target young athletes that were eager for quality content and direct access to their heroes."
      headingTwo="Measuring success"
      descriptionTwo="We helped the customer determine the number of subscriptions needed to financially validate the concept and justify further investment."
      headingThree="User Validation"
      descriptionThree="In addition to qualitative metrics, we provided the customer with a user testing strategy for when they launched around the Tokyo Olympics."
    />
    <SectionHeader heading="Focusing & prioritizing">
      We kicked off the project by breaking down the client's desired feature
      sets. As a group, we rank-ordered them by priority, informed by the user
      research they had conducted independently to validate the idea.{" "}
      <Highlight>
        We then marked our waterline for MVP, ensuring there was a consensus
        across the board of the scope of the engagement.
      </Highlight>{" "}
      This exercise allowed us to determine the highest value product design and
      development exercises to conduct moving forward. In my experience, it is
      often difficult to convince a client to start with a small product scope,
      launch it, and then iterate on it based on the needs and feedback of their
      base users. Thankfully, our customer came in with a strong understanding
      and discipline when it came to MVP scoping.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.SkillsNotes}
      imageAlt={"Product design exercise with MVP waterline"}
    />
    <SectionHeader heading="Moving fast & loose with an agile approach">
      With our short runway, there wasn't time to run extensive preliminary
      research or a design sprint. We relied on the interviews and persona
      research the client collected in the past and looked to competitors for
      inspiration and lessons. I created a rough workflow diagram and wireframes
      to ensure we were aligned with the client on the general user journey and
      layouts. Design and development worked synchronously and collaboratively.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.SkillsFlowDiagram}
      imageAlt={"Information architecture flow diagram"}
    />
    <FeaturedImage
      imageSrc={Images.SkillsWireframes}
      imageAlt={"Wireframe diagrams"}
    />
    <SectionHeader heading="Establishing a visual design appropriate for our users">
      The Skills was an early-stage startup that lacked an established brand
      identity.{" "}
      <Highlight>
        We wanted to create a powerful visual aesthetic that would appeal to our
        younger audience{" "}
      </Highlight>{" "}
      without spinning our tires on complete brand identity guidelines, which
      were out of scope. I created a series of quick mood boards for the client
      to establish a mutual understanding of the overall look and feel. We
      explored bright, bold colors, lighter UI patterns, and typography
      treatments found in editorial design, sporting magazines, and in contrast
      to competitors like Masterclass. In the end, we decided on a dark theme
      displayed best for a video hosting platform. However, we still chose a
      kinetic, high-energy approach that would translate well to our users.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.SkillsMoodboardOne}
      imageAlt={"Moodboard design exploration"}
    />
    <FeaturedImage
      imageSrc={Images.SkillsMoodboardTwo}
      imageAlt={"Moodboard design exploration"}
    />
    <SectionHeader heading="Solutions">
      We iterated rapidly on the design work, establishing a clear visual
      direction within the first week of the engagement. This allowed us to
      focus the rest of our efforts on implementation, which was done in Ruby on
      Rails as it was the technology the customer was familiar with. The
      following images are the core screens to the final MVP designs, with
      placeholder copy and images, which were yet to be determined.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.SkillsHome}
      imageAlt={"The Skills home page"}
    />
    <FeaturedImage
      imageSrc={Images.SkillsAthletes}
      imageAlt={"The Skills athletes page"}
    />
    <FeaturedImage
      imageSrc={Images.SkillsAthleteLanding}
      imageAlt={"The Skills athlete landing page"}
    />
    <FeaturedImage
      imageSrc={Images.SkillsAthlete}
      imageAlt={"The Skills athlete page"}
    />
    <FeaturedImage
      imageSrc={Images.SkillsVideo}
      imageAlt={"The Skills video page"}
    />
    <SectionHeader heading="Takeaways">
      We were able to complete design and front-end development one week early,
      allowing for more budget to be allocated to full-stack development. This
      helped us hit our target without extending the engagement or cutting
      scope. As is the nature with many consulting projects, we were not able to
      stick around long enough with the customer to test the hypothesis with our
      users. However,{" "}
      <Highlight>
        with the strategy we provided them to validate the product, they will be
        able respond to user feedback accordingly. If the product is
        invalidated, then it reinforces the value of beginning with a low
        investment, risk-averse MVP approach.
      </Highlight>
    </SectionHeader>
    <Blocks
      theme={redHeading}
      headingOne="Identify Assumptions Early"
      descriptionOne="Because of the speed of this engagement, we weren't able to validate every assumption - by identifying these and the risks they carried early, we were able to plan for unexpected changes."
      headingTwo="Stay Communicative"
      descriptionTwo="For short engagements, there is little room to course correct midway. Articulating decisions, and ensuring customer buy-in along the way, helps ensure all parties remain on the same page throughout."
      headingThree="Kanban rocks"
      descriptionThree="We avoided time-consuming story points and formal Scrum frameworks with a lightweight Kanban board. This limited project management time and ensured we were always working on the top priority."
    />
    <Footer />
  </Layout>
)

export default TheSkillsPage
