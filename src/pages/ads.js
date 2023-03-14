import React from "react"
import styled from "styled-components"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
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
import { blueHeading, redHeading } from "../components/themes"
import { Colors, Spacing } from "../styles/variables"

const NeocovaPage = () => (
  <Layout>
    <Seo title="ADS Case Study" />
    <Intro
      heading={
        "Improving speed & accuracy of quoting for enterprise salespeople"
      }
      subheading={
        "An approach to reducing cognitive load for a data-heavy process and providing structure to a rapidly growing organization."
      }
      imageSrc={Images.AdsHeader}
      imageAlt={"Neocova design system solutions"}
    />
    <Background
      role={
        "Led all design efforts with a team of two Thoughtbot developers & client stakeholders, implemented front-end code"
      }
      tools={"Figma, Mural, Asana, Elm"}
    >
      ADS is a growing logistics company that handles supply chain management -
      their 220 salespeople write around 40-50k quotes a year. Their existing
      quoting tool, a module built on top of Salesforce, was dated and becoming
      unworkable, affecting the team's overall morale and profitability.
      Thoughtbot was hired in 2019 to re-evaluate their existing quoting process
      and provide a solution that would allow them to break free from the
      Salesforce module and{" "}
      <Highlight>
        increase the speed and accuracy of the quoting process.
      </Highlight>
    </Background>
    <Quote
      quote={
        "I feel like I am on the phone all day with both purchasers and suppliers who are asking questions I don't easily have the answers to. I need something that can easily break down a structured quote for me and make it easier to complete quotes faster without being audited for errors."
      }
      source={"Salesperson, ADS"}
    />
    <SectionHeader heading="Understanding the problem & validating the approach">
      ADS works in a highly specialized, complex industry - I wanted to begin
      with a design sprint to clearly understand the problems we needed to solve
      before jumping into the engagement. I extended the understand phase by two
      additional days to ensure I could ramp up on the existing product and
      understand our user personas, and included two rounds of prototyping &
      interviewing since we had a large group of users available for the full
      week.{" "}
      <Highlight>
        I typically treat the design sprint as a toolbox over a rigid format -
        each exercise is a tool that can be leveraged differently each time to
        complete the job at hand.
      </Highlight>
      <Divider />
      View the sprint synthesis to find more details about the design sprint
      including assumptions document, interview script, multiple InVision
      prototypes, and findings.
      <ButtonLink href="https://docs.google.com/document/d/1cfIE22DxKBuOI9T9gpW4P4_WJvkH-MDCzlXPPNUzoC8">
        <Button
          theme={primaryLight}
          label={"View Sprint Synthesis"}
          icon={<FaArrowRight />}
        />
      </ButtonLink>
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.AdsSketches}
      imageAlt={"Design sprint understand phase"}
    />
    <SectionHeader heading="Tightly scoping our MVP">
      Determining our MVP scope was a careful balancing act between business and
      user needs. We had a tight deadline to roll out the new tool before the
      customer had to renew their expensive contract with the Salesforce module
      for another year. However, we needed to ensure that the replacement would
      solve our user problems and satisfy our success metrics determined in our
      PDS.
    </SectionHeader>
    <Blocks
      theme={blueHeading}
      headingOne="Understanding tradeoffs"
      descriptionOne="MVP scoping is difficult and tradeoffs are almost always made. It is important to articulate them, identify the risks associated with making them, and ensure consensus before moving forward."
      headingTwo="Establishing KPIs"
      descriptionTwo="Our KPIs were specific because of our clear and concise problem statement. We needed to measurably increase performance, speed of quoting, and NPS score of our users."
      headingThree="Reinforcing iteration"
      descriptionThree="It is always important to communicate to users that an MVP is not the final product, but more the start. The goal is to get working software in the hands of users as soon as possible and iterate from there."
    />
    <SectionHeader heading="Establishing a design system early & evangelizing it">
      Because ADS had plans to grow the tool over time and build a suite of
      products, we wanted to scale appropriately by establishing a design system
      early in the engagement.{" "}
      <Highlight>
        {" "}
        This helped inform our design process and articulate design decisions to
        the customer throughout the engagement.
      </Highlight>{" "}
      I'm a big fan of atomic design systems for larger projects, especially
      with customers without prior design system experience. The chemistry
      analogy is understandable and elegant and translates well to UI
      components. We chose to build and maintain the system in Figma as it
      serves as a great centralized and dynamic resource to maintain a single
      source of truth.
      <Divider />
      I've provided an example of the data tables section in this case study to
      showcase the structure of the system. I recommend viewing the complete
      system in Figma for overviews, components, and use cases.
      <ButtonLink href="https://www.figma.com/file/5Zsol3djD1urip9AfMQKjy/ADS-Design-System">
        <Button
          theme={primaryLight}
          label={"View Design System"}
          icon={<FaArrowRight />}
        />
      </ButtonLink>
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.AdsDesignSystem}
      imageAlt={"Data tables design system documentation"}
    />
    <SectionHeader heading="Partnering with users to iterate on our design">
      This engagement was a rare opportunity for me - because this was an
      enterprise tool being built for a specific sales team, {" "}
      <Highlight>
        we had regular access to our complete group of active users.
      </Highlight>
       I wanted to ensure we leveraged this access and built a formal user group
      that we met weekly with to review design work. The members of this group
      rotated monthly to ensure we diversified our feedback. Additionally, we
      regularly sent out surveys to the full team to provide feedback on mockups
      and prototypes to ensure we amplified the quieter voices on the team.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.AdsDashboard}
      imageAlt={"Dashboard user interface"}
    />
    <SectionHeader heading="Providing context with simple data visualizations">
      Many of our users were juggling multiple quotes with hundreds of lines at
      a time. They often had to switch contexts quickly, often in the middle of
      calls with suppliers or purchasers.{" "}
      <Highlight>
        We wanted to make sure we presented the overall state of a quote through
        simple data visualizations that could be digested at a glance.
      </Highlight>{" "}
      Through interviewing and surveying, we determined that the quote status,
      win percentage, and overall validation of the lines were the most
      important items that needed to be visually amplified. This helped users
      jump into quotes and switch contexts faster.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.AdsData}
      imageAlt={"Data visualizations on dashboard"}
    />
    <SectionHeader heading="Providing inline feedback on quote completion & accuracy">
      Building a quote is complex, and many of the fields are interdependent on
      each other. As the complexity of a quote grows and more constraints and
      validations are added, the risk of adding inconsistencies and errors grows
      as well.{" "}
      <Highlight>
        The previous tool did not communicate validations to the user until the
        final submission of the quote - we wanted to ensure we were providing
        this information in real-time
      </Highlight>
      , so the user could contextually understand the impact of the changes they
      were making and action on the in context. This helped users feel confident
      in the accuracy of their quote when it came time to export, improving both
      the speed and accuracy of the overall process.
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.AdsInline}
      imageAlt={"Inline feedback on dashboard"}
    />
    <SectionHeader heading="Reducing unnecessary manual data entry">
      A section of our user group reported quotes with hundreds of lines which
      would take them days to complete with the previous tool. Upon further
      examination, many of the quotes had fields that were repetitively applied
      throughout.{" "}
      <Highlight>
        We added the ability to apply a field value to the entire quote, saving
        hours from the process and reducing mistakes from dull manual entry.
      </Highlight>{" "}
      Additionally, we examined the relationship salespeople had with purchasers
      to find more opportunities for optimization. Purchasers would often send
      them CSV files with their order requests that the salespeople would then
      manually translate into the quoting tool.{" "}
      <Highlight>
        By building out a bulk upload feature, we were able to dramatically
        reduce the speed & inaccuracies associated with manual data entry.
      </Highlight>
    </SectionHeader>
    <FeaturedImage
      imageSrc={Images.AdsApply}
      imageAlt={"Inline feedback on dashboard"}
    />
    <SectionHeader heading="Measuring Success">
      While we kept our KPIs in mind throughout the entire design process, we
      developed a plan to formally evaluate them after launching the MVP. Over
      the course of the next month, we sent out NPS score surveys to compare
      general opinion between the old and new quoting tools. Additionally, the
      customer was able to track the speed of quote fulfillment and accuracy on
      their end, providing a{" "}
      <Highlight>mix of qualitative and quantitative analysis.</Highlight>
    </SectionHeader>
    <Blocks
      theme={redHeading}
      headingOne="Improving Speed"
      descriptionOne="Our implementations of bulk upload, inline validations, overall performance, and general usability improvements dramatically increased the speed of quoting."
      headingTwo="Improving Accuracy"
      descriptionTwo="Inline validations had a dramatic impact on the auditing team as we were able to identify and resolve errors in the quoting process before moving them forward for review."
      headingThree="Next Steps"
      descriptionThree="We provided the customer with a plan on how to iterate on our designs after the engagement. Maintaining the formal user group and regular surveys were critical to this process."
    />
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
