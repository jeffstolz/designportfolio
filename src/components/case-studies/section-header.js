import React from "react"
import styled from "styled-components"
import { Colors, Spacing } from "../../styles/variables"
import Fade from "react-reveal/Fade"

const SectionHeader = ({ heading, children }) => (
  <Fade>
    <Container>
      <Heading>{heading}</Heading>
      <Description>{children}</Description>
    </Container>
  </Fade>
)

const Container = styled.section`
  padding: ${Spacing.xxxHuge} ${Spacing.sectionPadding} 0
    ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.huge} ${Spacing.sectionPaddingMobile} 0
      ${Spacing.sectionPaddingMobile};
  }
`

const Heading = styled.h2`
  margin-bottom: ${Spacing.small};
`

const Description = styled.p`
  color: ${Colors.gray4};
  max-width: 40em;
`

export default SectionHeader
