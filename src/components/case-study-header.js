import React from "react"
import styled from "styled-components"
import SEO from "./seo"
import { Spacing, Typography } from "../styles/variables"

const CaseStudyHeader = ({ title, children, welcomeText }) => {
  return (
    <>
      <SEO title={title} />
      <Heading>{title}</Heading>
      <LabelContainer>{children}</LabelContainer>
      <WelcomeText>{welcomeText}</WelcomeText>
    </>
  )
}

const Heading = styled.h1`
  font-size: ${Typography.headingFontSize};
  margin-top: ${Spacing.base};
  margin-bottom: ${Spacing.xxxSmall};
`

const LabelContainer = styled.div`
  display: flex;
  margin-top: ${Spacing.small};
  margin-bottom: ${Spacing.medium};
`

const WelcomeText = styled.p`
  font-size: ${Typography.mediumFontSize};
  line-height: ${Typography.largeLineHeight};
`

export default CaseStudyHeader
