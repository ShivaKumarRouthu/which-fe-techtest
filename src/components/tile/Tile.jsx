import React from 'react'

import './tile.css';

const Tile = ({ num, onTileClicked, isSelected }) => {

  return (
    <div className='tile-container' >
      <button className={`btn ${isSelected?'selected': ''}`} data-testid={`tile-item-${num}`} onClick={() => onTileClicked(num)} >
        {num}
      </button>
    </div>
  )
}

export default Tile