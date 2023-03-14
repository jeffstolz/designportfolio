import React from "react"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
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
import { redHeading } from "../components/themes"

const MobileHeartbeatPage = () => (
  <Layout>
    <Seo title="Mobile Heartbeat Case Study" />
    <Intro
      heading={
        "Improving critical communications for clinicians in a hospital setting"
      }
      subheading={
        "Lessons learned from establishing a design culture and redesigning a deeply embedded clinical tool with over 79k daily users."
      }
      imageSrc={Images.MhHeader}
      imageAlt={"Mobile Heartbeat design solutions on mobile and web"}
    />
    <Background
      role={
        "Led all iOS, Android, and web design efforts and managed a team of two designers."
      }
      tools={"Sketch, Zeplin, InVision, Usertesting.com, Appsee, Jira"}
    >
      When I was brought on to the team in 2017, Mobile Heartbeat was a clinical
      communication tool used daily in 92 hospitals. Although the product had a
      deep userbase,{" "}
      <Highlight>
        the company had not prioritized design in its past and end-users
        reported that the product had grown dated, unintuitive, and frustrating.
      </Highlight>{" "}
      I was hired to build a design team, establish a design culture, and lead a
      full redesign of their existing iOS and Android applications.
    </Background>
    <Quote
      quote={
        "Having worked in a hospital for over ten years, I see communication as the biggest challenge for clinicians. In many cases, care teams spread throughout the campus must collaborate, diagnose, and act within minutes. Shaving seconds off those processes can directly save lives."
      }
      source={"Charge Nurse, Mobile Heartbeat User"}
    />
    <SectionHeader heading="Reevaluating our processes & determining our core user needs">
      The product roadmap was originally a classic waterfall consisting of new
      features and customer requests that lacked a clear direction forward. To
      resolve this, we created a cross-functional team to establish our product
      priorities and identify the core user needs. We chose to follow the Lean
      UX Canvas for the initial problem definition to help us maintain focus and
      establish measurable outcomes. Our main findings:{" "}
      <Highlight>
        physicians were rejecting the application because it didn't support
        their specific workflow and urgent communications were a burden.
      </Highlight>{" "}
      We validated these findings with extensive user testing.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.MhDiscovery}
      imageAlt={"Lean UX Canvas product exploration"}
    />
    <SectionHeader heading="Using qualitative analytics to measure success">
      We had very specfic KPIs for our redesign - to increase speed of critical
      communications and increase user adoption, especially with the physicians
      in our hospital systems.{" "}
      <Highlight>
        We used Appsee to record sessions, track usage patterns, and capture
        touch heatmaps.
      </Highlight>{" "}
      We experimented with the tool before conducting the product redesign to
      test out the product and use the opportunity to learn more about our
      existing user experiences.
    </SectionHeader>
    <SectionHeader heading="Evangelizing user empathy">
      Our users had highly specific and complex workflows, and we needed to
      thoroughly research and understand them before beginning our redesign.{" "}
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
    <SectionHeader heading="Establishing a design process">
      I worked to build a culture of highly rapid, transparent, and
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
    <SectionHeader heading="Solutions">
      We conducted extensive end-user testing to validate our solutions before
      implementation. This included in-person user testing via InVision
      prototypes. We conducted these tests in hospitals throughout the country
      and evolved our designs based on the feedback. As a result, we were able
      to begin development with confidence in our approach. After much testing,
      our UI was inspired by native iOS patterns, as they were most familiar and
      intuitive to our users.{" "}
      <Highlight>
        Often users would be interacting with our tool while running down a
        hallway with their adrenaline racing. Hospitals are noisy, mobile, and
        highly stressful environments - we needed to ensure our UI was as
        intuitive and familiar as possible.
      </Highlight>
    </SectionHeader>
    <ImageRow
      imageSrcOne={Images.MhSolutionOne}
      imageAltOne={"My status"}
      imageDescriptionOne={
        "Giving users a dashboard view of their day helped them coordinate care faster with distributed teams."
      }
      imageSrcTwo={Images.MhSolutionTwo}
      imageAltTwo={"Critical telemetry alert"}
      imageDescriptionTwo={
        "We added long-press and other power user functionality to help clinicians view and action on critical alerts faster."
      }
    />
    <ImageRow
      imageSrcOne={Images.MhSolutionThree}
      imageAltOne={"Multi-unit selection"}
      imageDescriptionOne={
        "Many physicians are moving between units and hospitals on a daily level - we made it easier for care teams to locate and communicate with them."
      }
      imageSrcTwo={Images.MhSolutionFour}
      imageAltTwo={"Favorite contacts"}
      imageDescriptionTwo={
        "Not all care teams are unit based - we allowed users to favorite and build their own groups for easy access and collaboration."
      }
    />
    <ImageRow
      imageSrcOne={Images.MhSolutionFive}
      imageAltOne={"Urgent message"}
      imageDescriptionOne={
        "We improved the visual design critical communications to cut through the clutter and ensure they're viewed and actioned on quickly."
      }
      imageSrcTwo={Images.MhSolutionSix}
      imageAltTwo={"Urgent notification"}
      imageDescriptionTwo={
        "We experimented with sound and toast design to ensure critical alerts are never missed."
      }
    />
    <SectionHeader heading="Results & Learnings">
      <Highlight>
        Our improvements to the user experience helped contribute to a 30% user
        base growth in 18 months.
      </Highlight>{" "}
      Although users reported an increase in speed of urgent communications, our
      product team made the difficult decision to deprioritize the qualitative
      analytics which affected our ability to track this KPI effectively.
      Overall, my experience at Mobile Heartbeat consisted of a lot of firsts:
      building and managing a team, leading design on a company-wide level, and
      working within healthcare. As can be expected, mistakes were made and
      lessons were learned. I value these accelerated periods of learning in my
      career when I learn to be comfortable with discomfort and know when to ask
      for help and admit I don't know an answer.
    </SectionHeader>
    <Blocks
      theme={redHeading}
      headingOne="Don't Expect Strong IT Infrastructure"
      descriptionOne="We expected virtually zero downtime for critical communications, but hospital IT infrastructure is often underfunded and spotty. In the future, we must plan accordingly."
      headingTwo="Integrate with Developers"
      descriptionTwo="A cultural divide between product and engineering formed that created a communication and creativity barrier. I now always push for integrated, cross-functional teams."
      headingThree="Push Back on Customer Leadership"
      descriptionThree="We learned early that hospital leadership doesn't always represent the end-user. Large organizations can have competing priorities, and we can't assume that a single voice speaks for the majority."
    />
    <Footer />
  </Layout>
)

export default MobileHeartbeatPage
