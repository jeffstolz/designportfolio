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
  margin-left: ${Spacing.large};
  padding-top: ${Spacing.small};
  width: 38%;
`

const Heading = styled.h4`
  margin-bottom: ${Spacing.base};
`

const HighlightList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const Highlight = styled.li`
  display: flex;
  width: 33.33%;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0 ${Spacing.xSmall};
`

const HighlightImg = styled.div`
  background-color: black;
  width: 5em;
  height: 5em;
  margin-bottom: ${Spacing.xSmall};
`

const Description = styled.p`
  font-size: ${Typography.smallFontSize};
  color: ${Colors.darkGray};
  text-align: center;
  line-height: ${Typography.largeLineHeight};
`

export default Highlights
