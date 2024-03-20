import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Images } from "../images"
import { Typography } from "../styles/variables"

const Menutest3 = () => (
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
        <MenuLink to={"../about"}>About</MenuLink>
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

  @media (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 10px 20px;
    margin-top: 0;
  }
`

const Headshot = styled.img`
  width: 150px;
  border-radius: 100%;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    display: none;
  }
`

const MenuHeader = styled.h1`
  font-size: 35px;
  font-family: ${Typography.headingFontFamilyAlt};
  color: #252b33;
  margin-bottom: 15px;
  font-weight: 300;

  @media (max-width: 1000px) {
    margin-bottom: 0;
    font-size: 25px;
  }
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`

const MenuItem = styled.li`
  text-align: center;
  padding-bottom: 15px;

  @media (max-width: 1000px) {
    padding-bottom: 0;
  }
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

  @media (max-width: 1000px) {
    padding: 0 25px;
  }
`

const ActiveWrapper = styled.div`
  display: flex;
  width: 200px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const ActiveLine = styled.hr`
  width: 100%;
  color: #cecece;
  opacity: 0.5;

  @media (max-width: 1000px) {
    display: none;
  }
`

export default Menutest3
