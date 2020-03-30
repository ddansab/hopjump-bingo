import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "quicksand", "helvetica", san-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  h1 {
      color: #0c3759;

    span {
      font-size: 12px;
      display: block;
      color: #cccccc;
      margin-top: 8px;
    }
  }

  body {
    height: 100%;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
  }
`
