import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Gradient from "../components/gradient"
import "../styles/global-styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <Gradient>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </Gradient>
    </>
  )
}

export default Layout
