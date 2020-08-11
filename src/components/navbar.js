import React from "react"
import styled from "styled-components"
import { Colors, Spacing } from "../styles/variables"

const Navbar = () => (
  <OuterContainer>
    <Container>
      <div>
        <NavLink href="/">Jeff Stolz</NavLink>
      </div>
      <NavList>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#work">Work</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#ethos">Ethos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#background">Background</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${Spacing.medium};
  background-color: ${Colors.black};
  z-index: 1;
`

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 95%;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const NavItem = styled.li`
  margin: 0 0 0 ${Spacing.base};
`

const NavLink = styled.a`
  color: ${Colors.white};
`

export default Navbar
