import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 800px;
  margin: 50px auto;
  background-color: #f6f6f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-direction: column;
  border-radius: 4px;
`

export const BingoTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #cccccc;
`

export const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  width: 160px;
  background: ${({ active }) => (active ? "#21ACE8" : "transparent")};
  color: ${({ active }) => active && "#fff"};
  border: 1px solid #ccc;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? "#1779ba" : "#cccccc")};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  &:nth-child(13) {
    background: #21ace8;
    color: #fff;
    content: "FREE" !important;

    &:hover {
      box-shadow: none;
    }
  }

  .blue-back {
    background: #21ace8;
  }
`

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 24px 0;
  img {
    width: 100px;
  }
`

export const ClearAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 18px 0;
  button {
    text-decoration: none;
    color: #1779ba;
    background-color: transparent;
    border: none;
  }
`
