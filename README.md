# Developer Portfolio

Static personal portfolio built with Next.js, TypeScript, Tailwind CSS, and the App Router. The project is configured for `output: "export"` and GitHub Pages deployment, with content separated from UI components for low-friction updates.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS 4
- App Router
- Static export for GitHub Pages

## Project Structure

```text
app/              App Router entrypoints, metadata, layout, sitemap, robots
components/       Reusable UI sections and navigation
data/             Editable content for hero, skills, projects, and contacts
lib/              URL helpers for basePath and absolute metadata URLs
public/           Static assets and project previews
styles/           Global theme tokens
.github/workflows GitHub Pages deployment workflow
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Or run the combined check:

```bash
npm run check
```

## Content Editing

Update these files to personalize the portfolio:

- `data/site.ts`: name, role, hero copy, SEO fields, base metadata.
- `data/skills.ts`: grouped skill categories.
- `data/projects.ts`: project cards, links, preview image paths, stack tags.
- `data/contacts.ts`: email, GitHub, Telegram, LinkedIn, and CTA links.

Replace the placeholder assets if needed:

- `public/og-cover.svg`
- `public/projects/*.svg`
- `app/icon.svg`

## Build for Static Export

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages Deployment

The workflow in `.github/workflows/deploy.yml` builds the portfolio and deploys `out/` to GitHub Pages on every push to `main`.

Before publishing:

1. Enable GitHub Pages in the repository settings and choose GitHub Actions as the source.
2. Replace placeholder content in `data/`.
3. Verify `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` assumptions in the workflow.

### Base Path Notes

The current workflow assumes a project site hosted at:

```text
https://<owner>.github.io/<repository-name>
```

That is why it sets:

- `NEXT_PUBLIC_BASE_PATH=/<repository-name>`
- `NEXT_PUBLIC_SITE_URL=https://<owner>.github.io/<repository-name>`

If you deploy to a user or organization site such as `<owner>.github.io`, set `NEXT_PUBLIC_BASE_PATH` to an empty value and adjust `NEXT_PUBLIC_SITE_URL` accordingly.

## Technical Decisions

- Static export instead of SSR to stay compatible with GitHub Pages.
- Plain data modules instead of hardcoded section content inside components.
- SVG previews to keep the project lightweight and avoid unnecessary media weight.
- Semantic sections, visible focus states, skip link, and keyboard-friendly navigation as baseline accessibility defaults.
- Minimal dependency surface: no UI framework, no backend runtime, no API routes.
