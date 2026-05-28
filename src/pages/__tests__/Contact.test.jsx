import { render, screen } from '@testing-library/react'
import Contact from '../Contact'

test('renders contact heading', () => {
  render(<Contact />)
  expect(screen.getByRole('heading', { name: /vamos conversar/i })).toBeInTheDocument()
})

test('renders email link', () => {
  render(<Contact />)
  expect(screen.getByRole('link', { name: /aliciaengcomp@gmail\.com/i }))
    .toHaveAttribute('href', 'mailto:aliciaengcomp@gmail.com')
})

test('renders GitHub social link', () => {
  render(<Contact />)
  const links = screen.getAllByRole('link')
  const githubLink = links.find(l => l.getAttribute('href')?.includes('github.com/Ali-Maia'))
  expect(githubLink).toBeTruthy()
})

test('renders LinkedIn social link', () => {
  render(<Contact />)
  const links = screen.getAllByRole('link')
  const linkedinLink = links.find(l => l.getAttribute('href')?.includes('linkedin.com'))
  expect(linkedinLink).toBeTruthy()
})
