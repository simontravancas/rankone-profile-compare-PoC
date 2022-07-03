import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  // TODO: properly type linkElement so that toBeInDocument doesn't throw a type error
  // @ts-expect-error
  expect(linkElement).toBeInTheDocument()
})
