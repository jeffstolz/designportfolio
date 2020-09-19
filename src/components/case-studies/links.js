import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Spacing } from "../../styles/variables"

const Links = ({
  linkSrcOne,
  linkTitleOne,
  linkSrcTwo,
  linkTitleTwo,
  linkSrcThree,
  linkTitleThree,
}) => (
  <OuterContainer>
    <Container>
      <Heading>Check out my other case studies...</Heading>
      <LinkContainer>
        <CaseLink to={linkSrcOne}>{linkTitleOne}</CaseLink>
        <CaseLink to={linkSrcTwo}>{linkTitleTwo}</CaseLink>
        <CaseLink to={linkSrcThree}>{linkTitleThree}</CaseLink>
      </LinkContainer>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.xxHuge} ${Spacing.base} ${Spacing.large} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.huge} ${Spacing.small};
  }
`

const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.containerWidth};
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.small};
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CaseLink = styled(Link)`
  margin-bottom: ${Spacing.small};
`

export default Links
