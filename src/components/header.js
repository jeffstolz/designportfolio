import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Spacing } from "../styles/variables"

const Header = () => (
  <OuterContainer>
    <Container>
      <div>
        <Link to="/">Jeff Stolz</Link>
      </div>
      <LinkGroup>
        <Link to="/" activeClassName="activelink">
          Work
        </Link>
        <Link to="/about" activeClassName="activelink">
          About
        </Link>
        <Link to="/contact" activeClassName="activelink">
          Contact
        </Link>
      </LinkGroup>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.header`
  display: flex;
  justify-content: center;
  padding-top: ${Spacing.small};
`

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90.5%;
`

const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 13em;
`

export default Header
