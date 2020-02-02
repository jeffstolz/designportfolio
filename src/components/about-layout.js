import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/global-styles.css"

const AboutLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default AboutLayout
