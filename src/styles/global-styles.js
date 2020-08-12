import { createGlobalStyle } from "styled-components"
import { Colors, Typography } from "../styles/variables"

const GlobalStyles = createGlobalStyle`
html {
  font-family: "Open Sans", sans-serif;
  background-color: #f9f9f9;
}
a {
  color: black;
}
a:hover {
  text-decoration-style: double;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
html {
  font: 112.5%/1.45em georgia, serif;
}
body {
  color: hsla(0, 0%, 0%, 0.8);
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
}
h1 {
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 1.1;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
ul {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
img {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
`

export default GlobalStyles
