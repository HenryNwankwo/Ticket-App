# Multi‑Framework Ticket Web App — Starter Project

This document is a single-point starter for building the **Ticket Management Web App** in **React**, **Vue.js**, and **Twig** (3 separate, complete implementations). It includes: a root README and per-framework README templates.

---

## Root README (top-level)

### Project name

`TicketApp — Multi‑Framework Implementations`

### Overview

This repository contains three independent implementations of the same Ticket Management application:

- `react/` — React + Tailwind + NextJS
- `vue/` — Vue 3 + Vite + Pinia + Vue Router implementation
- `twig/` — Twig templates (PHP) implementation (server-rendered), plus lightweight router and localStorage-based auth

Each implementation follows the exact same UI/UX rules (wave hero, decorative circles, max-width 1440px centered layout) and enforces authentication, protected routes, and ticket CRUD with validation.

### How to use

1. Clone repo
2. cd into the framework folder you want (e.g., `react-ticketApp/`)
3. Follow that implementation's `README.md` for setup & run

---

## Per-framework README templates

### React README (ticketapp-react/README.md)

- Stack: React, NextJS, TailwindCSS, react-hot-toast
- Run:

  - `npm install`
  - `npm run dev`

- Build: `npm run build`
- Dev server: `http://localhost:3000`
- Test user credentials (example):
  - email: `test@ticketapp.local`
  - password: `password123`
- Session key: `ticketapp_session`

### Vue README (ticketapp-vue/README.md)

- Stack: Vue 3 (Composition API), Vite, TailwindCSS, Vue Router, Pinia, vue-toastification
- Same run steps and credentials as React.

  - `npm install`
  - `npm run dev`

- Dev server: `http://localhost:5175`
- Test user credentials (example):
  - email: `test@ticketapp.local`
  - password: `password123`
- Session key: `ticketapp_session`

### Twig README (ticketapp-twig/README.md)

- Stack: PHP + Composer + Twig

## Requirements

- PHP 8.0+
- Composer

## Install & Run (development)

1. `composer install`
2. Start PHP built-in server from `public/`:
   ```bash
   php -S localhost:8000 -t public
   ```
3. Open http://localhost:8000

## Example test user

- Email: `test@ticketapp.local`
- Password: `password123`
- Use these for login/signup during evaluation.

---

## Ticket model (shared)

```json
{
  "id": "uuid-v4-or-numeric-id",
  "title": "string (required, 3-120 chars)",
  "description": "string (optional, max 2000 chars)",
  "status": "open|in_progress|closed",
  "priority": "low|medium|high|optional",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```
