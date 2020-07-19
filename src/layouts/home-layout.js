import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Gradient from "../components/gradient"
import "../styles/global-styles.css"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Gradient>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </Gradient>
    </>
  )
}

export default HomeLayout
