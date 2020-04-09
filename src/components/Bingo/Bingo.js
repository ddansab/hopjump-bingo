import React, { useState } from "react"

import TitleRow from "../TitleRow"
import { bingoCols } from "../../bingoCols"

import {
  MobileShow,
  BingoWrapper,
  Container,
  ClearAll,
  TileContainer,
  Tile,
  ImageContainer,
  CheckBox,
} from "./BingoStyles"

const Bingo = () => {
  // toggle this for active styles
  const [checked] = useState(false)
  const clearAll = () => {
    Array.from(document.querySelectorAll("input[type='checkbox']")).map(
      e => (e.checked = false)
    )
  }

  return (
    <>
      <MobileShow>
        <h1>Sorry...</h1>
        <img
          src="./must-be-at-least2.png"
          alt="Must be thiiis tall to ride this ride"
        />
        <p>Must be at least a tablet size to ride this ride.</p>
      </MobileShow>
      <BingoWrapper>
        <Container>
          <ImageContainer>
            <img
              src="https://res.cloudinary.com/hopjump/image/upload/v1522091026/logotype_xpzypt.png"
              alt="hopjump logo"
            />
          </ImageContainer>
          <TitleRow />
          <TileContainer>
            {bingoCols.map(column =>
              column.map((val, i) => (
                <Tile active={checked} key={i}>
                  <span className="numbers">{val}</span>
                  <CheckBox
                    className="stamper"
                    type="checkbox"
                    defaultChecked={val === "FREE" && true}
                  />
                  <span className="checkmark" />
                </Tile>
              ))
            )}
          </TileContainer>
          <ClearAll>
            <button onClick={() => clearAll()}>Clear Card</button>
          </ClearAll>
        </Container>
      </BingoWrapper>
    </>
  )
}

export default React.memo(Bingo)
