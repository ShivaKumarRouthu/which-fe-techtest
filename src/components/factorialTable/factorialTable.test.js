import '@testing-library/jest-dom/extend-expect'

import {
  fireEvent,
  getByTestId,
  render,
  screen
} from '@testing-library/react'

import React from 'react'

import FactorialTable from './FactorialTable'


test('should render component', () => {
  const { asFragment } = render(<FactorialTable />)
  expect(asFragment()).toMatchSnapshot()
})

test('should show correct 144 items UI', () => {
 const { container } =  render(<FactorialTable />)
  const tiles = container.getElementsByClassName('tile-container');
  expect(tiles.length).toBe(144)
})

test('should set selected tile on clicking on item', () => {
  const { container } =  render(<FactorialTable />)
  const tile = screen.getByTestId('tile-item-2')
  fireEvent.click(tile)
  expect(tile).toHaveClass('selected');
})

test('should set selected tile on clicking on item in multiple', () => {
  const { container } =  render(<FactorialTable />)
  const tile = screen.getByTestId('tile-item-10')
  fireEvent.click(tile)
  const tiles = container.getElementsByClassName('selected');
  expect(tiles.length).toBe(14)
})

test('should unset selected tile on clicking on item and its multiple', () => {
  const { container } =  render(<FactorialTable />)
  const tile = screen.getByTestId('tile-item-10')
  fireEvent.click(tile)
  expect(tile).toHaveClass('selected');
  fireEvent.click(tile)
  expect(tile).not.toHaveClass('selected');
  const tiles = container.getElementsByClassName('selected');
  expect(tiles.length).toBe(0)
})