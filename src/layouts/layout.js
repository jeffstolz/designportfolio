import React from "react"
import StylingResets from "../styles/styling-resets"
import GlobalStyles from "../styles/global-styles"

const Layout = ({ children }) => {
  return (
    <>
      <StylingResets />
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export default Layout
