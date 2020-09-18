import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../../styles/variables"

const ExperienceItem = ({ imageSrc, imageAlt, heading, body }) => (
  <Container>
    <InnerContainer>
      <Image src={imageSrc} alt={imageAlt} />
      <Heading>{heading}</Heading>
    </InnerContainer>
    <Content>{body}</Content>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid ${Colors.lightGray};
  border-radius: ${Spacing.xxSmall};
  padding: ${Spacing.small};

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
    max-width: 25em;
    margin-bottom: ${Spacing.medium};
  }
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: row;
    align-items: center;
    margin-bottom: ${Spacing.small};
  }
`

const Image = styled.img`
  opacity: 0.5;
  height: ${Spacing.base};
  width: ${Spacing.base};
  @media (max-width: ${Spacing.breakPoint}) {
    margin-right: ${Spacing.small};
  }
`

const Heading = styled.h5`
  font-size: ${Typography.mediumFontSize};
  margin: ${Spacing.xSmall} 0;
  color: ${Colors.darkGray};

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${Typography.mediumFontSize};
    margin: 0;
  }
`

const Content = styled.p`
  color: ${Colors.darkGray};
`

export default ExperienceItem
