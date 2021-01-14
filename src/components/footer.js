import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Footer = () => (
  <Container>
    <p>
      Designed & developed by Jeff Stolz using{" "}
      <Link href="https://www.gatsbyjs.org/">Gatsby</Link> and{" "}
      <Link href="https://github.com/jeffstolz/gatsby-portfolio">GitHub</Link>
    </p>
  </Container>
)

const Container = styled.footer`
  color: ${Colors.gray2};
  background-color: ${Colors.gray4};
  font-size: ${Typography.smallFontSize};
  padding: 1.5em 12%;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: 1.5em 8%;
  }
`

const Link = styled.a`
  color: ${Colors.gray2};

  &:hover {
    color: ${Colors.gray1};
  }
`

export default Footer
