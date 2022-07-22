import { createGlobalStyle, DefaultTheme } from 'styled-components'

export default createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 900px) {
      font-size: 87.5%; //14px
    }
  }
`
