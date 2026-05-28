# Multi-page Projects with Case Studies — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the portfolio from a single-page scroll into a multi-route React app, adding a projects listing page (`/projetos`) and individual case study pages (`/projetos/:slug`).

**Architecture:** React Router v6 (`createBrowserRouter`). A persistent `Layout` component wraps all routes via `<Outlet>`. Project data lives in per-project JSON files under `src/data/projects/`, indexed by `src/data/projects/index.js`. All routing-aware components are tested with `createMemoryRouter` + `RouterProvider`.

**Tech Stack:** React 19, React Router v6 (`react-router-dom`), Vite 8, Tailwind CSS v4, Vitest, @testing-library/react, @testing-library/jest-dom

---

## File map

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `src/components/Layout.jsx` | Persistent shell: fake browser header + nav with NavLink |
| Create | `src/components/ProjectCard.jsx` | Shared card used in Home and ProjectsList |
| Create | `src/pages/Home.jsx` | Hero + skills banner + featured projects strip |
| Create | `src/pages/ProjectsList.jsx` | Full grid of all projects |
| Create | `src/pages/ProjectDetail.jsx` | Case study page, reads slug via `useParams` |
| Create | `src/pages/About.jsx` | Experience + education sections |
| Create | `src/pages/Contact.jsx` | Contact info and social links |
| Create | `src/router.jsx` | `createBrowserRouter` with all routes |
| Modify | `src/App.jsx` | Mount `RouterProvider` |
| Create | `src/data/projects/bookcart.json` | Bookcart project data |
| Create | `src/data/projects/estoque-teste.json` | Estoque-Teste project data |
| Create | `src/data/projects/guia-castanhal.json` | Guia Castanhal project data |
| Create | `src/data/projects/index.js` | Re-exports all projects as ordered array |
| Create | `src/test/setup.js` | Vitest + jest-dom global setup |
| Modify | `vite.config.js` | Add Vitest config (`environment: jsdom`) |
| Modify | `package.json` | Add `test` script |
| Delete | `src/Portfolio.jsx` | Replaced by pages + components |
| Create | `public/images/projects/.gitkeep` | Placeholder for project cover images |
| Create | `src/components/__tests__/ProjectCard.test.jsx` | ProjectCard tests |
| Create | `src/components/__tests__/Layout.test.jsx` | Layout tests |
| Create | `src/pages/__tests__/Home.test.jsx` | Home page tests |
| Create | `src/pages/__tests__/ProjectsList.test.jsx` | ProjectsList tests |
| Create | `src/pages/__tests__/ProjectDetail.test.jsx` | ProjectDetail tests |
| Create | `src/pages/__tests__/About.test.jsx` | About page tests |
| Create | `src/pages/__tests__/Contact.test.jsx` | Contact page tests |

---

## Task 1: Test environment setup

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/test/setup.js`

- [ ] **Step 1: Install test dependencies**

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

Expected: packages added to `node_modules`, `package-lock.json` updated.

- [ ] **Step 2: Add test script to package.json**

In `package.json`, add `"test"` to the `scripts` block:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "test": "vitest"
}
```

- [ ] **Step 3: Configure Vitest in vite.config.js**

Replace the entire file:

```js
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true,
  },
})
```

- [ ] **Step 4: Create test setup file**

```js
// src/test/setup.js
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Write smoke test to verify setup works**

```jsx
// src/test/smoke.test.jsx
test('test environment is working', () => {
  expect(1 + 1).toBe(2)
})
```

- [ ] **Step 6: Run smoke test**

```bash
npm test -- --run
```

Expected output:
```
✓ src/test/smoke.test.jsx (1)
  ✓ test environment is working

