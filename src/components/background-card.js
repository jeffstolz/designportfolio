import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const FeaturedWorkCard = ({ title, company, dates, description }) => (
  <OuterContainer>
    <JobContainer>
      <Dates>{dates}</Dates>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Description>{description}</Description>
    </JobContainer>
    <HighlightContainer>
      <HighlightHeading>Highlights</HighlightHeading>
      <HighlightList>
        <Highlight>
          <HighlightImg></HighlightImg>
          <HighlightCopy>
            Test but with a longer line that will carry to two and more copy.
          </HighlightCopy>
        </Highlight>
        <Highlight>
          <HighlightImg></HighlightImg>
          <HighlightCopy>
            Test but with a longer line that will carry to two and more copy.
          </HighlightCopy>
        </Highlight>
        <Highlight>
          <HighlightImg></HighlightImg>
          <HighlightCopy>
            Test but with a longer line that will carry to two and more copy.
          </HighlightCopy>
        </Highlight>
      </HighlightList>
    </HighlightContainer>
  </OuterContainer>
)

const OuterContainer = styled.li`
  display: flex;
  margin-bottom: ${Spacing.huge};
`

const JobContainer = styled.div`
  background-color: ${Colors.white};
  box-shadow: ${Colors.lightShadow};
  border-radius: ${Spacing.xSmall};
  padding: ${Spacing.base};
  width: 50%;
  min-height: 12em;
  position: relative;

  &::after {
    position: absolute;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-left: 35px solid ${Colors.white};
    border-bottom: 30px solid transparent;
    filter: drop-shadow(4px 1px 1px rgba(0, 0, 0, 0.07));
  }
`

const Dates = styled.p`
  color: ${Colors.gray};
  font-size: ${Typography.xSmallFontSize};
  margin-bottom: ${Spacing.xxSmall};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Title = styled.h3`
  margin-bottom: ${Spacing.xxSmall};
`

const Company = styled.h4`
  margin-bottom: ${Spacing.small};
`

const Description = styled.p`
  color: ${Colors.darkGray};
  margin: 0;
`

const HighlightContainer = styled.div`
  margin-left: ${Spacing.large};
  padding-top: ${Spacing.base};
  width: 43%;
`

const HighlightHeading = styled.h4`
  margin-bottom: ${Spacing.small};
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
  border-radius: 50%;
  margin-bottom: ${Spacing.xSmall};
`

const HighlightCopy = styled.p`
  font-size: ${Typography.smallFontSize};
  color: ${Colors.darkGray};
  text-align: center;
  line-height: ${Typography.largeLineHeight};
`

export default FeaturedWorkCard
