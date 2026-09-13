---
version: alpha
name: kelly-wang-portfolio
description: "A light, soft-pink developer portfolio built on pure white with a single deep-rose accent (#B14E6A) that carries every interactive state. Geist and Geist Mono are self-hosted; display type runs weight 600 with aggressive negative tracking, body holds 400 at 1.65 line-height. The shape system is locked to exactly two radii: full pill for anything interactive, 14px for containers. Nothing else. Section rhythm comes from alternating white and a barely-there blush tint (#FBF6F8), never from cards or shadows. Motion is CSS scroll-driven only, so content can never be stuck invisible. Copy discipline is strict: zero em-dashes, zero uppercase eyebrows, zero section numbering."

colors:
  accent: "#B14E6A"
  accent-hover: "#93384F"
  accent-soft: "#F2BED1"
  accent-wash: "#FDF2F6"
  on-accent: "#FFFFFF"
  canvas: "#FFFFFF"
  surface-alt: "#FBF6F8"
  surface-sunk: "#F6ECF0"
  ink: "#322329"
  ink-muted: "#7E6470"
  hairline: "#EFD8E1"

typography:
  display-hero:
    fontFamily: Geist
    fontSize: clamp(48px, 9vw, 92px)
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.035em
  display-page:
    fontFamily: Geist
    fontSize: clamp(36px, 6.5vw, 64px)
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.035em
  section:
    fontFamily: Geist
    fontSize: clamp(30px, 4.5vw, 46px)
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.03em
  lede:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  card-title:
    fontFamily: Geist
    fontSize: 17.6px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.02em
  body-sm:
    fontFamily: Geist
    fontSize: 14.4px
    fontWeight: 400
    lineHeight: 1.55
  meta:
    fontFamily: Geist
    fontSize: 12.8px
    fontWeight: 400
    lineHeight: 1.5
  mono-meta:
    fontFamily: Geist Mono
    fontSize: 12.8px
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: Geist
    fontSize: 14.4px
    fontWeight: 500

rounded:
  control: 9999px
  box: 14px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: clamp(64px, 9vw, 112px)
  gutter: clamp(20px, 5vw, 64px)
  container: 1180px
  nav-height: 68px

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: 12.8px 24px
    hover: "{colors.accent-hover}"
    active: translateY(1px)
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    border: "1px solid {colors.accent}"
    rounded: "{rounded.control}"
    padding: 12.8px 24px
    hover: "{colors.accent-wash}"
  card:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.box}"
    padding: 20px 21.6px 22.4px
    hover: "translateY(-4px), border {colors.accent-soft}"
  chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.control}"
    padding: 4.5px 12px
  tag:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.ink-muted}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.control}"
    padding: 3.2px 9.6px
  filter-pill-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
---

## Overview

A single-person portfolio. The job of the page is to let a hiring manager
establish credibility in about eight seconds, so the system is deliberately
quiet: one accent, two radii, no decoration that is not carrying information.

