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
  const [selected, setSelected] = useState(false)

  const handleSelected = () => {
    setSelected(!selected)
  }

  return (
    <Container>
      {console.log("Hi")}
      <ClearAll>
        <button>Clear Card</button>
      </ClearAll>
      <TitleRow />
      <TileContainer>
        {bingoCols.map(column =>
          column.map((val, i) => (
            <Tile onClick={() => handleSelected()} active={selected} key={i}>
              {val}
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
