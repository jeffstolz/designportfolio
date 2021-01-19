import { css } from "styled-components"
import { Spacing } from "../variables"

export const headingFontFamily = '"Inter", Sans-Serif;'
export const primaryFontFamily = '"Roboto", Sans-Serif;'

export const lightFontWeight = "400"
export const baseFontWeight = "600"
export const mediumFontWeight = "800"
export const heavyFontWeight = "1000"

export const xSmallFontSize = "0.7em"
export const smallFontSize = "0.9em"
export const baseFontSize = "1em"
export const mediumFontSize = "1.5em"
export const smallHeadingFontSize = "2em"
export const headingFontSize = "3em"

export const largeLineHeight = "1.2em"
export const hugeLineHeight = "1.4em"
export const xHugeLineHeight = "1.6em"

export const subheading = css`
  font-family: ${primaryFontFamily};
  font-size: ${mediumFontSize};
  font-weight: ${lightFontWeight};
  line-height: ${hugeLineHeight};

  @media (max-width: ${Spacing.breakPoint}) {
    font-size: ${baseFontSize};
  }
`
