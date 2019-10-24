import React from "react"
import styled from "styled-components"

const Thumbnails = () => (
  <OuterContainer>
    <Container>
      <Row>
        <LargeCard></LargeCard>
        <SmallCard></SmallCard>
      </Row>
      <Row>
        <SmallCard></SmallCard>
        <LargeCard></LargeCard>
      </Row>
      <Row>
        <SmallCard></SmallCard>
        <LargeCard></LargeCard>
      </Row>
    </Container>
  </OuterContainer>
)

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 130pt;
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
  margin-bottom: 15pt;
`

const LargeCard = styled.div`
  background-color: white;
  width: 58%;
  height: 200pt;
  // -webkit-box-shadow: 5px 5px 8px -5px rgba(0, 0, 0, 0.5);
  // -moz-box-shadow: 5px 5px 8px -5px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

const SmallCard = styled.div`
  background-color: white;
  width: 40%;
  height: 200pt;
  // -webkit-box-shadow: 5px 5px 8px -5px rgba(0, 0, 0, 0.5);
  // -moz-box-shadow: 5px 5px 8px -5px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

export default Thumbnails
