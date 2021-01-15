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
  font-family: ${Typography.headingFontFamily};
  margin: 0;
}
h1, h2 {
  font-size: ${Typography.headingFontSize};
  font-weight: ${Typography.heavyFontWeight};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.smallHeadingFontSize};
  }
}

h3 {
  font-size: ${Typography.mediumFontSize};
  font-weight: ${Typography.mediumFontWeight};

  @media (max-width: ${Spacing.smallBreakPoint}) {
    font-size: ${Typography.baseFontSize};
  }
}

h4 {
  font-size: ${Typography.smallFontSize};
  font-weight: ${Typography.lightFontWeight};
}

h5 {
  font-size: ${Typography.xSmallFontSize};
  font-weight: ${Typography.lightFontWeight};
}

a {
  text-decoration: none;
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
