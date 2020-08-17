import React from "react"
import styled from "styled-components"
import { Spacing } from "../styles/variables"

const Footer = () => (
  <Container>
    <p>
      Designed & developed by Jeff Stolz using{" "}
      <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
      <a href="https://github.com/jeffstolz/gatsby-portfolio">GitHub</a>, and a{" "}
      <a href="https://www.youtube.com/watch?v=8ybW48rKBME">Secret Weapon</a>
    </p>
  </Container>
)

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${Spacing.base};
`

export default Footer
