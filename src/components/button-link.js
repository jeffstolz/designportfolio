import React from "react"
import styled from "styled-components"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const ButtonLink = () => (
  <Container href={Images.JeffStolzResume} download>
    Download Resume
    <Icon src={Images.ArrowTopRight} />
  </Container>
)

const Container = styled.a`
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.mediumFontWeight};
  background-color: ${Colors.gray};
  color: ${Colors.black};
  padding: 1.3em 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Icon = styled.img`
  margin-left: ${Spacing.small};
`

export default ButtonLink
