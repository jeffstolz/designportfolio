import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Images } from "../../images"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Intro = ({ company, heading, subheading, children }) => (
  <OuterContainer>
    <Container>
      <LinkContainer>
        <Icon src={Images.Back} alt=""></Icon>
        <Link to={"/"}>Back to Home</Link>
      </LinkContainer>
      <Company>{company}</Company>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.medium} ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.small};
  }
`

const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.containerWidth};
`

const LinkContainer = styled.div`
  display: flex;
  margin-left: -1.2em;
  margin-bottom: ${Spacing.huge};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    margin-left: 0;
  }
`

const Icon = styled.img`
  margin-right: ${Spacing.xSmall};
`

const Heading = styled.h1`
  font-family: ${Typography.primaryFontFamily};
  font-size: 2.6em;
  font-style: normal;
  margin-bottom: ${Spacing.small};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: 1.8em;
  }
`

const Company = styled.h2`
  font-family: ${Typography.primaryFontFamily};
  font-size: ${Typography.baseFontSize};
  font-style: normal;
  font-weight: ${Typography.lightFontWeight};
  color: ${Colors.gray};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${Spacing.small};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.smallFontSize};
  }
`

const Subheading = styled.p`
  font-size: 1.6em;
  font-weight: ${Typography.lightFontWeight};
  color: ${Colors.darkGray};
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: 1.2em;
  }
`

export default Intro
