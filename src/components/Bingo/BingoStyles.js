import styled from "styled-components"

export const MobileShow = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background: #ccc;
  flex-direction: column;
  padding: 16px;
  text-align: center;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`
export const BingoWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      45deg,
      rgba(12, 55, 89, 0.25) 0%,
      rgba(23, 121, 186, 0.15) 35%,
      rgba(33, 172, 232, 0.25) 100%
    ),
    url("./machu-pichu.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Container = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  background-color: #f6f6f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-direction: column;
  border-radius: 4px;
`

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
`

export const Tile = styled.label`
  position: relative;
  height: 100px;
  width: 160px;
  background: ${({ active }) => (active ? "#21ACE8" : "transparent")};
  border: 1px solid #ccc;
  transition: all 300ms ease-in-out;
  z-index: 1;
  cursor: pointer;
  font-size: 18px;
  user-select: none;

  input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .numbers {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  .checkmark {
    height: 25px;
    width: 25px;
    background-color: #eee;
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #21ace8;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 2;
  }
`

export const CheckBox = styled.input`
  width: 30px !important;
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
  padding: 24px 0;
  background: #fff;

  button {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    border: 2px solid #21ace8;
    background-color: #21ace8;
    transition: all 300ms ease;
    padding: 4px 12px;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      color: #fff;
      border: 2px solid #1779ba;
      background-color: #1779ba;
    }
  }
`
