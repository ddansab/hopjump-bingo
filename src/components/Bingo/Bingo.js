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
  // toggle this for active styles
  const [checked] = useState(false)

  const clearAll = () => {
    Array.from(document.querySelectorAll("input[type='checkbox']")).map(
      e => (e.checked = false)
    )
  }

  return (
    <Container>
      <ClearAll>
        <button onClick={() => clearAll()}>Clear Card</button>
      </ClearAll>
      <TitleRow />
      <TileContainer>
        {bingoCols.map(column =>
          column.map((val, i) => (
            <Tile active={checked} key={i}>
              <input className="pointer" type="text" value={val} readOnly />
              {/*  this should toggle checked*/}
              <input
                className="stamper"
                type="checkbox"
                defaultChecked={val === "FREE" && true}
              />
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
