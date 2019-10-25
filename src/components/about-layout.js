import React from "react"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

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
