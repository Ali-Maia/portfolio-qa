import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectsList from './pages/ProjectsList'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import CyberSecurity from './pages/CyberSecurity'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,               element: <Home /> },
      { path: 'projetos',          element: <ProjectsList /> },
      { path: 'projetos/:slug',    element: <ProjectDetail /> },
      { path: 'sobre',             element: <About /> },
      { path: 'contato',           element: <Contact /> },
      { path: '/cyberseguranca',   element: <CyberSecurity /> },
      { path: '*',                 element: <Navigate to="/" replace /> },
    ],
  },
])

export default router