Test Files  1 passed (1)
Tests       1 passed (1)
```

- [ ] **Step 7: Delete smoke test**

```bash
rm src/test/smoke.test.jsx
```

- [ ] **Step 8: Commit**

```bash
git add vite.config.js package.json package-lock.json src/test/setup.js
git commit -m "chore: set up Vitest and React Testing Library"
```

---

## Task 2: Project data files

**Files:**
- Create: `src/data/projects/bookcart.json`
- Create: `src/data/projects/estoque-teste.json`
- Create: `src/data/projects/guia-castanhal.json`
- Create: `src/data/projects/index.js`
- Create: `public/images/projects/.gitkeep`

No test needed — these are pure data files. The content fields marked with `"Preencha..."` are intentional placeholders for you to fill in with real project details before going live.

- [ ] **Step 1: Create src/data/projects/bookcart.json**

```json
{
  "slug": "bookcart",
  "title": "Bookcart",
  "role": "Automação E2E (POM)",
  "shortDesc": "Criação de testes E2E automatizados para uma aplicação de e-commerce aplicando o padrão Page Object Model (POM).",
  "coverImage": "/images/projects/bookcart-cover.png",
  "date": "2024",
  "featured": true,
  "tech": ["Cypress", "Mochawesome"],
  "color": "#F4CDBC",
  "icon": "Terminal",
  "context": "Preencha com o contexto e objetivo do projeto Bookcart.",
  "challenge": "Preencha com o principal desafio técnico enfrentado.",
  "solution": "Preencha com a solução adotada para resolver o desafio.",
  "metrics": [],
  "learned": null,
  "links": {
    "github": "https://github.com/Ali-Maia/bookcart",
    "demo": null
  }
}
```

- [ ] **Step 2: Create src/data/projects/estoque-teste.json**

```json
{
  "slug": "estoque-teste",
  "title": "Estoque-Teste",
  "role": "Automação E2E",
  "shortDesc": "Desenvolvimento de testes E2E e de performance para uma página Web de controle de estoque, validando regras de negócio.",
  "coverImage": "/images/projects/estoque-teste-cover.png",
  "date": "2024",
  "featured": true,
  "tech": ["Cypress", "K6"],
  "color": "#D93635",
  "icon": "Monitor",
  "context": "Preencha com o contexto e objetivo do projeto Estoque-Teste.",
  "challenge": "Preencha com o principal desafio técnico enfrentado.",
  "solution": "Preencha com a solução adotada para resolver o desafio.",
  "metrics": [],
  "learned": null,
  "links": {
    "github": "https://github.com/Ali-Maia/estoque-teste",
    "demo": null
  }
}
```

- [ ] **Step 3: Create src/data/projects/guia-castanhal.json**

```json
{
  "slug": "guia-castanhal",
  "title": "Guia Castanhal Online",
  "role": "Responsável por QA / Testes",
  "shortDesc": "Planejamento e execução de testes manuais e automatizados para garantir a funcionalidade e usabilidade da plataforma.",
  "coverImage": "/images/projects/guia-castanhal-cover.png",
  "date": "2024",
  "featured": false,
  "tech": ["QA Manual", "Automação"],
  "color": "#DBA538",
  "icon": "Smartphone",
  "context": "Preencha com o contexto e objetivo do projeto Guia Castanhal.",
  "challenge": "Preencha com o principal desafio técnico enfrentado.",
  "solution": "Preencha com a solução adotada para resolver o desafio.",
  "metrics": [],
  "learned": null,
  "links": {
    "github": null,
    "demo": null
  }
}
```

- [ ] **Step 4: Create src/data/projects/index.js**

```js
// src/data/projects/index.js
// Array position controls display order (most recent first).
// The `date` field is for display only — do not sort by it programmatically.
import estoqueTeste from './estoque-teste.json'
import bookcart from './bookcart.json'
import guiaCastanhal from './guia-castanhal.json'

const projects = [estoqueTeste, bookcart, guiaCastanhal]

export default projects
```

- [ ] **Step 5: Create public/images/projects/.gitkeep**

```bash
mkdir -p public/images/projects
touch public/images/projects/.gitkeep
```

This folder is where you drop cover images (`bookcart-cover.png`, etc.). The components fall back to the project's `color` field when an image is missing, so the app works before you add images.

- [ ] **Step 6: Commit**

```bash
git add src/data/ public/images/
git commit -m "feat: add per-project JSON data files and images folder"
```

---

## Task 3: ProjectCard component

**Files:**
- Create: `src/components/ProjectCard.jsx`
- Create: `src/components/__tests__/ProjectCard.test.jsx`

- [ ] **Step 1: Write failing tests**

```jsx
// src/components/__tests__/ProjectCard.test.jsx
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --run
```

Expected: 6 failures — `ProjectCard` does not exist yet.

- [ ] **Step 3: Create src/components/ProjectCard.jsx**

```jsx
// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom'
import { Terminal, Monitor, Smartphone } from 'lucide-react'

