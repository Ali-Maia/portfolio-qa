import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../ThemeContext'

const ThemeProbe = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'dark' : 'light'}
    </button>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.style.colorScheme = ''
  })

  it('keeps the browser color scheme aligned with the app theme', () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>
    )

    expect(document.documentElement.style.colorScheme).toBe('light')

    fireEvent.click(screen.getByRole('button', { name: 'light' }))

    expect(document.documentElement.style.colorScheme).toBe('dark')
  })
})
