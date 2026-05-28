# Design Spec — Multi-page Projects with Case Studies

**Date:** 2026-06-27
**Status:** Approved for implementation

---

## 1. Goal

Restructure the portfolio from a single-page scroll into a multi-route React app. The projects section gains a dedicated listing page and individual case study pages, inspired by the structure of karolwojtyla.dev/projects.

---

## 2. Architecture

### Routing strategy
React Router v6 (`react-router-dom`). No hash routing. Clean URLs via `createBrowserRouter`.

### File structure

```
src/
  components/
    Layout.jsx          ← persistent wrapper: fake browser header + nav
    ProjectCard.jsx     ← card used in both Home featured section and /projetos listing
  pages/
    Home.jsx            ← hero + skills banner + featured projects strip
    ProjectsList.jsx    ← full project grid (/projetos)
    ProjectDetail.jsx   ← case study page (/projetos/:slug)
    About.jsx           ← experience + education sections
    Contact.jsx         ← contact/footer section
  data/
    projects/
      bookcart.json
      estoque-teste.json
      guia-castanhal.json
  router.jsx            ← createBrowserRouter, all routes defined here
  App.jsx               ← mounts RouterProvider
  main.jsx
  index.css
```

### Route map

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Hero, skills banner, featured projects strip |
| `/projetos` | `ProjectsList` | Full grid of all projects |
| `/projetos/:slug` | `ProjectDetail` | Case study for a single project |
| `/sobre` | `About` | Experience + academic background |
| `/contato` | `Contact` | Contact info and social links |

`Layout.jsx` wraps all routes via `<Outlet />`. The fake browser header and navigation bar render once and persist across all pages.

---

## 3. Data model

Each project lives in its own JSON file at `src/data/projects/<slug>.json`.

```json
{
  "slug": "bookcart",
  "title": "Bookcart",
  "role": "Automação E2E (POM)",
  "shortDesc": "Criação de testes E2E automatizados para e-commerce aplicando Page Object Model.",
  "coverImage": "/images/projects/bookcart-cover.png",
  "date": "Nov 2023",
  "featured": true,
  "tech": ["Cypress", "Mochawesome"],
  "color": "#F4CDBC",
  "context": "...",
  "challenge": "...",
  "solution": "...",
  "metrics": [
    { "label": "Testes", "value": "38" },
    { "label": "Pass rate", "value": "100%" },
    { "label": "Tempo no CI", "value": "4 min" }
  ],
  "learned": "...",
  "links": {
    "github": "https://github.com/Ali-Maia/...",
    "demo": null
  }
}
```

**Resilience rules (front-end must handle gracefully):**
- `metrics: []` → hide the metrics section entirely, no blank space
- `learned: null` → hide the "O que aprendi" block
- `demo: null` → render only the GitHub button; never render a broken link
- `coverImage` pointing to a missing file → show the project's `color` background as fallback

A single `src/data/projects/index.js` re-exports all project JSONs as a manually ordered array (most recent first). The `date` field is display-only — ordering is controlled by the array position in `index.js`, not by parsing the date string. `ProjectDetail` uses `useParams()` to match `slug`.

---

## 4. Page designs

### 4.1 Layout.jsx (persistent shell)

Identical to the current fake browser header + nav bar. Navigation links change from `href="#section"` anchor scrolls to `<Link to="/path">` from React Router. The active route gets a `bg-[#DBA538]` highlight on its nav button.

### 4.2 Home ( `/` )

Current content (hero, skills banner) stays intact. A new **"Projetos em destaque"** strip is added below the skills banner showing only projects where `featured: true` (expected: 2 cards). Each card uses `ProjectCard`. A "Ver todos os projetos →" button links to `/projetos`.

### 4.3 ProjectsList ( `/projetos` )

- Section heading in the same neobrutalista style as today (`bg-[#D93635]` with flanking lines)
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Each card: cover image (with color fallback), title, role, date badge (bottom-right of image), short description, tech tags, "Ver case →" button
- Cards sorted by `date` descending

### 4.4 ProjectDetail ( `/projetos/:slug` )

Structure top to bottom:

1. **Back button** — chunky neobrutalista button (`border-4 border-[#181818] shadow-[4px_4px_0px_#181818]`) reading `← Projetos`, links to `/projetos`. Placed above the cover image.
2. **Cover image** — full-width, `max-h-72`, `object-cover`. Falls back to `background-color: project.color` if image is missing. Date badge in top-right corner.
3. **Title + role + tech tags** — same typographic treatment as today's cards.
4. **Context block** — white card with red label "Contexto".
5. **Challenge / Solution** — two-column grid on desktop (`md:grid-cols-2`), single column stacked on mobile (`grid-cols-1`). Challenge has `border-[#D93635]`; Solution has `border-[#DBA538]` and `bg-[#F4CDBC]`. Both keep `border-4` on mobile to maintain the neobrutalista feel.
6. **Metrics** — `grid-cols-3` on desktop, `grid-cols-3` maintained on mobile (numbers are short enough). Each metric: dark background, large `#DBA538` number, small uppercase label. Section is hidden entirely if `metrics` is empty.
7. **O que aprendi** — peach `bg-[#F4CDBC]` card. Hidden if `learned` is null.
8. **Links** — GitHub button always shown if `links.github` exists. Demo button shown only if `links.demo` is not null. On hover: background becomes `bg-[#DBA538]`, 150ms transition.

**404 handling:** If `slug` doesn't match any project, `ProjectDetail` redirects to `/projetos`.

---

## 5. Interactions & hover states

| Element | Default | Hover |
|---------|---------|-------|
| ProjectCard | `shadow-[6px_6px_0px_#181818]` | `-translate-y-1 -translate-x-1`, `shadow-[10px_10px_0px_#181818]`, 200ms ease |
| Nav buttons | `bg-[#F5F1DF]` | `-translate-y-1 -translate-x-1`, `shadow-[4px_4px_0px_#181818]` (existing `brutalistHover`) |
| GitHub / Demo buttons | `bg-[#181818] text-[#F5F1DF]` | `bg-[#DBA538] text-[#181818]`, 150ms transition |
| Back button | `bg-[#F5F1DF]` | `bg-[#DBA538]`, 150ms transition |

---

## 6. Responsive behaviour summary

| Element | Mobile (default) | Desktop (`md:`) |
|---------|-----------------|-----------------|
| Projects grid | 1 column | 2 cols → 3 cols (`lg:`) |
| Challenge/Solution | stacked (`flex-col`) | side by side (`grid-cols-2`) |
| Metrics | 3 cols (values are short) | 3 cols |
| Hero | stacked, avatar below text | side by side (`lg:flex-row`) |

---

## 7. Out of scope

- Image optimisation for `avatar.png` — tracked separately
- TypeScript migration
- CMS or external data source
- Animations beyond hover transitions (scroll-triggered, page transitions)
