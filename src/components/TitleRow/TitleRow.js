import React from "react"

import { BingoTitle } from "./TitleRowStyles"

const TitleRow = () => (
  <BingoTitle>
    <h1>
      {" "}
      B <span>1-15</span>
    </h1>
    <h1>
      {" "}
      I <span>16-30</span>
    </h1>
    <h1>
      {" "}
      N <span>31-45</span>
    </h1>
    <h1>
      {" "}
      G <span>46-60</span>
    </h1>
    <h1>
      {" "}
      O <span>61-75</span>
    </h1>
  </BingoTitle>
)

export default TitleRow
