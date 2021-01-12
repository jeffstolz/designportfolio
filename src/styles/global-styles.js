import { createGlobalStyle } from "styled-components"
import { Colors, Spacing, Typography } from "../styles/variables"

const GlobalStyles = createGlobalStyle`
html {
  font-family: ${Typography.primaryFontFamily};
  color: ${Colors.black};
  font-size: 110%;

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
h1, h2 {
  font-family: ${Typography.headingFontFamily};
  font-size: ${Typography.headingFontSize};
  font-weight: ${Typography.heavyFontWeight};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.smallHeadingFontSize};
  }
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
  color: ${Colors.purple};

  &:hover {
    color: ${Colors.darkPurple};
  }
}
img {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
blockquote {
  margin: 0;
}
`

export default GlobalStyles
