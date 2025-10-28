# TicketApp — Twig (PHP + Twig Templates)

This is the Twig implementation of the ticketApp.

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

Notes:

- This implementation uses Twig for server rendering but keeps authentication and ticket CRUD on the client side using `localStorage` keys:
  - Session key: `ticketapp_session`
  - Tickets key: `ticketapp_tickets`
- Client-side logic is in `public/js/app.js` and mirrors the Next.js/Vue logic so the UI and behavior match exactly.

Test user credentials:

- email: test@ticketapp.local
- password: password123
