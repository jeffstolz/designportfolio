import React, { useState } from "react"
import { setSessionPassword } from "../utils/utils"
import Seo from "../../../components/seo"
import styled from "styled-components"
import { Colors, Spacing, Typography } from "../../../styles/variables"
import { FaArrowRight } from "react-icons/fa"

const PasswordProtect = () => {
  const [password, setPassword] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload()
  }

  return (
    <OuterContainer>
      <Container>
        <Seo title="Enter Password" />
        <Heading>Please Enter Password</Heading>
        <Subheading>
          Don't have one?{" "}
          <EmailLink href="mailto:j%73%74o%6Cz12%33@%67ma%69%6C.co%6D">
            Email me
          </EmailLink>{" "}
          to request access to my case studies.
        </Subheading>

        <Form onSubmit={onSubmit}>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit">
            Enter
            <Icon>
              <FaArrowRight />
            </Icon>
          </Button>
        </Form>
      </Container>
    </OuterContainer>
  )
}

const OuterContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${Spacing.xxHuge} ${Spacing.sectionPadding};

  @media (max-width: ${Spacing.breakPoint}) {
    padding: ${Spacing.large} ${Spacing.sectionPaddingMobile};
  }
`

const Container = styled.div`
  max-width: 62em;

  @media (max-width: ${Spacing.breakPoint}) {
    max-width: 25em;
  }
`

const Heading = styled.h1`
  color: #252b33;
  font-size: 40px;
  font-family: ${Typography.headingFontFamilyAlt};
  font-weight: 400;
  margin: 0;
`

const Subheading = styled.p`
  font-family: Georgia, serif;
  font-size: 20px;
  color: #474d55;
`

const EmailLink = styled.a`
  color: #ef5350;
  text-decoration: none;
  font-size: 20px;
  font-family: Georgia, serif;

  &:hover {
    cursor: pointer;
    color: #d21714;
    text-decoration: underline;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  max-width: 20em;
  padding: ${Spacing.small};
  border: solid 1px ${Colors.gray4};
  border-radius: ${Spacing.xSmall};
  margin: ${Spacing.medium} 0 ${Spacing.small} 0;
  font-size: ${Typography.baseFontSize};
`

const Button = styled.button`
  width: 12em;
  position: relative;
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.mediumFontWeight};
  background-color: #ef5350;
  color: ${Colors.white};
  border: 1px solid #ef5350;
  padding: 1.3em 2.8em 1.3em 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.black};
    color: ${Colors.white};
    border: 1px solid ${Colors.black};
  }
`

const Icon = styled.span`
  position: absolute;
  top: 1.4em;
  right: 1.3em;
`

export default PasswordProtect
