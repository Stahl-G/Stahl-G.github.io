# stahlguo.com

Personal website of Yihong ‘Stahl’ Guo, built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # build to dist/
npm run preview  # preview the production build
```

## Edit content

All copy (EN / 中文) lives in `src/i18n.ts`. The page renders both languages and toggles via `html[data-lang]`; the choice is remembered in `localStorage`.

- Layout shell (header / footer / lightbox script): `src/layouts/Base.astro`
- Page sections: `src/pages/index.astro`
- Design system: `src/styles/global.css`
- Images: `public/assets/` (gallery photos in `public/assets/gallery/`)

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically. The custom domain is carried by `public/CNAME`.
