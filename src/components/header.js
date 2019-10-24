import React from "react"
import styled from "styled-components"

const Header = () => (
  <HeaderContainer>
    <div>
      <HeaderLink href="/">Jeff Stolz</HeaderLink>
    </div>
    <HeaderLinkGroup>
      <HeaderLink href="/">Work</HeaderLink>
      <HeaderLink href="/">About</HeaderLink>
      <HeaderLink href="/">Contact</HeaderLink>
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

const HeaderLink = styled.a`
  text-decoration: none;
  color: black;
`

export default Header
