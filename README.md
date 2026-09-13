# kuuroooo.github.io

Personal portfolio. Static HTML, CSS and JS. No build step, no dependencies.

## Deploy

The repo must be named `kuuroooo.github.io` for the user-site URL.

```bash
git init && git add -A && git commit -m "Portfolio"
git branch -M main
git remote add origin git@github.com:kuuroooo/kuuroooo.github.io.git
git push -u origin main
```

Then GitHub, repo, Settings, Pages, Source: `main` / root. Live at
https://kuuroooo.github.io within a minute or two.

## Editing

Everything lives in [`js/data.js`](js/data.js): profile, experience, education,
skills and projects. Adding a project to the `PROJECTS` array puts it in the grid
and gives it a detail page at `project.html?p=<id>`. No other file needs touching.

- `repo: null` shows "private under coursework policy" instead of a link.
- `featured: true` sorts to the front of the grid.
- `cover: "assets/shots/foo.png"` turns a card image-led. Left `null`, the card
  is typographic rather than showing an empty panel.
- `FILTERS` controls the filter buttons. Every tag still shows on the card.

## House rules this site follows

Applied from the `taste-skill` design skill, so keep them if you edit copy:

- **Zero em-dashes and en-dashes** anywhere visible. Hyphen only, including in
  date ranges. This is the single most common AI writing tell.
- **No eyebrows.** No small uppercase wide-tracking labels above headings, and no
  section numbering. The heading alone does the work.
- **Shape lock.** Two radii only: `--r-control` (999px) for anything interactive,
  `--r-box` (14px) for containers. Nothing else.
- **One accent**, used identically everywhere, checked to
  WCAG AA (4.5:1 for body text) as text and as a button fill.
- **Hero cap.** Max 4 text elements, subtext under 20 words, top padding max 6rem.
- **No hand-rolled SVG icons or decorative illustrations.** Social links are text.

## DESIGN.md

[`DESIGN.md`](DESIGN.md) documents this site's design system in the
[Google Stitch DESIGN.md](https://github.com/voltagent/awesome-design-md) format:
tokens, type scale, component specs, and the do/don't rules. Coding agents read it
to generate UI that matches. Keep it in sync when you change tokens.

## Fonts

Geist and Geist Mono (SIL OFL 1.1), self-hosted in `assets/fonts` rather than
linked from Google Fonts, so the page makes no third-party request. Latin and
latin-ext subsets only, variable files, 92 KB total. To change weights, edit
`css/fonts.css`.

## Motion

Entrance animation is CSS scroll-driven (`animation-timeline: view()`), wrapped
in `@supports` so a browser without it just shows the content. There is
deliberately no scroll listener and no IntersectionObserver: content must never
be able to get stuck invisible.

## Layout

Editorial manifesto hero (type only, no asset), then sticky-stack panels for the
projects marked `featured: true`, with everything else as a compact list.
Three featured is the right number; more and the stack overstays its welcome.

## Still to do

- [ ] Fill in `repo:` URLs for any coursework repos that are public
- [ ] Add `cover:` screenshots for MindSafe and Kelly's Cookbook when you have them
- [ ] Promote Kelly's Cookbook back to `featured: true` once it has recipe features
