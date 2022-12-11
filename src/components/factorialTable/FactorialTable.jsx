import React, { useState } from 'react'

import './factorialTable.css';
import Tile from '../tile/Tile';

const FactorialTable = () => {
  let numbers = [...Array(144).keys()].map(i => i + 1);

  const [selectedTile, setSelectedTile] = useState();
  const [isTileClicked, setIsTileClicked] = useState(false);

  const onTileClickedHandler = ( tileNumber ) => {
    if(selectedTile !== tileNumber) {
      setIsTileClicked(true);
      setSelectedTile(tileNumber);
    } else {
      setIsTileClicked(false);
      setSelectedTile();
    }
  }

  const isMultipleOf = (num) => {
    return (isTileClicked && (num % selectedTile === 0));
  }

  return (
    <ul className="container">
      {numbers.map((num) => <li key={num}><Tile num={num} onTileClicked={onTileClickedHandler} isSelected={isMultipleOf(num)} /></li>)}
    </ul>
  )
}

export default FactorialTable