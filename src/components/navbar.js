import React from "react"
import styled from "styled-components"
import { Spacing } from "../styles/variables"

const Navbar = () => (
  <OuterContainer>
    <Container>
      <div>
        <a href="/">Jeff Stolz</a>
      </div>
      <NavList>
        <NavItem>
          <a href="#skills">Skills</a>
        </NavItem>
        <NavItem>
          <a href="#work">Work</a>
        </NavItem>
        <NavItem>
          <a href="#ethos">Ethos</a>
        </NavItem>
        <NavItem>
          <a href="#background">Background</a>
        </NavItem>
        <NavItem>
          <a href="#contact">Contact</a>
        </NavItem>
      </NavList>
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

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const NavItem = styled.li`
  margin-left: ${Spacing.base};
`

export default Navbar
