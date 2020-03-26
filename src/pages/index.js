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
    </Helmet>
    <GlobalStyles />
    <Bingo />
  </>
)
