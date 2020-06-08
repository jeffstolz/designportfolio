import React from "react"
import styled from "styled-components"
import { Colors, Spacing } from "../styles/variables"

const Divider = () => {
  return (
    <Line />
  )
}

const Line = styled.div`
  width: 100%;
  border-bottom: 1pt solid ${Colors.black};
  margin-top: ${Spacing.xxHuge};
  margin-bottom: ${Spacing.xxHuge};

  @media (max-width: ${Spacing.breakPoint}) {
    margin-top: ${Spacing.large};
    margin-bottom: ${Spacing.large};
  }
`

export default Divider
