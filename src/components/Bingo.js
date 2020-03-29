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

  const arr = (min, max) => {
    let l = []
    for (let i = min; i < max; ++i) {
      l.push(i)
    }
    return l
  }

  const shuffleArr = array => {
    let tmp,
      current,
      top = array.length

    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1))
        tmp = array[current]
        array[current] = array[top]
        array[top] = tmp
      }

    return array.slice(0, 5)
  }

  let bCol = shuffleArr(arr(1, 15))
  let iCol = shuffleArr(arr(16, 30))
  let nCol = shuffleArr(arr(31, 45))
  let gCol = shuffleArr(arr(46, 60))
  let oCol = shuffleArr(arr(61, 75))

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
            <Tile
              onClick={() => setChecked(!checked)}
              className={checked && "blue-back"}
              key={i}
            >
              {i}
            </Tile>
          ))}
          {iCol.map(i => (
            <Tile onClick={() => setChecked(!checked)} active={checked} key={i}>
              {i}
            </Tile>
          ))}
          {nCol.map((i, x) => (
            <Tile onClick={() => setChecked(!checked)} active={checked} key={i}>
              {x === 2 ? "FREE" : i}
              {console.log(nCol)}
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
