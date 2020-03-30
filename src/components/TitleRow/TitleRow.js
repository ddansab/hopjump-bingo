import React from "react"

import { BingoTitle, LetterBox } from "./TitleRowStyles"

const TitleRow = () => (
  <BingoTitle>
    <LetterBox>
      <h1>B</h1>
    </LetterBox>
    <LetterBox>
      <h1>I</h1>
    </LetterBox>
    <LetterBox>
      <h1>N</h1>
    </LetterBox>
    <LetterBox>
      <h1 className="brand-blue">G</h1>
    </LetterBox>
    <LetterBox>
      <h1 className="brand-blue">O</h1>
    </LetterBox>
  </BingoTitle>
)

export default TitleRow
