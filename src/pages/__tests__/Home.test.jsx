import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../Home'

const renderHome = () =>
  render(<MemoryRouter><Home /></MemoryRouter>)

test('renders hero heading with name', () => {
  renderHome()
  expect(screen.getByRole('heading', { name: /alícia maia/i })).toBeInTheDocument()
})

test('renders role badges', () => {
  renderHome()
  expect(screen.getByText(/analista de qa/i)).toBeInTheDocument()
  expect(screen.getAllByText(/automação/i).length).toBeGreaterThan(0)
})

test('renders only featured projects in the highlight strip', () => {
  renderHome()
  // bookcart and estoque-teste are featured:true; guia-castanhal is featured:false
  expect(screen.getByText('Bookcart')).toBeInTheDocument()
  expect(screen.getByText('Estoque-Teste')).toBeInTheDocument()
  expect(screen.queryByText('Guia Castanhal Online')).not.toBeInTheDocument()
})

test('uses a consistent mobile/tablet/desktop breakpoint pattern in the hero layout', () => {
  renderHome()

  const main = document.querySelector('main')
  expect(main.className).toContain('px-4')
  expect(main.className).toContain('sm:px-6')
  expect(main.className).toContain('lg:px-8')

  const heroHeading = screen.getByRole('heading', { name: /alícia maia/i })
  expect(heroHeading.className).toContain('text-5xl')
  expect(heroHeading.className).toContain('sm:text-6xl')
  expect(heroHeading.className).toContain('md:text-8xl')
})

test('"Ver todos os projetos" link points to /projetos', () => {
  renderHome()
  expect(screen.getByRole('link', { name: /ver todos os projetos/i }))
    .toHaveAttribute('href', '/projetos')
})
