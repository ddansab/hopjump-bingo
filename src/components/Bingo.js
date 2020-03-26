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

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
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
                  type="text"
                  maxLength="2"
                  placeholder={getRandomInt(1, 15)}
                />
                {/*  this should toggle checked*/}
                <input type="checkbox" checked={i === 12 ? 1 : 0} />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  maxLength="2"
                  placeholder={getRandomInt(16, 30)}
                />
                {/*  this should toggle checked*/}
                <input type="checkbox" checked={i === 12 ? 1 : 0} />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  maxLength={i === 2 ? 4 : 2}
                  placeholder={i === 2 ? "FREE" : getRandomInt(31, 45)}
                />
                {/*  this should toggle checked*/}
                <input type="checkbox" checked={i === 2 ? 1 : 0} />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  maxLength="2"
                  placeholder={getRandomInt(46, 60)}
                />
                {/*  this should toggle checked*/}
                <input type="checkbox" />
              </Tile>
            ))}
            {_.times(5).map(i => (
              <Tile active={checked} key={i}>
                <input
                  type="text"
                  maxLength="2"
                  placeholder={getRandomInt(61, 75)}
                />
                {/*  this should toggle checked*/}
                <input type="checkbox" />
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
