import React from "react"
import styled from "styled-components"
import { Spacing } from "../styles/variables"

const CaseStudyImage = ({
  marginBottom,
  marginBottomMobile,
  imageSrc,
  imageAlt,
  boxShadow,
}) => {
  return (
    <Image
      marginBottom={marginBottom}
      marginBottomMobile={marginBottomMobile}
      src={imageSrc}
      alt={imageAlt}
      boxShadow={boxShadow}
    />
  )
}

const Image = styled.img.attrs(props => ({
  marginBottom: props.marginBottom || Spacing.base,
  marginBottomMobile: props.marginBottomMobile || Spacing.base,
}))`
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${props => props.marginBottom};
  object-fit: contain;
  width: 100%;
  -webkit-box-shadow: ${props => props.boxShadow};
  -moz-box-shadow: ${props => props.boxShadow};
  box-shadow: ${props => props.boxShadow};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.huge};
    margin-bottom: ${props => props.marginBottomMobile};
  }
`

export default CaseStudyImage
