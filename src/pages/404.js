import React from "react"
import Seo from "../components/seo"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"
import Button from "../components/button"
import { secondaryLight } from "../components/themes"
import { FaArrowRight } from "react-icons/fa"

const NotFoundPage = () => (
  <OuterContainer>
    <Container>
      <Seo title="Page Not Found" />
      <Heading>Page Not Found</Heading>
      <Subheading>Sorry, this page does not exist</Subheading>
      <ButtonLink href="/">
        <Button
          theme={secondaryLight}
          label={"Return to Site"}
          icon={<FaArrowRight />}
        />
      </ButtonLink>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${Spacing.xxHuge} ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.sectionPaddingMobile};
  }
`

const Container = styled.div`
  max-width: 62em;

  @media (max-width: ${Spacing.breakPoint}) {
    max-width: 25em;
  }
`

const Heading = styled.h1`
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.headingFontSize};
  margin-bottom: 0;

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.mediumFontSize};
  }
`

const Subheading = styled.p`
  font-family: ${Typography.primaryFontFamily};
  font-size: ${Typography.baseFontSize};
  color: ${Colors.gray4};

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.smallFontSize};
  }
`

const ButtonLink = styled.a`
  display: flex;
  text-decoration: none;
  margin-top: ${Spacing.base};
`

export default NotFoundPage
