import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '../../context/ThemeContext'
import Layout from '../../components/Layout'
import Home from '../Home'
import NotFound from '../NotFound'

const renderNotFoundRoute = () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ], {
    initialEntries: ['/rota-inexistente'],
  })

  return render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

describe('NotFound page', () => {
  it('renders a friendly fallback page and a link back to home', () => {
    renderNotFoundRoute()

    expect(screen.getByText(/página não encontrada/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /voltar para a home/i })).toHaveAttribute('href', '/')
  })
})
