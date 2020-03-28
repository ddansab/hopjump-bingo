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
  const [checked] = useState(false)

  const clearAll = () => {
    Array.from(document.querySelectorAll("input[type='checkbox']")).map(
      e => (e.checked = false)
    )
  }

  const getRandomNum = (min, max) => {
    let arr = _.range(min, max)
    let shuffle = _.shuffle(arr)
    let num = 0
    shuffle.map(current => {
      shuffle = _.tail(shuffle)
      num = current
    })
    return num
  }

  return (
    <>
      <Container>
        <ClearAll>
          <button onClick={() => clearAll()}>Clear Card</button>
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
          <>
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  className="pointer"
                  type="text"
                  maxLength="2"
                  value={getRandomNum(1, 15)}
                  readOnly
                />
                {/*  this should toggle checked*/}
                <input className="stamper" type="checkbox" />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  className="pointer"
                  maxLength="2"
                  value={getRandomNum(16, 30)}
                  readOnly
                />
                {/*  this should toggle checked*/}
                <input className="stamper" type="checkbox" />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  className="pointer"
                  maxLength={i === 2 ? 4 : 2}
                  value={i === 2 ? "FREE" : getRandomNum(31, 45)}
                  readOnly
                />
                {/*  this should toggle checked*/}
                <input
                  className="stamper"
                  type="checkbox"
                  defaultChecked={i === 2 && true}
                />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  className="pointer"
                  maxLength="2"
                  value={getRandomNum(46, 60)}
                  readOnly
                />
                {/*  this should toggle checked*/}
                <input className="stamper" type="checkbox" />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  className="pointer"
                  maxLength="2"
                  value={getRandomNum(61, 75)}
                  readOnly
                />
                {/*  this should toggle checked*/}
                <input className="stamper" type="checkbox" />
              </Tile>
            ))}
          </>
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
