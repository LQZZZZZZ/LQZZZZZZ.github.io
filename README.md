# Qizhe Li — Academic Homepage

Source code for Qizhe Li's personal academic website.

Live site: [lqzzzzzz.github.io](https://lqzzzzzz.github.io)

## Where to edit

- `app/page.tsx` — biography, news, publications, research interests, and background
- `app/SiteSidebar.tsx` — shared portrait, profile, and contact links
- `app/SiteHeader.tsx` — shared navigation and mobile menu
- `app/news-data.ts` — homepage news, newest month first; use `YYYY-MM` dates
- `app/research-data.ts` — publication records and research figures
- `app/patent-data.ts` — patent records
- `app/home.css` — homepage sections, news, education logos, and responsive layout
- `app/globals.css` — white-and-blue academic layout, profile sidebar, and inner-page styles
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

The old external counter is retained in `app/VisitorCounter.tsx` but is no longer
mounted in the header. It counted page loads, without deduplicating visitors, so
it could not provide a reliable unique-visitor count.
