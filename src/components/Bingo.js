import React, { useState } from "react"
import _ from "lodash"

import {
  Container,
  ClearAll,
  BingoTitle,
  TileContainer,
  Tile,
  ImageContainer,
} from "./BingoStyles"

const Bingo = () => {
  // toggle this for active styles
  const [checked, setChecked] = useState(false)

  let bCol = _.sampleSize(_.range(1, 15), 5)
  let iCol = _.sampleSize(_.range(16, 30), 5)
  let nCol = _.sampleSize(_.range(31, 45), 5)
  let gCol = _.sampleSize(_.range(46, 60), 5)
  let oCol = _.sampleSize(_.range(61, 75), 5)

  return (
    <>
      <Container>
        <ClearAll>
          <button onClick={checked => checked ?? setChecked(!checked)}>
            Clear Card
          </button>
        </ClearAll>

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
        <TileContainer>
          {bCol.map(i => (
            <Tile onClick={() => setChecked(!checked)} active={checked} key={i}>
              {i}
            </Tile>
          ))}
          {iCol.map(i => (
            <Tile onClick={() => setChecked(!checked)} active={checked} key={i}>
              {i}
            </Tile>
          ))}
          {nCol.map(i => (
            <Tile onClick={() => setChecked(!checked)} active={checked} key={i}>
              {nCol[2] === 2 ? "FREE" : i}
            </Tile>
          ))}
          {gCol.map(i => (
            <Tile onClick={() => setChecked(!checked)} active={checked} key={i}>
              {i}
            </Tile>
          ))}
          {oCol.map(i => (
            <Tile onClick={() => setChecked(!checked)} active={checked} key={i}>
              {i}
            </Tile>
          ))}
        </TileContainer>
        <ImageContainer>
          <img
            src="https://res.cloudinary.com/hopjump/image/upload/v1522091026/logotype_xpzypt.png"
            alt="kickass bingo background, y'all"
          />
        </ImageContainer>
      </Container>
    </>
  )
}

export default Bingo
