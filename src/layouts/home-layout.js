import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "../styles/global-styles.css"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default HomeLayout
