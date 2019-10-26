import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => (
  <OuterContainer>
    <Container>
      <div>
        <Link href="/">Jeff Stolz</Link>
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
  padding-top: 15pt;
`

const Container = styled.header`
  display: flex;
  width: 90.5%;
  justify-content: space-between;
`

const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170pt;
`

export default Header
