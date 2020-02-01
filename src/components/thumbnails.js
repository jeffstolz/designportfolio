import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MhThumbnail from "../images/mh-thumbnail.png"
import VgThumbnail from "../images/vg-thumbnail.png"
import CipherbioThumbnail from "../images/cipherbio-thumbnail.png"
import GeThumbnail from "../images/ge-thumbnail.png"
import AirwatchThumbnail from "../images/airwatch-thumbnail.png"
import HmhThumbnail from "../images/hmh-thumbnail.png"

const Thumbnails = () => (
  <OuterContainer>
    <Container>
      <Row>
        <LargeCard>
          <Link to="/mobile-heartbeat">
            <OverlayContainer>
              <CaseStudy>Case Study</CaseStudy>
              <ProductDesign>Product Design</ProductDesign>
              <UxDesign>UX Design</UxDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>Mobile Heartbeat</PreviewHeading>
              <PreviewText>Clinical communication and coordination</PreviewText>
            </Slide>
            <LargeCardImage
              src={MhThumbnail}
              alt="Mobile Heartbeat thumbnail"
            />
          </Link>
        </LargeCard>
        <SmallCard>
          <Link to="/viralgains">
            <OverlayContainer>
              <CaseStudy>Case Study</CaseStudy>
              <VisualDesign>Visual Design</VisualDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>The Skills</PreviewHeading>
              <PreviewText>Online education platform for atheletes</PreviewText>
            </Slide>
            <SmallCardImage src={VgThumbnail} alt="Viralgains thumbnail" />
          </Link>
        </SmallCard>
      </Row>
      <Row>
        <SmallCard>
          <Link to="/viralgains">
            <OverlayContainer>
              <VisualDesign>Visual Design</VisualDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>ViralGains</PreviewHeading>
              <PreviewText>Advertising journey orchestration</PreviewText>
            </Slide>
            <SmallCardImage src={VgThumbnail} alt="Viralgains thumbnail" />
          </Link>
        </SmallCard>
        <LargeCard>
          <Link to="/airxos">
            <OverlayContainer>
              <ProductDesign>Product Design</ProductDesign>
              <UxDesign>UX Design</UxDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>AiRXOS // GE</PreviewHeading>
              <PreviewText>
                Drone flight planning and authorization tool
              </PreviewText>
            </Slide>
            <LargeCardImage src={GeThumbnail} alt="GE AiRXOS thumbnail" />
          </Link>
        </LargeCard>
      </Row>
      <Row>
        <SmallCard>
          <Link to="/cipherbio">
            <OverlayContainer>
              <ProductDesign>Product Design</ProductDesign>
              <VisualDesign>Visual Design</VisualDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>CipherBio</PreviewHeading>
              <PreviewText>
                Lifescience investor networking platform
              </PreviewText>
            </Slide>
            <SmallCardImage
              src={CipherbioThumbnail}
              alt="Cipherbio thumbnail"
            />
          </Link>
        </SmallCard>
        <LargeCard>
          <Link to="/hmh">
            <OverlayContainer>
              <CaseStudy>Case Study</CaseStudy>
              <ProductDesign>Product Design</ProductDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>HMH Marketplace</PreviewHeading>
              <PreviewText>
                Online marketplace for teachers & developers
              </PreviewText>
            </Slide>
            <LargeCardImage src={HmhThumbnail} alt="HMH Labs thumbnail" />
          </Link>
        </LargeCard>
      </Row>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 70pt;
  margin-bottom: 130pt;

  @media (max-width: 950px) {
    padding-left: 20pt;
    padding-right: 20pt;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700pt;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25pt;

  @media (max-width: 950px) {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`

const OverlayContainer = styled.div`
  display: flex;
  position: absolute;
  padding: 10pt;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #00000080;
  opacity: 0;
  transition: 0.5s ease;
`
const ProductDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 13pt;
  border: 1pt solid #00b8ff;
  height: 26pt;
  width: 108pt;
  font-size: 12pt;
  margin-right: 5pt;
`

const UxDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 13pt;
  border: 1pt solid #ff6f00;
  height: 26pt;
  width: 85pt;
  font-size: 12pt;
  margin-right: 5pt;
`

const VisualDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 13pt;
  border: 1pt solid #e35fff;
  height: 26pt;
  width: 100pt;
  font-size: 12pt;
  margin-right: 5pt;
`

const CaseStudy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 13pt;
  border: 1pt solid #00d332;
  height: 26pt;
  width: 100pt;
  font-size: 12pt;
  margin-right: 5pt;
`

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  background-color: black;
  opacity: 0;
  transition: 0.5s ease;
  padding-left: 20pt;
`

const PreviewHeading = styled.div`
  color: white;
  font-weight: 600;
  line-height: 18pt;
  font-size: 12pt;
`

const PreviewText = styled.div`
  color: white;
  font-size: 12pt;
  line-height: 12pt;
  opacity: 0.7;
`

const LargeCard = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  width: 59%;
  height: 200pt;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  &:hover {
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  }

  &:hover ${OverlayContainer} {
    opacity: 1;
    transition: 0.3s ease;
  }

  &:hover ${Slide} {
    opacity: 1;
    transition: 0.3s ease;
    height: 60pt;
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 30pt;
    justify-content: flex-end;
  }
`

const SmallCard = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  width: 37.5%;
  height: 200pt;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  &:hover {
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  }

  &:hover ${OverlayContainer} {
    opacity: 1;
    transition: 0.3s ease;
  }

  &:hover ${Slide} {
    opacity: 1;
    transition: 0.3s ease;
    height: 60pt;
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 30pt;
    justify-content: flex-end;
  }
`

const LargeCardImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;

  @media (max-width: 950px) {
    object-fit: cover;
  }
`

const SmallCardImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`

export default Thumbnails
