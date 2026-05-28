import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import ProjectDetail from '../ProjectDetail'

const renderDetail = (slug) => {
  const router = createMemoryRouter(
    [
      { path: '/projetos/:slug', element: <ProjectDetail /> },
      { path: '/projetos',       element: <div>lista de projetos</div> },
    ],
    { initialEntries: [`/projetos/${slug}`] }
  )
  return render(<RouterProvider router={router} />)
}

test('renders project title matched by slug', () => {
  renderDetail('bookcart')
  expect(screen.getByRole('heading', { name: /bookcart/i })).toBeInTheDocument()
})

test('renders back button linking to /projetos', () => {
  renderDetail('bookcart')
  expect(screen.getByRole('link', { name: /← projetos/i }))
    .toHaveAttribute('href', '/projetos')
})

test('renders context, challenge and solution blocks', () => {
  renderDetail('bookcart')
  expect(screen.getAllByText(/contexto/i).length).toBeGreaterThan(0)
  expect(screen.getAllByText(/desafio/i).length).toBeGreaterThan(0)
  expect(screen.getAllByText(/solução/i).length).toBeGreaterThan(0)
})

test('hides metrics section when metrics array is empty', () => {
  renderDetail('bookcart') // bookcart.json has metrics: []
  // Labels inside metric blocks should not be present
  expect(screen.queryByText('Pass rate')).not.toBeInTheDocument()
})

test('hides "O que aprendi" when learned is null', () => {
  renderDetail('bookcart') // bookcart.json has learned: null
  expect(screen.queryByText(/o que aprendi/i)).not.toBeInTheDocument()
})

test('does not render Demo button when demo is null', () => {
  renderDetail('bookcart') // bookcart.json has links.demo: null
  expect(screen.queryByRole('link', { name: /demo/i })).not.toBeInTheDocument()
})

test('redirects to /projetos for an unknown slug', () => {
  renderDetail('projeto-que-nao-existe')
  expect(screen.getByText('lista de projetos')).toBeInTheDocument()
})
