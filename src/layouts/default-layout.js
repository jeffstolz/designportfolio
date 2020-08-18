import React from "react"
import styled from "styled-components"
import StylingResets from "../styles/styling-resets"
import GlobalStyles from "../styles/global-styles"
import Footer from "../components/footer"
import { Spacing } from "../styles/variables"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <StylingResets />
      <GlobalStyles />
      <main>
        <OuterContainer>
          <Container>{children}</Container>
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
