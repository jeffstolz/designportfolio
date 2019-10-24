import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterContainer>
    <FooterLinkGroup>
      <a href="mailto:j%73%74o%6Cz12%33@%67ma%69%6C.co%6D">Email</a>
      <a href="https://github.com/jeffstolz">Github</a>
      <a href="https://www.linkedin.com/in/jeff-stolz-17666725/">LinkedIn</a>
    </FooterLinkGroup>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
`

const FooterLinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 165pt;
`

export default Footer
