import { createGlobalStyle } from "styled-components"
import { Colors, Typography } from "../styles/variables"

const GlobalStyles = createGlobalStyle`
html {
  font-family: ${Typography.primaryFontFamily};
  color: ${Colors.black};
  background-color: ${Colors.lightTan};
  font-size: 118%;

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
h1 {
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.headingFontSize};
  font-weight: ${Typography.mediumFontWeight};
  font-style: italic;
}
h2 {
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.smallHeadingFontSize};
  font-style: italic;
}
h3 {
  font-family: ${Typography.primaryFontFamily};
  font-size: ${Typography.mediumFontSize};
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
p {
  margin: 0;
  padding: 0;
  line-height: ${Typography.hugeLineHeight};
}
a {
  color: ${Colors.black};
}
img {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
`

export default GlobalStyles
