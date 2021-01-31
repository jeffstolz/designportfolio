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
import ImageRow from "../components/case-studies/image-row"
import Footer from "../components/case-studies/footer"
import { Images } from "../images"
import { redHeading, blueHeading } from "../components/themes"

const MobileHeartbeatPage = () => (
  <Layout>
    <SEO title="Mobile Heartbeat Case Study" />
    <Intro
      heading={"Redesigning a Deeply Embedded Clinical Communication Tool"}
      subheading={
        "Lessons learned from establishing a design culture and redesigning an enterprise product with over 79k daily users."
      }
      imageSrc={Images.MhHeader}
      imageAlt={"Mobile Heartbeat design solutions on mobile and web"}
    />
    <Background
      role={"Led all design efforts and managed a team of two designers."}
      tools={"Sketch, Zeplin, InVision, Usertesting.com"}
    >
      When I was brought on to the team in 2017,{" "}
      <Highlight>
        Mobile Heartbeat was a clinical communication tool used daily in 92
        hospitals.
      </Highlight>{" "}
      Although the product had a deep userbase, the company had not prioritized
      design in it's past and end-users reported that the product had grown
      dated, unintuitive, and frustrating. Physicians were rejecting the
      application because it didn't support their specific workflow and urgent
      communications were a burden. I was hired to build a design team,
      establish a design culture, and lead a full redesign of their existing iOS
      and Android applications.
    </Background>
    <Quote
      quote={
        "Having worked in a hospital for over ten years, I see communication as the biggest challenge for clinicians. In many cases, care teams spread throughout the campus must collaborate, diagnose, and act within minutes."
      }
      source={"Charge Nurse, Mobile Heartbeat User"}
    />
    <SectionHeader heading="Determining the Problem">
      To start, we needed to evaluate our processes. The product roadmap
      originally was a classic waterfall consisting of new features and customer
      requests, and lacked a clear direction forward. To resolve this, we
      created a cross functional team to establish our product priorities and
      identify the core user needs. We chose to follow the Lean UX Canvas for
      initial problem definition to help us maintain focus and establish
      measurable outcomes.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.MhDiscovery}
      imageAlt={"Lean UX Canvas product exploration"}
    />
    <SectionHeader heading="Building a Team">
      I was the first designer hired at the company, and identified early that a
      larger team would be required to handle the various design
      responsibilities in the given timeline. This was my first experience
      leading a team, and I interviewed both personal contacts and company
      leaders to learn from their successes and failures before beginning my
      search.{" "}
      <Highlight>
        My goal was to build a team that would foster transparency, continuous
        improvement, and trust.
      </Highlight>
    </SectionHeader>
    <Blocks
      theme={blueHeading}
      headingOne="Practical Interviews"
      descriptionOne="The focus of my interviews were on practical skill assessments. This provides both an honest assessment and clear visibility into the role for both parties."
      headingTwo="Filling in my Gaps"
      descriptionTwo="Every designer has weak spots. I had less confidence in my visual design skills at the time and wanted teammates that could bring that expertise to the role."
      headingThree="Diverse Backgrounds"
      descriptionThree="I wanted to ensure that our team represented various backgrounds and perspectives so we could share and learn from each other."
    />
    <SectionHeader heading="Evangelizing User Empathy">
      Our users had highly specific and complex workflows, and we needed to make
      sure to thoroughly research and understand them before beginning our
      redesign.{" "}
      <Highlight>
        Our research included shadowing, interviewing, focus groups & surveys.
      </Highlight>{" "}
      We built a variety of user personas from this research, presented them to
      the company, and printed them on walls in the office to increase
      visibility and adoption.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.MhPersona}
      imageAlt={"User persona of Mobile Heartbeat charge nurse"}
    />
    <SectionHeader heading="Establishing a Design Process">
      The culture I worked to build was one of highly rapid, transparent, and
      collaborative design and prototyping. We began with brainstorming
      workshops, low-fidelity sketches, wireframes, and then increased in detail
      as our vision became more defined. Additionally, we maintained a regular
      feedback loop with our users throughout the design process.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.MhDesignProcessSketch}
      imageAlt={"Rough sketch design exploration"}
    />
    <FeaturedImage
      imageSrc={Images.MhWireframe}
      imageAlt={"Wireframe design exploration"}
    />
    <SectionHeader heading="Outcomes">
      We conducted extensive end-user testing to validate our solutions before
      implementation. This included in-person user testing via InVision
      prototypes. We conducted these tests in hospitals throughout the country,
      and evolved our designs based on the feedback. As a result, we were able
      to begin development with confidence in our approach.
    </SectionHeader>
    <ImageRow
      imageSrcOne={Images.MhSolutionOne}
      imageAlt={"My status"}
      imageSrcTwo={Images.MhSolutionTwo}
      imageAltTwo={"Critical telemetry alert"}
    />
    <ImageRow
      imageSrcOne={Images.MhSolutionThree}
      imageAlt={"Multi-unit selection"}
      imageSrcTwo={Images.MhSolutionFour}
      imageAltTwo={"Favorite contacts"}
    />
    <ImageRow
      imageSrcOne={Images.MhSolutionFive}
      imageAlt={"Urgent message"}
      imageSrcTwo={Images.MhSolutionSix}
      imageAltTwo={"Urgent notification"}
    />
    <SectionHeader heading="Learnings">
      My experience at Mobile Heartbeat consisted of a lot of firsts: building
      and managing a team, leading design on a company wide level, and working
      within healthcare to name a few. As can be expected, mistakes were made
      and lessons were learned. I value these excellerated periods of learning
      in my career when I{" "}
      <Highlight>learn to be comfortable with discomfort</Highlight> and know
      when to ask for help and admit I don't know an answer.
    </SectionHeader>
    <Blocks
      theme={redHeading}
      headingOne="Don't Expect Strong IT Infrastructure"
      descriptionOne="We expected virtually zero downtime for critical communications, but hospital IT infrastructure is often underfunded and spotty. In the future we must plan accordingly."
      headingTwo="Integrate with Developers"
      descriptionTwo="A cultural divide between product and engineering formed that created a communication and creativity barrier. I now always push for integrated, cross-functional teams."
      headingThree="Push Back on Customer Leadership"
      descriptionThree="We learned early that hospital leadership doesn't always represent the end user. Large orgs can have competing priorities, and we can't assume that a single loud voice speaks for the quiet majority."
    />
    <Footer pageLink={"/#case-studies"} />
  </Layout>
)

export default MobileHeartbeatPage
