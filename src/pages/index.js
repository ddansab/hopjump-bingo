import React from "react"
import { Helmet } from "react-helmet"
import Bingo from "../components/Bingo"
import { GlobalStyles } from "../config/GlobalStyles"

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hopjump Bingo!</title>
      <link rel="canonical" href="http://www.hopjumpbingo.com" />
      <link
        src="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Quicksand:wght@300;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <Bingo />
  </>
)
