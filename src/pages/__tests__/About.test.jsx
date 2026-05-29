import { render, screen } from '@testing-library/react'
import About from '../About'

test('renders Experiência section heading', () => {
  render(<About />)
  expect(screen.getByRole('heading', { name: /experiência/i })).toBeInTheDocument()
})

test('renders Formação Acadêmica section heading', () => {
  render(<About />)
  expect(screen.getByRole('heading', { name: /formação acadêmica/i })).toBeInTheDocument()
})

test('renders LinkJr experience entry', () => {
  render(<About />)
  expect(screen.getByText(/linkjr/i)).toBeInTheDocument()
})

test('renders UFPA education entry', () => {
  render(<About />)
  expect(screen.getByText(/universidade federal do pará/i)).toBeInTheDocument()
})
