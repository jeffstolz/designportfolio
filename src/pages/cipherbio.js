import React from "react"
import styled from "styled-components"

import DefaultLayout from "../layouts/default-layout"
import CaseStudyHeader from "../components/case-study-header"
import Label from "../components/label"

import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const CipherbioPage = () => (
  <DefaultLayout>
    <CaseStudyHeader title={"CipherBio"}>
      <Label borderColor={Colors.blue} label={"Product Design"} />
    </CaseStudyHeader>
    <p>
      In February 2019, I and another thoughtbot designer led a design sprint
      for CipherBio to determine how they could provide value to their users
      with a native mobile application. CipherBio is an information and
      networking platform for investors in the life sciences industry. During
      our discovery research and interviews, we learned that users needed a
      place to consume information about acquisitions and breakthroughs specific
      to the industry. We prototyped a mobile tool where investors could consume
      this information in a clean & concise mobile format. Ultimately, we ended
      up disproving the concept after user testing our prototype, and decided to
      move in a different direction with the customer. This is a great example
      of the value of design sprints, as only two weeks of effort was dedicated
      to this project before learning this key insight.
    </p>
    <ImageRow>
      <SolutionImage src={Images.CipherbioBlog} alt="CipherBio Blog" />
      <SolutionImage
        src={Images.CipherbioBlogArticle}
        alt="CipherBio Blog Article"
      />
    </ImageRow>
    <ImageRow>
      <SolutionImage
        src={Images.CipherbioArticle}
        alt="CipherBio Blog Article"
      />
      <SolutionImage src={Images.CipherbioArchives} alt="CipherBio Archives" />
    </ImageRow>
    <ImageRow>
      <SolutionImage
        src={Images.CipherbioCommunity}
        alt="CipherBio Community"
      />
      <SolutionImage src={Images.CipherbioCompany} alt="CipherBio Company" />
    </ImageRow>
  </DefaultLayout>
)

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

export default CipherbioPage
