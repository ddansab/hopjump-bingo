import React, { useState } from "react"

import TitleRow from "../TitleRow"
import { bingoCols } from "../../bingoCols"

import {
  Container,
  ClearAll,
  TileContainer,
  Tile,
  ImageContainer,
} from "./BingoStyles"

const Bingo = () => {
  // toggle this for active styles
  const [checked, setChecked] = useState(false)

  return (
    <Container>
      {console.log("Hi")}
      <ClearAll>
        <button onClick={checked => checked ?? setChecked(!checked)}>
          Clear Card
        </button>
      </ClearAll>
      <TitleRow />
      <TileContainer>
        {bingoCols.map(column =>
          column.map((val, i) => (
            <Tile
              onClick={() => setChecked(!checked)}
              className={checked && "blue-back"}
              key={i}
            >
              <span>{val}</span>
            </Tile>
          ))
        )}
      </TileContainer>
      <ImageContainer>
        <img
          src="https://res.cloudinary.com/hopjump/image/upload/v1522091026/logotype_xpzypt.png"
          alt="kickass bingo background, y'all"
        />
      </ImageContainer>
    </Container>
  )
}

export default React.memo(Bingo)
