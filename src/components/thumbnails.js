import React from "react"
import styled from "styled-components"
import Card from "./card"
import Label from "./label"
import { Images } from "../images"
import { Colors, Spacing } from "../styles/variables"

const Thumbnails = () => (
  <OuterContainer>
    <Container>
      <Row>
        <Card
          cardWidth={Spacing.cardWidthLarge}
          projectLink={"/mobile-heartbeat"}
          previewHeading={"Mobile Heartbeat"}
          previewText={"Clinical communication and coordination"}
          imageSrc={Images.MhThumbnail}
          imageAlt={"Mobile Heartbeat thumbnail"}
        >
          <Label borderColor={Colors.green} textColor={Colors.white} label={"Case Study"} />
          <Label borderColor={Colors.blue} textColor={Colors.white} label={"Product Design"} />
          <Label borderColor={Colors.orange} textColor={Colors.white} label={"UX Design"} />
        </Card>
        <Card
          cardWidth={Spacing.cardWidthSmall}
          projectLink={"/viralgains"}
          previewHeading={"ViralGains"}
          previewText={"Advertising journey orchestration"}
          imageSrc={Images.ViralgainsThumbnail}
          imageAlt={"Viralgains thumbnail"}
        >
          <Label borderColor={Colors.violet} textColor={Colors.white} label={"Visual Design"} />
        </Card>
      </Row>
      <Row>
        <Card
          cardWidth={Spacing.cardWidthSmall}
          projectLink={"/airxos"}
          previewHeading={"GE AiRXOS"}
          previewText={"Drone flight planning and approval tool"}
          imageSrc={Images.GeThumbnail}
          imageAlt={"GE Airxos thumbnail"}
        >
          <Label borderColor={Colors.blue} textColor={Colors.white} label={"Product Design"} />
          <Label borderColor={Colors.orange} textColor={Colors.white} label={"UX Design"} />
        </Card>
        <Card
          cardWidth={Spacing.cardWidthLarge}
          projectLink={"/theskills"}
          previewHeading={"The Skills"}
          previewText={"Online education platform for athletes"}
          imageSrc={Images.SkillsThumbnail}
          imageAlt={"The Skills thumbnail"}
        >
          <Label borderColor={Colors.green} textColor={Colors.white} label={"Case Study"} />
          <Label borderColor={Colors.blue} textColor={Colors.white} label={"Product Design"} />
          <Label borderColor={Colors.violet} textColor={Colors.white} label={"Visual Design"} />
        </Card>
      </Row>
      <Row>
        <Card
          cardWidth={Spacing.cardWidthSmall}
          projectLink={"/cipherbio"}
          previewHeading={"CipherBio"}
          previewText={"Life science investor networking platform"}
          imageSrc={Images.CipherbioThumbnail}
          imageAlt={"Cipherbio thumbnail"}
        >
          <Label borderColor={Colors.blue} textColor={Colors.white} label={"Product Design"} />
        </Card>
        <Card
          cardWidth={Spacing.cardWidthLarge}
          projectLink={"/hmh"}
          previewHeading={"HMH Marketplace"}
          previewText={"Online marketplace for educators"}
          imageSrc={Images.HmhThumbnail}
          imageAlt={"HMH Labs thumbnail"}
        >
          <Label borderColor={Colors.green} textColor={Colors.white} label={"Case Study"} />
          <Label borderColor={Colors.blue} textColor={Colors.white} label={"Product Design"} />
        </Card>
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

export default Thumbnails
