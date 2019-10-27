import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Resume from "../images/jeff_stolz_resume.pdf"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Container>
      <LargeText>Thank you</LargeText>
      <TextContainer>
        <FancyText>
          I appreciate you taking the time to review my portfolio. I am always
          looking for new opportunities to create, share, and grow as a
          designer. I look forward to hearing from you.
        </FancyText>
        <DownloadContainer>
          <DownloadButton href={Resume} download>
            Download Resume
          </DownloadButton>
        </DownloadContainer>
      </TextContainer>
    </Container>
    <SEO title="Contact" />
  </Layout>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 550pt;
  margin-top: 25pt;

  @media (max-width: 950px) {
    height: 450pt;
    margin-top: 128pt;
    padding-left: 20pt;
    padding-right: 20pt;
  }
`

const LargeText = styled.h1`
  font-size: 80pt;
  line-height: 75pt;
  text-transform: uppercase;
  margin-bottom: 30pt;

  @media (max-width: 950px) {
    display: none;
  }
`

const TextContainer = styled.div`
  width: 450pt;

  @media (max-width: 950px) {
    width: 100%;
    margin-top: -200pt;
  }
`

const FancyText = styled.div`
  font-family: "georgia", serif;
`

const DownloadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30pt;
`

const DownloadButton = styled.a`
  display: flex;
  width: 200pt;
  height: 50pt;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 25pt;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  &:hover {
    background-color: black;
    text-decoration: none;
    color: white;
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 950px) {
    margin-top: 50pt;
  }
`

export default ContactPage
