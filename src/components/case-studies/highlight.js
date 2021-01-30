import React from "react"
import styled from "styled-components"
import { Colors } from "../../styles/variables"

const Highlight = ({ children }) => <TextHighlight>{children}</TextHighlight>

const TextHighlight = styled.span`
  background-color: ${Colors.yellow};
`

export default Highlight
