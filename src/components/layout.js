import React from "react"
import Header from "./header"
import Footer from "./footer"
import Gradient from "./gradient"

import "../styles/global-styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <Gradient>
        <Header />
        <main>{children}</main>
        <Footer />
      </Gradient>
    </>
  )
}

export default Layout
