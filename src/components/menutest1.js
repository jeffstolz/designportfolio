import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Images } from "../images"
import { Typography } from "../styles/variables"

const Menutest1 = () => (
  <Menu>
    <Headshot src={Images.Headshot} alt="Headshot of Jeff Stolz" />
    <MenuHeader>Jeff Stolz</MenuHeader>
    <MenuList>
      <MenuItem>
        <ActiveWrapper>
          <ActiveLine />
          <MenuLinkActive to={"/"}>Portfolio</MenuLinkActive>
          <ActiveLine />
        </ActiveWrapper>
      </MenuItem>
      <MenuItem>
        <MenuLink to={"abouttest"}>About</MenuLink>
      </MenuItem>
    </MenuList>
  </Menu>
)

const Menu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 448px;
  margin-top: 150px;
`

const Headshot = styled.img`
  width: 150px;
  border-radius: 100%;
  margin-bottom: 20px;
`

const MenuHeader = styled.h1`
  font-size: 35px;
  font-family: ${Typography.headingFontFamilyAlt};
  color: #252b33;
  margin-bottom: 15px;
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`

const MenuItem = styled.li`
  text-align: center;
  padding-bottom: 15px;
`

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: Georgia, serif;
  font-size: 18px;
  color: #474d55;

  &:hover {
    cursor: pointer;
    color: #d21714;
    text-decoration: underline;
  }
`

const MenuLinkActive = styled(Link)`
  text-decoration: none;
  font-family: Georgia, serif;
  font-size: 18px;
  color: #d21714;
  font-weight: 600;
  padding: 0 15px;

  &:hover {
    cursor: pointer;
    color: #d21714;
    text-decoration: underline;
  }
`

const ActiveWrapper = styled.div`
  display: flex;
  width: 200px;
`

const ActiveLine = styled.hr`
  width: 100%;
  color: #cecece;
`

export default Menutest1
