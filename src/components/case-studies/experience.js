import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../../styles/variables"

const Experience = ({
  headingOne,
  descriptionOne,
  headingTwo,
  descriptionTwo,
  headingThree,
  descriptionThree,
}) => (
  <Fade>
    <Container>
      <Block>
        <Heading>{headingOne}</Heading>
        <Description>{descriptionOne}</Description>
      </Block>
      <Block>
        <Heading>{headingTwo}</Heading>
        <Description>{descriptionTwo}</Description>
      </Block>
      <Block>
        <Heading>{headingThree}</Heading>
        <Description>{descriptionThree}</Description>
      </Block>
    </Container>
  </Fade>
)

const Container = styled.section`
  display: flex;
  padding: ${Spacing.huge} ${Spacing.sectionPadding} 0 ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
    padding: ${Spacing.large} ${Spacing.sectionPaddingMobile} 0
      ${Spacing.sectionPaddingMobile};
  }
`

const Block = styled.div`
  padding: ${Spacing.xBase};
  width: 20em;
  margin-right: ${Spacing.small};
  background-color: ${Colors.offWhite};

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: ${Spacing.base};
  }
`

const Heading = styled.h3`
  font-size: ${Typography.smallFontSize};
  color: ${Colors.red};
  text-transform: uppercase;
  font-weight: ${Typography.baseFontWeight};
  margin-bottom: ${Spacing.small};
`

const Description = styled.p`
  color: ${Colors.gray4};
  font-size: ${Typography.smallFontSize};
  line-height: ${Typography.largeLineHeight};
`

export default Experience