The canvas is pure white. Section rhythm comes from alternating `{colors.canvas}`
with `{colors.surface-alt}` (#FBF6F8), a blush so faint it reads as a change of
air rather than a change of colour. There are no drop shadows except on card
hover, and that shadow is tinted to the accent hue rather than black.

The accent `{colors.accent}` (#B14E6A) is a deep rose. It was darkened from a
lighter pink specifically to clear WCAG AA at 4.5:1 both as small text on white
and as a button fill under white labels. Every interactive affordance uses it
and nothing else does.

Type is Geist at 600 for display and 400 for body, self-hosted as variable woff2
so the page makes no third-party request. Geist Mono appears only on dates and
the brand mark, never on labels.

**Key characteristics:**
- One accent, used identically in every section. No second chromatic colour.
- Exactly two radii. `{rounded.control}` for interactive, `{rounded.box}` for containers.
- Zero eyebrows. No uppercase wide-tracking micro-labels, no section numbering.
- Zero em-dashes and en-dashes in visible copy. Hyphen only, date ranges included.
- Light theme locked. No section inverts, no dark mode.
- Motion is CSS scroll-driven. No scroll listeners, no IntersectionObserver.

## Colors

### Accent
- **Rose** ({colors.accent}): Every button, link, active filter, list marker, date and the brand mark. 5.04:1 on white.
- **Rose Hover** ({colors.accent-hover}): Pressed and hovered state of the solid button only.
- **Rose Soft** ({colors.accent-soft}): Decorative only. Hover borders, the offset frame behind the portrait, the caret. Never carries text.
- **Rose Wash** ({colors.accent-wash}): Fill for tags and the ghost-button hover. Never a section background.

### Surface
- **Canvas** ({colors.canvas}): Default page and card background.
- **Surface Alt** ({colors.surface-alt}): Alternating section background. Applied with `.alt`.
- **Surface Sunk** ({colors.surface-sunk}): Below canvas. Image placeholders and empty cover panels.
- **Hairline** ({colors.hairline}): Every 1px border and divider. There is only one border colour.

### Text
- **Ink** ({colors.ink}): Headings and emphasis. A warm near-black, never #000000.
- **Ink Muted** ({colors.ink-muted}): All body copy, meta lines and list items. 5.32:1 on canvas, 4.98:1 on surface-alt.

## Typography

### Font Family
Geist (display and body) and Geist Mono (dates, brand mark), SIL OFL 1.1,
self-hosted in `assets/fonts` as variable woff2, latin and latin-ext only,
92 KB total. Declared in `css/fonts.css`. Never linked from a font CDN.

### Principles
- Display weight is 600. Body is 400. 500 appears only on buttons and the brand mark.
- Negative tracking scales with size: -0.035em on the hero, -0.03em on section headings, -0.02em on card titles, 0 on body.
- Body copy is capped at 65ch, list items at 68ch.
- Mono is reserved for dates and the brand mark. It is not a label style.
- No serif anywhere. No italic display type.

## Layout

### Grid and Container
- Container `{spacing.container}` 1180px, centred, gutter `{spacing.gutter}`.
- Section padding `{spacing.section}`.
- Project grid is `repeat(auto-fill, minmax(312px, 1fr))` with a 24px gap.
- Hero is a 1.15fr / 0.85fr split. Copy left, portrait right. Never centred.
- About is a 1fr / 240px split. Prose left, language chips right.
- Experience rows are 176px / 1fr. Date left, content right.

### Whitespace Philosophy
Hierarchy is carried by space and by the alternating surface, not by cards.
Cards appear only in the project grid, where each one is a distinct navigable
object. Skills, languages and education are grouped with space and a single
hairline, never boxed.

## Shapes

### Border Radius
Two values, no exceptions:

| Token | Value | Applies to |
|---|---|---|
| `{rounded.control}` | 9999px | Buttons, chips, tags |
| `{rounded.box}` | 14px | Cards, the portrait, project covers |

If a new element does not fit one of these two, the element is wrong, not the scale.

### Elevation
One shadow token, used only on card hover, tinted to the accent hue.
No shadow on any resting state. No pure-black shadows.

## Components

### Buttons
Primary is a solid rose pill with white label. Secondary is the same pill
outlined in rose on transparent. Both take `{typography.button}` at weight 500.
Labels are one to two words and must never wrap at desktop.

### Cards
A project card is a whole-card link. It shows a cover only when a real image
exists in `data.js`. Without an image it goes typographic with a 2px
`{colors.accent-soft}` rule along the top of the body, never an empty panel
standing in for a photo. Blurb takes `flex: 1` so tag rows align across a row.

### Navigation
Single line, 68px, translucent canvas with a blur. The hairline under it fades
in via a scroll-driven animation. Collapses to a hamburger below 860px.

### Lists
Bulleted lists use a 6px accent rule as the marker, not a glyph. Long lists
become chip rows, not rows with a hairline under each one.

## Do's and Don'ts

### Do
- Keep one accent. If a new state needs colour, it uses `{colors.accent}` or it uses none.
- Keep the hero to at most four text elements, subtext under 20 words, top padding at most 6rem.
- Write dates with a hyphen. `2024-2026`, `Sep 2024 - Present`.
- Use sentence case for every label. Meta lines sit below the title, not above it.
- Put new content in `js/data.js`. The markup is generated from it.
- Verify contrast at 4.5:1 for anything under 18px after changing a palette.

### Don't
- Don't add a second accent, a gradient, or a glow.
- Don't add an uppercase wide-tracking label above a heading. The heading is enough.
- Don't number the sections.
- Don't introduce a third border radius.
- Don't use an em-dash or en-dash anywhere a visitor can read it.
- Don't hand-roll SVG icons or decorative illustrations.
- Don't add a scroll listener or an IntersectionObserver for entrance animation.
- Don't invert a section to dark. The page is one theme.

## Responsive Behavior

| Name | Width | Key changes |
|---|---|---|
| Desktop | 1180px+ | Full split layouts, three-up project grid |
| Laptop | 1024px | Project grid two-up |
| Tablet | 860px | Nav to hamburger, hero stacks, portrait caps at 272px |
| Small tablet | 820px | About and project-detail drop to one column, sidebar unsticks |
| Mobile | 740px | Experience date moves above the role |

Hero uses `min-height: 100svh`, never `100vh` or `h-screen`, so the mobile
address bar cannot cause a jump.

## Motion

Entrance animation is `animation-timeline: view()` on `.reveal`, wrapped in
`@supports (animation-timeline: view())` and `prefers-reduced-motion:
no-preference`. A browser without scroll-driven animations shows the content
immediately, because the hidden start state only exists inside the `@supports`
block. This is deliberate: an earlier version gated visibility on an
IntersectionObserver and an entire section rendered blank when the observer did
not fire.

The only scripted motion is the hero name typing in, which is skipped under
reduced motion.

## Iteration Guide

1. Change content in `js/data.js`, not in the HTML.
2. Adding a project to `PROJECTS` creates both the grid card and `project.html?p=<id>`.
3. Reference components by their `components:` token name when asking for changes.
4. After any palette change, re-check contrast for every text node under 18px.
5. Adding a real screenshot means setting `cover:` on that project, nothing else.
6. New sections alternate `.alt` with plain canvas. Do not place two `.alt` sections adjacently.

## Page shape

- **Editorial Manifesto hero.** Type only, no asset. Four text elements: identity
  line, claim, subtext under 20 words, CTAs. The absence of an image is the
  paradigm, not a gap.
- **Sticky-stack case studies.** Featured projects pin at the nav edge and the
  next one scrolls over. Pure CSS `position: sticky`, no library and no scroll
  handler. Motivated as hierarchy: three projects deserve a full viewport, five
  do not. Collapses to static stacking below 900px.
- **Compact list** for everything not featured. One divider style, between rows
  only.

## Known Gaps

- No dark mode. The page is light-locked by choice, so no dark tokens exist.
- No form components. The only contact affordance is a mailto button.
- Project covers are unset. Cards are typographic until real screenshots land.
- The palette is fixed. Two alternates (porcelain, rosewater) were built and
  contrast-verified during design, then removed. They are in git history if the
  accent ever needs revisiting.
