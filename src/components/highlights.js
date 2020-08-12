import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Highlights = ({ descriptionOne, descriptionTwo, descriptionThree }) => (
  <Container>
    <Heading>Highlights</Heading>
    <HighlightList>
      <Highlight>
        <HighlightImg></HighlightImg>
        <Description>{descriptionOne}</Description>
      </Highlight>
      <Highlight>
        <HighlightImg></HighlightImg>
        <Description>{descriptionTwo}</Description>
      </Highlight>
      <Highlight>
        <HighlightImg></HighlightImg>
        <Description>{descriptionThree}</Description>
      </Highlight>
    </HighlightList>
  </Container>
)

const Container = styled.div`
  width: 38%;
  margin-left: ${Spacing.large};
  padding-top: ${Spacing.small};
`

const Heading = styled.h4`
  font-family: ${Typography.headingFontFamily};
  font-style: italic;
  margin-bottom: ${Spacing.base};
`

const HighlightList = styled.ul`
  display: flex;
`

const Highlight = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  padding: 0 0.8em;
`

const HighlightImg = styled.div`
  width: ${Spacing.huge};
  height: ${Spacing.huge};
  background-color: black;
  margin-bottom: ${Spacing.xSmall};
`

const Description = styled.p`
  font-size: ${Typography.smallFontSize};
  color: ${Colors.darkGray};
  text-align: center;
  line-height: ${Typography.largeLineHeight};
`

export default Highlights
