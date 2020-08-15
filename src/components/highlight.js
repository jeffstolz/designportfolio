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
  width: 33.33%;
  padding: 0 0.5em;
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
`

const HighlightImage = styled.img`
  opacity: 0.5;
`

const Description = styled.p`
  font-size: 0.78em;
  color: ${Colors.darkGray};
  text-align: center;
  line-height: ${Typography.largeLineHeight};
`

export default Highlight
