# Project Update

## Current milestone

- Next.js 14 App Router scaffold with TypeScript and Tailwind CSS.
- ESLint and Prettier configured.
- Desktop-only shell with a 1280px minimum canvas width.
- Placeholder route displays `Listing page WIP`.

## Project conventions

- Keep route-level composition in `app/` and reusable UI in `components/`.
- Keep static listing data and framework-independent helpers in `lib/`.
- Keep global styles and shared design tokens in `styles/`; use Tailwind utilities for component styling.
- Keep static assets in `public/` and architecture artifacts in `docs/`.
- Target desktop layouts only, with a minimum design width of 1280px.
- Recreate the reference from visual and behavioral observation only. Do not copy its HTML, CSS, JavaScript, bundle code, or class names.
- Use semantic HTML, visible focus states, keyboard support, and appropriate ARIA labels for interactive controls.
- Commit each completed milestone locally with a clear message. Do not push the repository publicly.

## Planned milestones

1. Capture the reference page's content, layout measurements, and interaction states.
2. Build the listing page shell and photo grid.
3. Add listing details, amenities, reviews, and reservation card.
4. Add the photo tour and lightbox, including keyboard navigation and motion.
5. Complete visual, accessibility, and production-build QA.
6. Add the production-scale architecture diagram and submission notes.
