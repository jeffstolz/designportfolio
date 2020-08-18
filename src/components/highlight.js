import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Highlight = ({ imageSrc, imageAlt, description }) => (
  <Container>
    <ImageContainer>
      <HighlightImage src={imageSrc} alt={imageAlt} />
    </ImageContainer>
    <Description>{description}</Description>
  </Container>
)

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    flex-direction: row;
    width: 100%;
    margin-bottom: ${Spacing.xSmall};
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${Spacing.huge};
  height: ${Spacing.huge};
  margin-bottom: ${Spacing.xSmall};
  border: 1px solid ${Colors.lightGray};
  border-radius: ${Spacing.xxSmall};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: ${Spacing.large};
    height: ${Spacing.large};
    margin-right: ${Spacing.small};
  }
`

const HighlightImage = styled.img`
  opacity: 0.5;
`

const Description = styled.p`
  display: flex;
  font-size: 0.78em;
  color: ${Colors.darkGray};
  text-align: center;
  line-height: ${Typography.largeLineHeight};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 60%;
    font-size: ${Typography.smallFontSize};
    text-align: left;
  }
`

export default Highlight
