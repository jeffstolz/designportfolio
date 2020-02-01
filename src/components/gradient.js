import styled from "styled-components"
import { Colors } from "../styles/variables"

const Gradient = styled.div`
  background: linear-gradient(
    -45deg,
    ${Colors.orange},
    ${Colors.pink},
    ${Colors.cyan},
    ${Colors.aqua}
  );
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  height: 22.3em;

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default Gradient
