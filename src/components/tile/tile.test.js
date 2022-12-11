import '@testing-library/jest-dom/extend-expect'

import {
  fireEvent,
  getByTestId,
  render,
  screen
} from '@testing-library/react'

import React from 'react'

import Tile from './Tile'


test('should render component', () => {
  const { asFragment } = render(<Tile num={1}/>)
  expect(asFragment()).toMatchSnapshot()
})


test('should render a tile ', () => {
  render(<Tile num={1} />)
  const tile = screen.getByTestId('tile-item-1')
  expect(tile).toBeInTheDocument()
})

test('should render a tile ', () => {
  render(<Tile num={2} />)
  const tile = screen.getByTestId('tile-item-2')
  expect(tile).toBeInTheDocument()
})

test('should render the tile item correctly with given props', () => {
  render(<Tile num={2} />)
  const linkElement = screen.getByTestId('tile-item-2');
  expect(linkElement).toHaveTextContent('2');
})

test('should render the tile item with class name selected', () => {
  render(<Tile num={2} isSelected={true} />)
  const linkElement = screen.getByTestId('tile-item-2');
  expect(linkElement).toHaveClass('selected');
})