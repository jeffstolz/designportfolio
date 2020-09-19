import React from "react"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const Footer = () => (
  <Container>
    <p>
      Designed & developed by Jeff Stolz using{" "}
      <a href="https://www.gatsbyjs.org/">Gatsby</a> and{" "}
      <a href="https://github.com/jeffstolz/gatsby-portfolio">GitHub</a>
    </p>
  </Container>
)

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${Spacing.base};
  border-top: 1px solid ${Colors.lightGray};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.smallFontSize};
  }
`

export default Footer
