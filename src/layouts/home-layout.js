import React from "react"
import StylingResets from "../styles/styling-resets"
import GlobalStyles from "../styles/global-styles"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const HomeLayout = ({ children }) => {
  return (
    <>
      <StylingResets />
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default HomeLayout
