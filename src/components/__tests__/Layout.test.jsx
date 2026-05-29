import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout'
import { ThemeProvider } from '../../context/ThemeContext'

const renderLayout = (initialPath = '/') => {
  const router = createMemoryRouter(
    [{
      path: '/',
      element: <Layout />,
      children: [
        { index: true,          element: <div>home page</div> },
        { path: 'projetos',     element: <div>projetos page</div> },
        { path: 'sobre',        element: <div>sobre page</div> },
        { path: 'contato',      element: <div>contato page</div> },
      ],
    }],
    { initialEntries: [initialPath] }
  )
  return render(<ThemeProvider><RouterProvider router={router} /></ThemeProvider>)
}

test('renders the browser URL bar', () => {
  renderLayout()
  expect(screen.getByText('https://aliciamaia.qa')).toBeInTheDocument()
})

test('renders nav links with correct hrefs', () => {
  renderLayout()
  expect(screen.getByRole('link', { name: /projetos/i })).toHaveAttribute('href', '/projetos')
  expect(screen.getByRole('link', { name: /sobre/i })).toHaveAttribute('href', '/sobre')
  expect(screen.getByRole('link', { name: /contato/i })).toHaveAttribute('href', '/contato')
})

test('renders outlet content', () => {
  renderLayout('/')
  expect(screen.getByText('home page')).toBeInTheDocument()
})

test('active nav link for /projetos has gold background class', () => {
  renderLayout('/projetos')
  const link = screen.getByRole('link', { name: /projetos/i })
  expect(link.className).toContain('bg-[#DBA538]')
})
