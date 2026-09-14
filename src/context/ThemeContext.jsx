import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return false

  const storedTheme = localStorage.getItem('theme')

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme === 'dark'
  }

  if (typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return false
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => getPreferredTheme())

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', isDark)
    root.style.colorScheme = isDark ? 'dark' : 'light'
    root.style.backgroundColor = isDark ? '#2C2A27' : '#F5F1DF'
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
