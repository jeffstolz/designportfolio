import React from "react"
import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"
import Button from "./button"
import { secondaryDark } from "./themes"
import { FaArrowUp } from "react-icons/fa"
import { Colors, Spacing, Typography } from "../styles/variables"

const Footer = () => (
  <Container>
    <ScrollLink
      activeClass="active"
      to={"top"}
      spy={true}
      smooth={true}
      duration={800}
    >
      <Button
        theme={secondaryDark}
        label={"Back to Top"}
        icon={<FaArrowUp />}
      />
    </ScrollLink>
    <Description>Designed & developed by Jeff Stolz</Description>
  </Container>
)

const Container = styled.footer`
  display: flex;
  align-items: center;
  color: ${Colors.gray2};
  background-color: ${Colors.gray4};
  font-size: ${Typography.smallFontSize};
  padding: ${Spacing.xBase} ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${Spacing.xBase} ${Spacing.sectionPaddingMobile};
  }
`

const Description = styled.p`
  margin-left: ${Spacing.medium};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-left: 0;
    margin-top: ${Spacing.base};
  }
`

export default Footer
