import { createGlobalStyle, DefaultTheme } from 'styled-components'

export default createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    margin: 0;
    padding: 0ex;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`
