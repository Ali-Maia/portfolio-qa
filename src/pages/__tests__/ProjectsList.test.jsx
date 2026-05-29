import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectsList from '../ProjectsList'

const renderList = () =>
  render(<MemoryRouter><ProjectsList /></MemoryRouter>)

test('renders page heading', () => {
  renderList()
  expect(screen.getByRole('heading', { name: /projetos/i })).toBeInTheDocument()
})

test('renders all projects', () => {
  renderList()
  expect(screen.getByText('Bookcart')).toBeInTheDocument()
  expect(screen.getByText('Estoque-Teste')).toBeInTheDocument()
  expect(screen.getByText('LabPrice')).toBeInTheDocument()
  expect(screen.getByText('Castanhal On')).toBeInTheDocument()
})

test('each project card links to its detail page', () => {
  renderList()
  const links = screen.getAllByRole('link', { name: /ver case/i })
  const hrefs = links.map(l => l.getAttribute('href'))
  expect(hrefs).toContain('/projetos/bookcart')
  expect(hrefs).toContain('/projetos/estoque-teste')
  expect(hrefs).toContain('/projetos/labprice')
  expect(hrefs).toContain('/projetos/guia-castanhal')
})
