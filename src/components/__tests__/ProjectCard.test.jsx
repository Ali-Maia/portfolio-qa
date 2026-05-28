import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectCard from '../ProjectCard'

const mockProject = {
  slug: 'test-project',
  title: 'Test Project',
  role: 'QA Engineer',
  shortDesc: 'A test project description.',
  tech: ['Cypress', 'K6'],
  color: '#F4CDBC',
  icon: 'Terminal',
  coverImage: null,
  date: '2024',
  featured: true,
}

const renderCard = (overrides = {}) =>
  render(
    <MemoryRouter>
      <ProjectCard project={{ ...mockProject, ...overrides }} />
    </MemoryRouter>
  )

test('renders project title and role', () => {
  renderCard()
  expect(screen.getByText('Test Project')).toBeInTheDocument()
  expect(screen.getByText('QA Engineer')).toBeInTheDocument()
})

test('renders short description', () => {
  renderCard()
  expect(screen.getByText('A test project description.')).toBeInTheDocument()
})

test('renders tech stack joined by ·', () => {
  renderCard()
  expect(screen.getByText('Cypress · K6')).toBeInTheDocument()
})

test('"Ver case" link points to /projetos/:slug', () => {
  renderCard()
  expect(screen.getByRole('link', { name: /ver case/i }))
    .toHaveAttribute('href', '/projetos/test-project')
})

test('shows date badge when date is provided', () => {
  renderCard()
  expect(screen.getByText('2024')).toBeInTheDocument()
})

test('does not show date badge when date is null', () => {
  renderCard({ date: null })
  expect(screen.queryByText('2024')).not.toBeInTheDocument()
})
