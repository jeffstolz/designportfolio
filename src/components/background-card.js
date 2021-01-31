import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Colors, Spacing, Typography } from "../styles/variables"

const BackgroundCard = ({
  title,
  details,
  description,
  highlightOne,
  highlightTwo,
  highlightThree,
}) => (
  <OuterContainer>
    <Fade>
      <Container>
        <Title>{title}</Title>
        <Details>{details}</Details>
        <Description>{description}</Description>
        <HighlightsContainer>
          <Highlights>Highlights</Highlights>
        </HighlightsContainer>
        <List>
          <ListItem>{highlightOne}</ListItem>
          <ListItem>{highlightTwo}</ListItem>
          <ListItem>{highlightThree}</ListItem>
        </List>
      </Container>
    </Fade>
  </OuterContainer>
)

const OuterContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${Spacing.large} ${Spacing.sectionPadding};

  &:nth-child(even) {
    background-color: ${Colors.offWhite};
  }

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.sectionPaddingMobile};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 47em;
`

const Title = styled.h3``

const Details = styled.h4`
  color: ${Colors.gray4};
  margin: ${Spacing.small} 0;
`

const Description = styled.p`
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.smallFontSize};
  }
`

const HighlightsContainer = styled.div`
  width: 6em;
`

const Highlights = styled.h5`
  width: 100%;
  background-color: ${Colors.yellow};
  color: ${Colors.gray4};
  margin-bottom: ${Spacing.small};
  padding: 0.3em 0.3em 0.3em 0.5em;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const List = styled.ul`
  list-style-type: circle;
  margin-left: ${Spacing.small};
`

const ListItem = styled.li`
  margin-bottom: ${Spacing.xxSmall};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-bottom: ${Spacing.xSmall};
    font-size: ${Typography.smallFontSize};
  }
`

export default BackgroundCard
