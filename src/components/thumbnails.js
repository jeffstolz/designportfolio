import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MhThumbnail from "../images/mh-thumbnail.png"
import VgThumbnail from "../images/vg-thumbnail.png"
import CipherbioThumbnail from "../images/cipherbio-thumbnail.png"
import GeThumbnail from "../images/ge-thumbnail.png"
import SkillsThumbnail from "../images/skills-thumbnail.png"
import HmhThumbnail from "../images/hmh-thumbnail.png"
import { Colors, Spacing, Typography } from "../styles/variables"

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
              <VisualDesign>Visual Design</VisualDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>ViralGains</PreviewHeading>
              <PreviewText>Advertising journey orchestration</PreviewText>
            </Slide>
            <CardImage src={VgThumbnail} alt="Viralgains thumbnail" />
          </Link>
        </SmallCard>
      </Row>
      <Row>
        <SmallCard>
          <Link to="/airxos">
            <OverlayContainer>
              <ProductDesign>Product Design</ProductDesign>
              <UxDesign>UX Design</UxDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>GE AiRXOS</PreviewHeading>
              <PreviewText>Drone flight planning and approval tool</PreviewText>
            </Slide>
            <CardImage src={GeThumbnail} alt="GE Airxos thumbnail" />
          </Link>
        </SmallCard>
        <LargeCard>
          <Link to="/theskills">
            <OverlayContainer>
              <CaseStudy>Case Study</CaseStudy>
              <ProductDesign>Product Design</ProductDesign>
              <VisualDesign>Visual Design</VisualDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>The Skills</PreviewHeading>
              <PreviewText>Online education platform for athletes</PreviewText>
            </Slide>
            <LargeCardImage src={SkillsThumbnail} alt="The Skills thumbnail" />
          </Link>
        </LargeCard>
      </Row>
      <Row>
        <SmallCard>
          <Link to="/cipherbio">
            <OverlayContainer>
              <ProductDesign>Product Design</ProductDesign>
            </OverlayContainer>
            <Slide>
              <PreviewHeading>CipherBio</PreviewHeading>
              <PreviewText>
                Life science investor networking platform
              </PreviewText>
            </Slide>
            <CardImage src={CipherbioThumbnail} alt="Cipherbio thumbnail" />
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
              <PreviewText>Online marketplace for educators</PreviewText>
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
  margin-top: ${Spacing.huge};
  margin-bottom: ${Spacing.pageBottom};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.small};
    padding-left: ${Spacing.base};
    padding-right: ${Spacing.base};
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${Spacing.base};

  @media (max-width: ${Spacing.breakPoint}) {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`

const OverlayContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: ${Spacing.small};
  background-color: ${Colors.transparentBlack};
  opacity: 0;
  transition: 0.5s ease;

  @media (max-width: ${Spacing.breakPoint}) {
    opacity: 1;
  }
`

const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Spacing.pillHeight};
  width: ${Spacing.pillWidth};
  color: ${Colors.white};
  border-radius: ${Spacing.pillRadius};
  border: 1pt solid;
  margin-right: 0.5em;
  font-size: ${Typography.smallFontSize};

  @media (max-width: ${Spacing.breakPoint}) {
    width: ${Spacing.pillMobileWidth};
    font-size: ${Typography.xSmallFontSize};
  }
`

const ProductDesign = styled(Pill)`
  border-color: ${Colors.blue};
`

const UxDesign = styled(Pill)`
  border-color: ${Colors.orange};
`

const VisualDesign = styled(Pill)`
  border-color: ${Colors.violet};
`

const CaseStudy = styled(Pill)`
  border-color: ${Colors.green};
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
  background-color: ${Colors.black};
  opacity: 0;
  transition: 0.5s ease;
  padding-left: ${Spacing.small};

  @media (max-width: ${Spacing.breakPoint}) {
    opacity: 1;
    height: ${Spacing.huge};
  }
`

const PreviewHeading = styled.h2`
  color: ${Colors.white};
  font-size: ${Typography.baseFontSize};
  line-height: ${Typography.hugeLineHeight};
`

const PreviewText = styled.h3`
  color: ${Colors.white};
  font-size: ${Typography.smallFontSize};
  font-weight: ${Typography.lightFontWeight};
  opacity: 0.7;
`

const Card = styled.div`
  position: relative;
  display: flex;
  background-color: ${Colors.white};
  height: ${Spacing.cardHeight};
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
    height: ${Spacing.huge};
    opacity: 1;
    transition: 0.3s ease;
  }

  @media (max-width: ${Spacing.breakPoint}) {
    justify-content: flex-end;
    height: ${Spacing.cardMobileHeight};
    width: 100%;
    margin-bottom: ${Spacing.base};
  }
`

const LargeCard = styled(Card)`
  width: 59%;
`

const SmallCard = styled(Card)`
  width: 37.5%;
`

const CardImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`

const LargeCardImage = styled(CardImage)`
  @media (max-width: ${Spacing.breakPoint}) {
    object-fit: cover;
  }
`

export default Thumbnails
