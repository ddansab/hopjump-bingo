import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Quicksand:wght@300;500;700&display=swap");

  * {
    box-sizing: border-box;
    font-family: "quicksand", "helvetica", san-serif;
  }

  h1 {
    color: #21ace8;
    &:nth-child(-n + 3) {
      color: #0c3759;
    }
    span {
      font-size: 12px;
      display: block;
      color: #cccccc;
      margin-top: 8px;
    }
  }

  body {
    background: url("https://images.unsplash.com/photo-1544473243-e8b609021dbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80");
    background-size: cover;
    background-position: center center;
    height: 100%;
  }
`
