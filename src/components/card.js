import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Card = ({
  cardWidth,
  projectLink,
  children,
  previewHeading,
  previewText,
  imageSrc,
  imageAlt,

}) => (
  <Container cardWidth={cardWidth} >
    <Link to={projectLink}>
      <OverlayContainer>
        {children}
      </OverlayContainer>
      <Slide>
        <PreviewHeading>{previewHeading}</PreviewHeading>
        <PreviewText>{previewText}</PreviewText>
      </Slide>
      <PreviewImage
        src={imageSrc}
        alt={imageAlt}
      />
    </Link>
  </Container>
)

const OverlayContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: ${Spacing.small};
  background-color: ${Colors.transparentBlack};
  opacity: 0;
  transition: 0.5s ease;

  @media (max-width: ${Spacing.breakPoint}) {
    opacity: 1;
  }
`

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  background-color: ${Colors.black};
  opacity: 0;
  transition: 0.5s ease;
  padding-left: ${Spacing.small};

  @media (max-width: ${Spacing.breakPoint}) {
    opacity: 1;
    height: ${Spacing.huge};
  }
`

const Container = styled.div.attrs(props => ({
  cardWidth: props.cardWidth || "59%",
}))`
  position: relative;
  display: flex;
  background-color: ${Colors.white};
  height: ${Spacing.cardHeight};
  width: ${props => props.cardWidth};
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);


  &:hover {
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  }

  &:hover ${OverlayContainer} {
    opacity: 1;
    transition: 0.3s ease;
  }

  &:hover ${Slide} {
    height: ${Spacing.huge};
    opacity: 1;
    transition: 0.3s ease;
  }

  @media (max-width: ${Spacing.breakPoint}) {
    justify-content: flex-end;
    height: ${Spacing.cardMobileHeight};
    width: 100%;
    margin-bottom: ${Spacing.base};
  }
`

const PreviewHeading = styled.h2`
  color: ${Colors.white};
  font-size: ${Typography.baseFontSize};
  line-height: ${Typography.hugeLineHeight};
`

const PreviewText = styled.h3`
  color: ${Colors.white};
  font-size: ${Typography.smallFontSize};
  font-weight: ${Typography.lightFontWeight};
  opacity: 0.7;
`

const PreviewImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`


export default Card
