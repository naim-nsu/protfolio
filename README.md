# Mohammad Naim Portfolio

A modern, responsive personal portfolio built to showcase my experience as a Full-Stack Software Engineer, my academic background in Artificial Intelligence, and the projects, skills, and work that define my profile.

Live demo: https://mnaim.vercel.app/

## Overview

This portfolio is designed as a clean, data-driven website with a strong visual hierarchy and a balanced light/dark theme system. It highlights:

- My professional experience in full-stack development
- My academic and professional journey
- My frontend, backend, cloud, and DevOps skills
- Selected projects and publications (will be added in the later version)
- A simple way to view and download my CV

## Features

- Responsive layout for mobile, tablet, and desktop
- Light and dark mode support with system preference and local storage persistence
- Scroll-aware navigation with active section highlighting
- Animated hero and section reveal effects
- CV download action from the public folder
- Data-driven content sourced from a single JSON file
- Clean section-based layout for About, Experience, Skills, Projects, and Contact

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

## Design System

### Typography

- `Sora` for display, body, and UI text
- `JetBrains Mono` for labels, metadata, and technical details

### Color Palette

The portfolio uses a custom neutral base with a strong blue accent and semantic green/blue badges.

| Token         | Light           | Dark               | Usage                                            |
| ------------- | --------------- | ------------------ | ------------------------------------------------ |
| Accent        | `#1a56db`       | `#60a5fa`          | CTAs, accent text, timeline dots, section labels |
| Background    | `hsl(0 0% 97%)` | `#09090b`          | Page background                                  |
| Surface       | `hsl(0 1% 98%)` | `#18181b`          | Card background                                  |
| Foreground    | `#18181b`       | `hsl(240 64% 98%)` | Primary text                                     |
| Muted         | `#71717a`       | `#a1a1aa`          | Secondary text                                   |
| Hint          | `#a1a1aa`       | `#71717a`          | Subtle labels and metadata                       |
| Fade          | `#d4d4d8`       | `#3f3f46`          | Soft emphasis and inactive states                |
| Border        | `#f4f4f5`       | `#27272a`          | Standard borders                                 |
| Border Strong | `#e4e4e7`       | `#3f3f46`          | Card, chip, and structural borders               |
| Inverted      | `#18181b`       | `#ffffff`          | Primary button fill                              |

### Semantic Badge Colors

| Badge     | Light Background | Light Text | Dark Background | Dark Text |
| --------- | ---------------- | ---------- | --------------- | --------- |
| Education | `#eff6ff`        | `#2563eb`  | `#172554`       | `#60a5fa` |
| Work      | `#f0fdf4`        | `#059669`  | `#022c22`       | `#34d399` |

## Sections

- Hero
- About
- Experience
- Skills
- Projects
- Contact

## Content Source

All site content is managed from [src/assets/data.json](src/assets/data.json), including:

- Hero text and core skills
- About section copy and profile cards
- Experience timeline
- Skill categories
- Project entries
- Navigation links
- Contact details
- Publications

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/
    data.json
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Experience.tsx
    Skill.tsx
    Project.tsx
    Contact.tsx
  App.tsx
  index.css
```

## Contact

- Email: mdnaim.nsu@gmail.com
- LinkedIn: https://linkedin.com/in/aynaim
- GitHub: https://github.com/naim-nsu

---

Built with a focus on clarity, performance, and a polished personal brand presentation.
