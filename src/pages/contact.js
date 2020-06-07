import React from "react"
import styled from "styled-components"
import HomeLayout from "../layouts/home-layout"
import SEO from "../components/seo"
import { Images } from "../images"
import { Colors, Spacing, Typography } from "../styles/variables"

const ContactPage = () => (
  <HomeLayout>
    <Container>
      <LargeText>Thank you</LargeText>
      <TextContainer>
        <FancyText>
          I appreciate you taking the time to review my portfolio. I am always
          looking for new opportunities to create, share, and grow as a
          designer. I look forward to hearing from you.
        </FancyText>
        <DownloadContainer>
          <DownloadButton href={Images.JeffStolzResume} download>
            Download Resume
          </DownloadButton>
        </DownloadContainer>
      </TextContainer>
    </Container>
    <SEO title="Contact" />
  </HomeLayout>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40.5em;
  margin-top: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    height: 34em;
    margin-top: 9.5em;
    padding-left: ${Spacing.base};
    padding-right: ${Spacing.base};
  }
`

const LargeText = styled.h1`
  font-size: ${Typography.largeFontSize};
  text-transform: uppercase;
  margin-bottom: 0.5em;

  @media (max-width: ${Spacing.breakPoint}) {
    display: none;
  }
`

const TextContainer = styled.div`
  width: 33.5em;

  @media (max-width: ${Spacing.breakPoint}) {
    width: 100%;
    margin-top: -15em;
  }
`

const FancyText = styled.div`
  font-family: ${Typography.georgiaFont};
`

const DownloadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2.5em;
`

const DownloadButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15em;
  height: ${Spacing.large};
  border: 1px solid ${Colors.black};
  border-radius: ${Spacing.base};
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  &:hover {
    background-color: ${Colors.black};
    text-decoration: none;
    color: ${Colors.white};
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.large};
  }
`

export default ContactPage
