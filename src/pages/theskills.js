import React from "react"

import DefaultLayout from "../layouts/default-layout"
import CaseStudyHeader from "../components/case-study-header"
import CaseStudyImage from "../components/case-study-image"
import CaseStudyIntro from "../components/case-study-intro"
import Divider from "../components/divider"
import Label from "../components/label"

import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const MobileHeartbeatPage = () => (
  <DefaultLayout>
    <CaseStudyHeader
      title={"The Skills"}
      welcomeText={
        "Six weeks to build an online education platform to share how world-class athletes train and compete."
      }
    >
      <Label borderColor={Colors.green} label={"Case Study"} s />
      <Label borderColor={Colors.blue} label={"Product Design"} />
      <Label borderColor={Colors.violet} label={"Visual Design"} />
    </CaseStudyHeader>
    <CaseStudyImage
      marginBottom={Spacing.xxHuge}
      marginBottomMobile={Spacing.huge}
      imageSrc={Images.SkillsHome}
      imageAlt={"The Skills Home Page"}
    />
    <CaseStudyIntro
      heading={"Background"}
      description={
        "The Skills came to thoughtbot with the goal of creating a product for amateur athletes to gain insight into how their idols train and compete. With a limited budget, I and one other developer had a six week timeline to design and develop a Ruby on Rails MVP that would be iterated on by their internal team and eventually launched for the 2020 Olympics. The product would contain a subscription service where members can join and watch professional-quality videos of athletes like Shawn White or Michael Phelps, with breakdowns in how they train, key takeaways of their mentality to competing, and more."
      }
    />
    <Divider />
    <CaseStudyIntro
      heading={"Kickoff"}
      description={
        "We kicked off the project by breaking down the client's desired feature sets. As a group, we rank-ordered them by priority, informed by the user research they had conducted independently to validate the idea. We then marked our waterline for MVP, ensuring there was a consensus across the board of the scope of the engagement. This exercise allowed us to determine the highest value product design and development exercises to conduct moving forward."
      }
    />
    <CaseStudyImage
      imageSrc={Images.SkillsNotes}
      imageAlt={"The Skills Feature Prioritization Exercise"}
    />
    <p>
      In my experience, it is often difficult to convince a client to start with
      a small product scope, launch it, and then iterate on it based on the
      needs and feedback of their base users. Thankfully, our customer came in
      with a strong understanding and discipline when it came to MVP scoping. We
      conducted this exercise on the wall with sticky notes and translated our
      findings into Trello, where we tracked the progress of the project moving
      forward.
    </p>
    <Divider />
    <CaseStudyIntro
      heading={"Information Architecture"}
      description={
        "With our short runway, there was little time to run extensive preliminary research and design exercises. We relied on the interviews and persona research the client collected in the past and looked to competitors for inspiration and lessons. I created a rough workflow diagram and wireframes to ensure we were aligned with the client on the general user journey and layouts."
      }
    />
    <CaseStudyImage
      imageSrc={Images.SkillsFlowDiagram}
      imageAlt={"The Skills User Flow Diagram"}
    />
    <CaseStudyImage
      imageSrc={Images.SkillsWireframes}
      imageAlt={"The Skills Wireframes"}
    />
    <Divider />
    <CaseStudyIntro
      heading={"Mood Boards"}
      description={
        "The Skills was an early-stage startup that had no established brand identity. We wanted to create a powerful visual aesthetic for the MVP without spinning our tires on fleshing out brand identity guidelines, which were out of scope. I created a series of quick mood boards for the client to establish a mutual understanding of the overall look and feel. After a day or two of iterations, we were able to agree on an approach that both excited the customer and I felt confident I could implement in the timeline given."
      }
    />
    <CaseStudyImage
      imageSrc={Images.SkillsMoodboardOne}
      imageAlt={"The Skills Mood Board One"}
    />
    <CaseStudyImage
      imageSrc={Images.SkillsMoodboardTwo}
      imageAlt={"The Skills Mood Board Two"}
    />
    <p>
      One of the competitors we drew inspiration from for our UI patterns was
      Masterclass, a leader in a similar space. Because Masterclass was such a
      well-known brand, we also wanted to make sure we built a unique identity
      from them. We explored bright, bold colors, lighter UI patterns, and
      typography treatments found in editorial design. In the end, we decided a
      dark theme displayed best for a video hosting platform. However, we still
      chose a kinetic, high-energy approach that would translate well to our
      users.
    </p>
    <Divider />
    <CaseStudyIntro
      heading={"Solutions"}
      description={
        "We iterated rapidly on the design work, establishing a clear visual direction within the first week of the engagement. This allowed us to focus the rest of our efforts on implementation, which was done in Ruby on Rails. The following images are the core screens to the final MVP designs, with placeholder copy and images, which are yet to be determined."
      }
    />
    <CaseStudyImage
      imageSrc={Images.SkillsHome}
      imageAlt={"The Skills Homepage"}
    />
    <CaseStudyImage
      imageSrc={Images.SkillsAthletes}
      imageAlt={"The Skills Athletes Page"}
    />
    <CaseStudyImage
      imageSrc={Images.SkillsAthleteLanding}
      imageAlt={"The Skills Athlete Landing Page"}
    />
    <CaseStudyImage
      imageSrc={Images.SkillsAthlete}
      imageAlt={"The Skills Athlete Page"}
    />
    <CaseStudyImage
      imageSrc={Images.SkillsVideo}
      imageAlt={"The Skills Athlete Video Page"}
    />
    <Divider />
    <CaseStudyIntro
      heading={"Outcome"}
      description={
        "I was proud of our ability as a team to prioritize and focus, and as a result, we were able to deliver the MVP scope on-time to a happy customer. This was one of the first times I used informal mood boards with clients, and I will most likely be carrying this technique along for future visual design engagements. The ability to rapidly iterate on design, before getting into the weeds of UI layouts, was invaluable."
      }
    />
  </DefaultLayout>
)

export default MobileHeartbeatPage
