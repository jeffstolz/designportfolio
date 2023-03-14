import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Link as ScrollLink } from "react-scroll"
import { Colors, Spacing } from "../styles/variables"

const Navbar = () => (
  <Container id="top">
    <Fade delay={300}>
      <div>
        <Logo href="/">Jeff Stolz</Logo>
      </div>
      <NavList>
        <NavItem>
          <ScrollLink
            activeClass="active"
            to={"skills"}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <NavLink>About</NavLink>
          </ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink
            activeClass="active"
            to={"case-studies"}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <NavLink>Work</NavLink>
          </ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink
            activeClass="active"
            to={"footer"}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <NavLink>Contact</NavLink>
          </ScrollLink>
        </NavItem>
      </NavList>
    </Fade>
  </Container>
)

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${Spacing.base} ${Spacing.large} 0 ${Spacing.large};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    padding: ${Spacing.small} ${Spacing.base} 0 ${Spacing.base};
  }
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  width: 12em;
  justify-content: space-between;

  @media (max-width: ${Spacing.smallBreakPoint}) {
    width: 10em;
  }
`

const NavItem = styled.li`
  margin: 0;
`

const Logo = styled.a`
  color: ${Colors.black};
  text-decoration: none;
  font-weight: bolder;
  text-transform: uppercase;

  &:hover {
    color: ${Colors.blue};
  }
`

const NavLink = styled.a`
  color: ${Colors.black};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${Colors.blue};
  }
`

export default Navbar
