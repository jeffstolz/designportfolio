import React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "../styles/global-styles.css"
import { Spacing } from "../styles/variables"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <OuterContainer>
          <Container>
            {children}
          </Container>
        </OuterContainer>
      </main>
      <Footer />
    </>
  )
}

const OuterContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: ${Spacing.pageBottom};

  @media (max-width: ${Spacing.breakPoint}) {
    padding-left: ${Spacing.base};
    padding-right: ${Spacing.base};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${Spacing.containerWidth};
`

export default DefaultLayout
