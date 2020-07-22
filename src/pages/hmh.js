import React from "react"
import styled from "styled-components"

import DefaultLayout from "../layouts/default-layout"
import CaseStudyHeader from "../components/case-study-header"
import CaseStudyImage from "../components/case-study-image"
import CaseStudyIntro from "../components/case-study-intro"
import Divider from "../components/divider"
import Label from "../components/label"

import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const HmhPage = () => (
  <DefaultLayout>
    <CaseStudyHeader
      title={"HMH Marketplace"}
      welcomeText={
        " PDS to build an online destination that offers teachers & content creators the opportunity to share digital resources for the classroom."
      }
    >
      <Label borderColor={Colors.green} label={"Case Study"} />
      <Label borderColor={Colors.blue} label={"Product Design"} />
    </CaseStudyHeader>
    <CaseStudyImage
      marginBottom={Spacing.xxHuge}
      marginBottomMobile={Spacing.huge}
      imageSrc={Images.HmhOverview}
      imageAlt={"HMH Marketplace Overview"}
    />
    <CaseStudyIntro
      heading={"Background"}
      description={
        "At HMH Labs, our focus as a tech incubator was to experiment with technology to transform the learning experience for students, teachers, and parents. One project we worked on was the HMH Marketplace, an online marketplace for educators. The following case study outlines the 5-day Design Sprint that we conducted, in partnership with thoughtbot, to test & validate this concept."
      }
    />
    <Divider />
    <CaseStudyIntro
      heading={"Understand"}
      description={
        "We began by defining our challenge, which was to create an online marketplace for educators and content creators to buy and sell digital resources. We created an affinity map to catalog and organize our ideas, defined our personas, and created a basic journey map to visualize the customer experience. At the end of the day we determined our success metrics by following the Google HEART Framework."
      }
    />
    <CaseStudyImage
      imageSrc={Images.HmhUxcanvas}
      imageAlt={"HMH How Might We Statements"}
    />
    <p>
      We used the ’How Might We” method to catalog our ideas and assumptions in
      the morning. Once we had a large sample set of ideas on the board, we
      organized them into an affinity map to identify themes and categories. We
      then voted as a group on the ideas that we wanted to be mindful of moving
      forward.
    </p>
    <CaseStudyImage imageSrc={Images.HmhMap} imageAlt={"HMH Journey Map"} />
    <p>
      Additionally, we created a rough journey map to determine how our customer
      would experience the product. This helped us established a user-centric
      mindset from the beginning and remain empathetic to their goals throughout
      the week.
    </p>
    <Divider />
    <CaseStudyIntro
      heading={"Sketch"}
      description={
        "Tuesday was all about rapid ideation and collaboration. Afte conducting some industry research as a group, we created a divers set of solutions through short sketching exercises. This was a refreshing experience, as many members of the sprint team were not experienced product designers, and enjoyed the unique opportunity to grab a pen and participate in the process."
      }
    />
    <CaseStudyImage
      imageSrc={Images.HmhSketches}
      imageAlt={"HMH Solution Sketches"}
    />
    <p>
      The morning was spent conducting various ’Crazy 8” sketching exercises to
      rapidly ideate on rough concepts. After each round, the team members
      presented their ideas and we voted on the viable solutions. Once we had a
      collection of realistic options, we each focused on a solution to flesh
      out. We gave ourselves more time to think through the details and provide
      a presentable option to be considered for the prototype.
    </p>
    <Divider />
    <CaseStudyIntro
      heading={"Decide"}
      description={
        "We each presented our solution sketches to the team and used heatmap voting to help us identify the most viable solutions. Our opinions were originally scattered, so we created a decision matrix to help us determine what to focus on. It was a grueling day, but in the end we had a consensus: we would focus on the core buyer workflow of a free product. We completed the day by listing our assumptions that we needed to validate through user interviews."
      }
    />
    <Divider />
    <CaseStudyIntro
      heading={"Prototype"}
      description={
        "With a clear vision, it was now time to build out our solution. We created a simple storyboard to map out the workflow we wanted to validate. Because we only scheduled a day for prototyping, we built a simple UI in Rails without any backend functionality. This gave us enough to user test for Friday, while still minimizing effort."
      }
    />
    <ImageRow>
      <SolutionImage src={Images.HmhSolutionOne} alt="HMH Solution One" />
      <SolutionImage src={Images.HmhSolutionTwo} alt="HMH Solution Two" />
    </ImageRow>
    <ImageRow>
      <SolutionImage src={Images.HmhSolutionThree} alt="HMH Solution Three" />
      <SolutionImage src={Images.HmhSolutionFour} alt="HMH Solution Four" />
    </ImageRow>
    <Divider />
    <CaseStudyIntro
      heading={"Validate"}
      description={
        "With a finished prototype, we met with our collection of users consisting of teachers, developers, and a scattering of coworkers around the office. We asked users to explore the application and express their thoughts and opinions, and then had them to complete specific, targeted tasks. This allowed us to generate an initial consensus and test against our assumptions."
      }
    />
    <Divider />
    <CaseStudyIntro
      heading={"Outcome"}
      description={
        "After our successful design sprint, we spent the next six months developing our MVP and released a public beta. The HMH Marketplace beta generated over 5,000 products and 200 users within it's first week of launch. Our users included Google, Microsoft, and Highlights Magazine. In the end, HMH chose to focus on another direction strategically, and no longer supports the marketplace. However, as a team we were able to rapidly test out the solution on the market with little investment in resources, which was the overall purpose of our team."
      }
    />
    <CaseStudyImage
      marginBottom={Spacing.xxHuge}
      marginBottomMobile={Spacing.huge}
      imageSrc={Images.HmhSolutionFive}
      imageAlt={"HMH Solution Five"}
    />
    <CaseStudyIntro
      heading={"Reflection"}
      description={
        "In retrospect, we would have done more research leading into the design sprint on the market need for a product like this and the problems it would solve. Additionally, we would schedule more users to test with during the validation stage, as we did have to result to interviewing some team members which may have skewed our results."
      }
    />
  </DefaultLayout>
)

const SolutionImage = styled.img`
  width: 24em;
  object-fit: contain;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.large};
  }
`

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${Spacing.large};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`

export default HmhPage
