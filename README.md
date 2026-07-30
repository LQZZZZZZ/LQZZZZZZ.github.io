# Qizhe Li — Academic Homepage

Source code for Qizhe Li's personal academic website.

Live site: [lqzzzzzz.github.io](https://lqzzzzzz.github.io)

## Where to edit

- `app/page.tsx` — biography, research areas, publication data, background
- `app/globals.css` — colors, typography, cards, and responsive layout
- `app/VisitorCounter.tsx` — the visitor-count card in the top-right corner
- `app/layout.tsx` — title, description, and social-sharing metadata
- `public/profile.jpg` — profile photo
- `public/og.png` — social-sharing image

## Preview locally

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify before publishing

```bash
npm test
GITHUB_PAGES=1 npx next build
```

The GitHub Pages build is written to `out/`.

## Visitor counter

The counter records one visit per browser using local storage and retrieves the
site-wide total from the free Visitor Counter API. Only the public domain and
page path are sent; no name, email, referrer, or search query is submitted.

The number is an approximate count of browsers, not a verified count of unique
people. If the external service is unavailable, the card falls back to
“Welcome” without affecting the rest of the page.
