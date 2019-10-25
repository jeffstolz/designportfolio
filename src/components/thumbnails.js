import React from "react"
import styled from "styled-components"

import MhThumbnail from "../images/mh-thumbnail.png"
import VgThumbnail from "../images/vg-thumbnail.png"
import CipherbioThumbnail from "../images/cipherbio-thumbnail.png"
import GeThumbnail from "../images/ge-thumbnail.png"
import DragonThumbnail from "../images/dragon-thumbnail.png"
import HmhThumbnail from "../images/hmh-thumbnail.png"

const Thumbnails = () => (
  <OuterContainer>
    <Container>
      <Row>
        <LargeCard>
          <LargeCardImage src={MhThumbnail} alt="Mobile Heartbeat thumbnail" />
        </LargeCard>
        <SmallCard>
          <SmallCardImage src={VgThumbnail} alt="Viralgains thumbnail" />
        </SmallCard>
      </Row>
      <Row>
        <SmallCard>
          <SmallCardImage src={CipherbioThumbnail} alt="Cipherbio thumbnail" />
        </SmallCard>
        <LargeCard>
          <SmallCardImage src={GeThumbnail} alt="GE AiRXOS thumbnail" />
        </LargeCard>
      </Row>
      <Row>
        <SmallCard>
          <SmallCardImage
            src={DragonThumbnail}
            alt="Dragon Innovation thumbnail"
          />
        </SmallCard>
        <LargeCard>
          <SmallCardImage src={HmhThumbnail} alt="HMH Labs thumbnail" />
        </LargeCard>
      </Row>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 130pt;
  margin-bottom: 130pt;
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
`

const LargeCard = styled.div`
  background-color: white;
  width: 59%;
  height: 200pt;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

const SmallCard = styled.div`
  background-color: white;
  width: 37.5%;
  height: 200pt;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

const LargeCardImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`

const SmallCardImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`

export default Thumbnails
