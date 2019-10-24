import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => (
  <HeaderContainer>
    <div>
      <Link href="/">Jeff Stolz</Link>
    </div>
    <HeaderLinkGroup>
      <Link to="/">Work</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
    </HeaderLinkGroup>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150pt;
`

export default Header
