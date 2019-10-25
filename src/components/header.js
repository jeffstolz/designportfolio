import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => (
  <HeaderOuterContainer>
    <HeaderContainer>
      <div>
        <Link href="/">Jeff Stolz</Link>
      </div>
      <HeaderLinkGroup>
        <ActiveLinkContainer>
          <Link to="/">Work</Link>
        </ActiveLinkContainer>
        <LinkContainer>
          <Link to="/about">About</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/">Contact</Link>
        </LinkContainer>
      </HeaderLinkGroup>
    </HeaderContainer>
  </HeaderOuterContainer>
)

const HeaderOuterContainer = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 15pt;
`

const HeaderContainer = styled.header`
  display: flex;
  width: 90%;
  justify-content: space-between;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  width: 200pt;
`

const ActiveLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1pt solid black;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export default Header