const ICONS = {
  Terminal: <Terminal className="w-16 h-16 text-[#181818]" strokeWidth={2} />,
  Monitor:  <Monitor  className="w-16 h-16 text-[#181818]" strokeWidth={2} />,
  Smartphone: <Smartphone className="w-16 h-16 text-[#181818]" strokeWidth={2} />,
}

const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const ProjectCard = ({ project }) => {
  const { slug, title, role, shortDesc, tech, color, coverImage, date, icon } = project

  return (
    <div className={`bg-white flex flex-col ${brutalistBox} ${brutalistHover}`}>
      {/* Card header */}
      <div
        className="h-40 border-b-4 border-[#181818] flex items-center justify-center p-4 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          ICONS[icon] ?? ICONS.Terminal
        )}

        {/* Tech badge */}
        <div className={`bg-white px-4 py-2 font-black uppercase text-sm absolute bottom-4 right-4 ${brutalistBox}`}>
          {tech.join(' · ')}
        </div>

        {/* Date badge */}
        {date && (
          <div className="bg-white border-2 border-[#181818] px-2 py-1 text-xs font-bold absolute top-4 right-4">
            {date}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-black uppercase mb-2">{title}</h3>
        <h4 className="text-[#D93635] font-bold uppercase mb-4 text-sm tracking-wider">{role}</h4>
        <p className="font-medium mb-6 flex-1">{shortDesc}</p>
        <Link
          to={`/projetos/${slug}`}
          className={`w-full bg-[#F5F1DF] text-center font-black uppercase py-2 ${brutalistBox} hover:bg-[#DBA538] transition-colors block`}
        >
          Ver case →
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --run
```

Expected:
```
✓ src/components/__tests__/ProjectCard.test.jsx (6)

Test Files  1 passed (1)
Tests  6 passed (6)
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectCard.jsx src/components/__tests__/ProjectCard.test.jsx
git commit -m "feat: add ProjectCard component with tests"
```

---

## Task 4: Layout component

**Files:**
- Create: `src/components/Layout.jsx`
- Create: `src/components/__tests__/Layout.test.jsx`

- [ ] **Step 1: Write failing tests**

```jsx
// src/components/__tests__/Layout.test.jsx
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout'

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
  return render(<RouterProvider router={router} />)
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --run
```

Expected: 4 failures — `Layout` does not exist yet.

- [ ] **Step 3: Create src/components/Layout.jsx**

```jsx
// src/components/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom'
import { Mail, Folder, User, Home } from 'lucide-react'

const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const navLinkClass = ({ isActive }) =>
  `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-6 py-3 flex items-center gap-2 cursor-pointer ${
    isActive ? 'bg-[#DBA538]' : 'bg-[#F5F1DF]'
  }`

const Layout = () => (
  <div className="min-h-screen bg-[#F5F1DF] text-[#181818] font-sans selection:bg-[#DBA538] selection:text-[#181818]">
    {/* Fake browser header */}
    <div className={`bg-[#F5F1DF] ${brutalistBorder} border-t-0 border-l-0 border-r-0 border-b-4 flex items-center px-4 py-2 sticky top-0 z-50`}>
      <div className="flex gap-2 mr-6">
        <div className="w-4 h-4 rounded-full bg-[#D93635] border-2 border-[#181818]" />
        <div className="w-4 h-4 rounded-full bg-[#DBA538] border-2 border-[#181818]" />
        <div className="w-4 h-4 rounded-full bg-[#A81C24] border-2 border-[#181818]" />
      </div>
      <div className={`flex-1 bg-white ${brutalistBorder} h-8 flex items-center px-4 mx-4`}>
        <span className="font-bold text-sm">https://aliciamaia.qa</span>
      </div>
    </div>

    {/* Navigation */}
    <nav className="p-6 flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
      <NavLink to="/" end className={navLinkClass}>
        <Home className="w-6 h-6" /> Home
      </NavLink>
      <NavLink to="/projetos" className={navLinkClass}>
        <Folder className="w-6 h-6" /> Projetos
      </NavLink>
      <NavLink to="/sobre" className={navLinkClass}>
        <User className="w-6 h-6" /> Sobre Mim
      </NavLink>
      <NavLink to="/contato" className={navLinkClass}>
        <Mail className="w-6 h-6" /> Contato
      </NavLink>
    </nav>

    <Outlet />
  </div>
)

export default Layout
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --run
```

Expected:
```
✓ src/components/__tests__/Layout.test.jsx (4)
✓ src/components/__tests__/ProjectCard.test.jsx (6)

Test Files  2 passed (2)
Tests  10 passed (10)
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Layout.jsx src/components/__tests__/Layout.test.jsx
git commit -m "feat: add Layout component with persistent nav and tests"
```

---

## Task 5: Router and App.jsx

**Files:**
- Create: `src/router.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create src/router.jsx**

```jsx
// src/router.jsx
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectsList from './pages/ProjectsList'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'

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
    ],
  },
])

export default router
```

- [ ] **Step 2: Update src/App.jsx**

```jsx
// src/App.jsx
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return <RouterProvider router={router} />
}

export default App
```

No tests at this step — the router wires together pages that don't exist yet. The build will be verified in Task 11.

- [ ] **Step 3: Commit**

```bash
git add src/router.jsx src/App.jsx
git commit -m "feat: set up React Router v6 with all routes"
```

---

## Task 6: Home page

**Files:**
- Create: `src/pages/Home.jsx`
- Create: `src/pages/__tests__/Home.test.jsx`

- [ ] **Step 1: Write failing tests**

```jsx
// src/pages/__tests__/Home.test.jsx
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
  expect(screen.getByText(/automação/i)).toBeInTheDocument()
})

test('renders only featured projects in the highlight strip', () => {
  renderHome()
  // bookcart and estoque-teste are featured:true; guia-castanhal is featured:false
  expect(screen.getByText('Bookcart')).toBeInTheDocument()
  expect(screen.getByText('Estoque-Teste')).toBeInTheDocument()
  expect(screen.queryByText('Guia Castanhal Online')).not.toBeInTheDocument()
})

test('"Ver todos os projetos" link points to /projetos', () => {
  renderHome()
  expect(screen.getByRole('link', { name: /ver todos os projetos/i }))
    .toHaveAttribute('href', '/projetos')
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --run src/pages/__tests__/Home.test.jsx
```

Expected: 4 failures.

- [ ] **Step 3: Create src/pages/Home.jsx**

```jsx
// src/pages/Home.jsx
import React from 'react'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects/index.js'
import AvatarImg from '../assets/avatar.png'

const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`
const brutalistButton =
  `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-6 py-3 flex items-center gap-2 cursor-pointer`

const skills = [
  'Cypress', 'Playwright', 'K6', 'JavaScript',
  'Python', 'Mocha / Chai', 'Postman / Swagger', 'Scrum / Kanban',
]

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="pb-20">
      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-20 flex flex-col lg:flex-row items-center gap-12 relative">
        <Star className="absolute top-10 left-10 w-8 h-8 fill-[#DBA538] text-[#181818] hidden lg:block" />
        <Star className="absolute bottom-20 left-1/2 w-12 h-12 fill-[#D93635] text-[#181818] hidden lg:block" />
        <Star className="absolute top-20 right-10 w-6 h-6 fill-[#F4CDBC] text-[#181818] hidden lg:block" />

        <div className="flex-1 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            Olá, sou <br />
            <span className="text-[#F5F1DF] bg-[#181818] px-2 inline-block -skew-x-6 mt-2 pb-2">
              Alícia Maia
            </span>
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className={`bg-[#DBA538] text-[#181818] text-xl md:text-3xl font-black uppercase px-4 py-2 ${brutalistBox}`}>
              Analista de QA
            </span>
            <span className={`bg-[#D93635] text-[#F5F1DF] text-xl md:text-3xl font-black uppercase px-4 py-2 ${brutalistBox} rotate-2`}>
              Automação
            </span>
          </div>
          <p className="text-xl md:text-2xl font-bold max-w-lg mb-8 leading-snug">
            Garantindo a qualidade do software com rigor técnico, automação de testes e uma pitada de estilo vintage.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Ali-Maia" target="_blank" rel="noreferrer"
               className={`${brutalistButton} bg-[#181818] text-[#F5F1DF]`}>
              <FaGithub className="w-6 h-6" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dev-maia/" target="_blank" rel="noreferrer"
               className={`${brutalistButton} bg-[#181818] text-[#F5F1DF]`}>
              <FaLinkedin className="w-6 h-6" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className={`w-80 h-80 md:w-96 md:h-96 bg-[#F4CDBC] rounded-full ${brutalistBox} flex items-center justify-center relative overflow-hidden`}>
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-[#68412B] rounded-full ${brutalistBorder}`} />
            <div className={`absolute top-10 -left-10 w-20 h-20 bg-[#A81C24] ${brutalistBorder} rotate-12`} />
            <img src={AvatarImg} alt="Avatar Alícia Maia" className="w-full h-full object-cover scale-110" />
          </div>
        </div>
      </main>

      {/* Skills banner */}
      <div className="bg-[#181818] text-[#F5F1DF] border-y-4 border-[#181818] py-4 overflow-hidden mb-20 relative flex">
        <div className="flex animate-marquee whitespace-nowrap gap-8 px-4 font-black text-2xl uppercase tracking-widest items-center">
          {[...skills, ...skills].map((skill, i) => (
            <React.Fragment key={i}>
              <span>{skill}</span>
              <Star className="w-6 h-6 fill-[#DBA538] text-[#DBA538]" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-2 flex-1 bg-[#181818]" />
            <h2 className="text-4xl md:text-5xl font-black uppercase text-center bg-[#DBA538] text-[#181818] px-6 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
              ⭐ Em Destaque
            </h2>
            <div className="h-2 flex-1 bg-[#181818]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/projetos" className={`${brutalistButton} inline-flex mx-auto bg-[#F5F1DF]`}>
              Ver todos os projetos →
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --run
```

Expected:
```
✓ src/components/__tests__/Layout.test.jsx (4)
✓ src/components/__tests__/ProjectCard.test.jsx (6)
✓ src/pages/__tests__/Home.test.jsx (4)

Tests  14 passed (14)
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/Home.jsx src/pages/__tests__/Home.test.jsx
git commit -m "feat: add Home page with hero, skills banner and featured projects"
```

---

## Task 7: ProjectsList page

**Files:**
- Create: `src/pages/ProjectsList.jsx`
- Create: `src/pages/__tests__/ProjectsList.test.jsx`

- [ ] **Step 1: Write failing tests**

```jsx
// src/pages/__tests__/ProjectsList.test.jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectsList from '../ProjectsList'

const renderList = () =>
  render(<MemoryRouter><ProjectsList /></MemoryRouter>)

test('renders page heading', () => {
  renderList()
  expect(screen.getByRole('heading', { name: /projetos/i })).toBeInTheDocument()
})

test('renders all three projects', () => {
  renderList()
  expect(screen.getByText('Bookcart')).toBeInTheDocument()
  expect(screen.getByText('Estoque-Teste')).toBeInTheDocument()
  expect(screen.getByText('Guia Castanhal Online')).toBeInTheDocument()
})

test('each project card links to its detail page', () => {
  renderList()
  const links = screen.getAllByRole('link', { name: /ver case/i })
  const hrefs = links.map(l => l.getAttribute('href'))
  expect(hrefs).toContain('/projetos/bookcart')
  expect(hrefs).toContain('/projetos/estoque-teste')
  expect(hrefs).toContain('/projetos/guia-castanhal')
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --run src/pages/__tests__/ProjectsList.test.jsx
```

Expected: 3 failures.

- [ ] **Step 3: Create src/pages/ProjectsList.jsx**

```jsx
// src/pages/ProjectsList.jsx
import projects from '../data/projects/index.js'
import ProjectCard from '../components/ProjectCard'

const ProjectsList = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <div className="flex items-center gap-4 mb-10">
      <div className="h-2 flex-1 bg-[#181818]" />
      <h1 className="text-4xl md:text-5xl font-black uppercase text-center bg-[#D93635] text-[#F5F1DF] px-6 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
        Projetos
      </h1>
      <div className="h-2 flex-1 bg-[#181818]" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  </section>
)

export default ProjectsList
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --run
```

Expected: all 17 tests passing.

- [ ] **Step 5: Commit**

```bash
git add src/pages/ProjectsList.jsx src/pages/__tests__/ProjectsList.test.jsx
git commit -m "feat: add ProjectsList page with full projects grid and tests"
```

---

## Task 8: ProjectDetail page

**Files:**
- Create: `src/pages/ProjectDetail.jsx`
- Create: `src/pages/__tests__/ProjectDetail.test.jsx`

- [ ] **Step 1: Write failing tests**

```jsx
// src/pages/__tests__/ProjectDetail.test.jsx
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
  expect(screen.getByText(/contexto/i)).toBeInTheDocument()
  expect(screen.getByText(/desafio/i)).toBeInTheDocument()
  expect(screen.getByText(/solução/i)).toBeInTheDocument()
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --run src/pages/__tests__/ProjectDetail.test.jsx
```

Expected: 7 failures.

- [ ] **Step 3: Create src/pages/ProjectDetail.jsx**

```jsx
// src/pages/ProjectDetail.jsx
import { useParams, Navigate, Link } from 'react-router-dom'
import projects from '../data/projects/index.js'

const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[4px_4px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/projetos" replace />

  const {
    title, role, tech, color, coverImage, date,
    context, challenge, solution, metrics, learned, links,
  } = project

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20 pt-8">
      {/* Back button */}
      <Link
        to="/projetos"
        className={`inline-flex items-center gap-2 ${brutalistBox} font-black uppercase px-4 py-2 mb-8 bg-[#F5F1DF] hover:bg-[#DBA538] transition-colors duration-150`}
      >
        ← Projetos
      </Link>

      {/* Cover image */}
      <div
        className={`w-full h-64 md:h-72 ${brutalistBorder} mb-8 relative overflow-hidden flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {coverImage && (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        )}
        {date && (
          <div className="absolute top-4 right-4 bg-white border-2 border-[#181818] px-3 py-1 text-sm font-bold">
            {date}
          </div>
        )}
      </div>

      {/* Title + role + tech */}
      <h1 className="text-4xl md:text-5xl font-black uppercase mb-3">{title}</h1>
      <p className="text-[#D93635] font-bold uppercase tracking-wider mb-4">{role}</p>
      <div className="flex flex-wrap gap-2 mb-10">
        {tech.map(t => (
          <span key={t} className="bg-[#181818] text-[#F5F1DF] font-bold px-3 py-1 text-sm">
            {t}
          </span>
        ))}
      </div>

      {/* Context */}
      <div className={`bg-white p-6 ${brutalistBox} mb-6`}>
        <h2 className="text-xs font-black uppercase text-[#D93635] mb-2">Contexto</h2>
        <p className="font-medium leading-relaxed">{context}</p>
      </div>

      {/* Challenge / Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border-4 border-[#D93635] p-6">
          <h2 className="text-xs font-black uppercase text-[#D93635] mb-2">Desafio</h2>
          <p className="font-medium leading-relaxed">{challenge}</p>
        </div>
        <div className="border-4 border-[#DBA538] bg-[#F4CDBC] p-6">
          <h2 className="text-xs font-black uppercase text-[#A81C24] mb-2">Solução</h2>
          <p className="font-medium leading-relaxed">{solution}</p>
        </div>
      </div>

      {/* Metrics — hidden when array is empty */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map(m => (
            <div key={m.label} className="bg-[#181818] text-[#F5F1DF] p-6 text-center">
              <div className="text-3xl font-black text-[#DBA538]">{m.value}</div>
              <div className="text-xs uppercase font-bold mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* O que aprendi — hidden when null */}
      {learned && (
        <div className={`bg-[#F4CDBC] p-6 ${brutalistBox} mb-6`}>
          <h2 className="text-xs font-black uppercase mb-2">O que aprendi</h2>
          <p className="font-medium leading-relaxed">{learned}</p>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={`${brutalistBox} bg-[#181818] text-[#F5F1DF] font-black uppercase px-6 py-3 hover:bg-[#DBA538] hover:text-[#181818] transition-colors duration-150`}
          >
            GitHub →
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className={`${brutalistBox} bg-[#F5F1DF] font-black uppercase px-6 py-3 hover:bg-[#DBA538] transition-colors duration-150`}
          >
            Demo →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --run
```

Expected: all 24 tests passing.

- [ ] **Step 5: Commit**

```bash
git add src/pages/ProjectDetail.jsx src/pages/__tests__/ProjectDetail.test.jsx
git commit -m "feat: add ProjectDetail case study page with tests"
```

---

## Task 9: About page

**Files:**
- Create: `src/pages/About.jsx`
- Create: `src/pages/__tests__/About.test.jsx`

- [ ] **Step 1: Write failing tests**

```jsx
// src/pages/__tests__/About.test.jsx
import { render, screen } from '@testing-library/react'
import About from '../About'

test('renders Experiência section heading', () => {
  render(<About />)
  expect(screen.getByRole('heading', { name: /experiência/i })).toBeInTheDocument()
})

test('renders Formação Acadêmica section heading', () => {
  render(<About />)
  expect(screen.getByRole('heading', { name: /formação acadêmica/i })).toBeInTheDocument()
})

test('renders Link JR experience entry', () => {
  render(<About />)
  expect(screen.getByText('Link JR')).toBeInTheDocument()
})

test('renders UFPA education entry', () => {
  render(<About />)
  expect(screen.getByText(/universidade federal do pará/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --run src/pages/__tests__/About.test.jsx
```

Expected: 4 failures.

- [ ] **Step 3: Create src/pages/About.jsx**

```jsx
// src/pages/About.jsx
const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[4px_4px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`

const experiences = [
  {
    role: 'Vice-presidente',
    company: 'Link JR',
    period: 'Agosto 2024 - Presente',
    desc: 'Atuação estratégica na gestão e desenvolvimento de projetos ágeis.',
  },
  {
    role: 'Bolsista e Mentora',
    company: "Projeto Meninas PaiD'Éguas (UFPA)",
    period: 'Agosto 2024 - Setembro 2025',
    desc: 'Mentoria em Computação e robótica para meninas do ensino médio.',
  },
  {
    role: 'Tutora de Informática',
    company: 'Tutoria Discente Castanhal (UFPA)',
    period: 'Agosto 2023 - Julho 2024',
    desc: 'Auxílio a alunos e desenvolvimento do site da tutoria.',
  },
]

const About = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Experiência */}
    <div>
      <div className="inline-block mb-8">
        <h2 className="text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
          Experiência
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`bg-[#F4CDBC] p-6 ${brutalistBox}`}>
            <h3 className="text-xl font-black uppercase">{exp.role}</h3>
            <h4 className="font-bold text-[#A81C24] text-lg mb-2">{exp.company}</h4>
            <div className="inline-block bg-white border-2 border-[#181818] px-2 py-1 text-xs font-bold mb-3">
              {exp.period}
            </div>
            <p className="font-medium">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Formação */}
    <div>
      <div className="inline-block mb-8">
        <h2 className="text-3xl font-black uppercase bg-[#DBA538] px-4 py-2 border-4 border-[#181818] shadow-[4px_4px_0px_#181818]">
          Formação Acadêmica
        </h2>
      </div>
      <div className="space-y-6">
        {[
          {
            course: 'Engenharia de Computação',
            institution: 'Universidade Federal do Pará (UFPA)',
            detail: 'Bacharelado | 2020 - 2025',
          },
          {
            course: 'Automação de Testes de Software',
            institution: 'Faculdade VINCIT / FACINT',
            detail: 'Pós-Graduação (PGATS) | 2026',
          },
          {
            course: 'Desenvolvimento de Sistemas',
            institution: 'IFSULMINAS',
            detail: 'Técnico | 2026 - 2027',
          },
        ].map((edu, idx) => (
          <div key={idx} className={`bg-[#F5F1DF] p-6 ${brutalistBox}`}>
            <h3 className="text-xl font-black uppercase">{edu.course}</h3>
            <h4 className="font-bold text-[#A81C24] text-lg mb-2">{edu.institution}</h4>
            <p className="font-medium">{edu.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default About
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --run
```

Expected: all 28 tests passing.

- [ ] **Step 5: Commit**

```bash
git add src/pages/About.jsx src/pages/__tests__/About.test.jsx
git commit -m "feat: add About page with experience and education sections"
```

---

## Task 10: Contact page

**Files:**
- Create: `src/pages/Contact.jsx`
- Create: `src/pages/__tests__/Contact.test.jsx`

- [ ] **Step 1: Write failing tests**

```jsx
// src/pages/__tests__/Contact.test.jsx
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --run src/pages/__tests__/Contact.test.jsx
```

Expected: 4 failures.

- [ ] **Step 3: Create src/pages/Contact.jsx**

```jsx
// src/pages/Contact.jsx
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const brutalistBorder = 'border-4 border-[#181818]'
const brutalistShadow = 'shadow-[6px_6px_0px_#181818]'
const brutalistHover  =
  'transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#181818]'
const brutalistBox = `${brutalistBorder} ${brutalistShadow}`
const brutalistButton =
  `${brutalistBox} ${brutalistHover} font-black uppercase tracking-wider px-6 py-3 flex items-center gap-2 cursor-pointer`

const Contact = () => (
  <footer className="max-w-6xl mx-auto px-6 py-16 border-t-8 border-[#181818] flex flex-col md:flex-row justify-between items-center gap-8">
    <div>
      <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Vamos conversar?</h2>
      <p className="font-bold text-xl mb-6">Disponível para oportunidades em QA e Automação.</p>
      <a
        href="mailto:aliciaengcomp@gmail.com"
        className={`${brutalistButton} bg-[#D93635] text-[#F5F1DF] inline-flex text-xl`}
      >
        <Mail className="w-6 h-6" /> aliciaengcomp@gmail.com
      </a>
    </div>
    <div className={`bg-[#68412B] text-[#F5F1DF] p-8 flex flex-col items-center gap-4 ${brutalistBox} rotate-2`}>
      <span className="font-black uppercase text-xl">Siga-me</span>
      <div className="flex gap-4">
        <a href="https://github.com/Ali-Maia" target="_blank" rel="noreferrer"
           className="hover:text-[#DBA538] transition-colors">
          <FaGithub className="w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/in/dev-maia/" target="_blank" rel="noreferrer"
           className="hover:text-[#DBA538] transition-colors">
          <FaLinkedin className="w-10 h-10" />
        </a>
      </div>
    </div>
  </footer>
)

export default Contact
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --run
```

Expected: all 32 tests passing.

- [ ] **Step 5: Commit**

```bash
git add src/pages/Contact.jsx src/pages/__tests__/Contact.test.jsx
git commit -m "feat: add Contact page with email and social links"
```

---

## Task 11: Cleanup and final verification

**Files:**
- Delete: `src/Portfolio.jsx`

- [ ] **Step 1: Delete Portfolio.jsx**

```bash
rm src/Portfolio.jsx
```

- [ ] **Step 2: Run full test suite**

```bash
npm test -- --run
```

Expected: all 32 tests passing, 0 failures.

- [ ] **Step 3: Run production build**

```bash
npm run build
```

Expected: build succeeds with no errors. Note: `avatar.png` will still appear as a large asset in the output (7 MB) — this is tracked as a separate optimisation task.

- [ ] **Step 4: Run lint**

```bash
npm run lint
```

Expected: no warnings or errors.

- [ ] **Step 5: Commit and push**

```bash
git add -A
git commit -m "chore: remove Portfolio.jsx, replaced by pages and components"
git push origin fix/diagnostico-inicial
```
