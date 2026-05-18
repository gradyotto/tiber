## Goal

Pivot Tiber from dark mode + orange to a subtly patriotic light theme inspired by tryharmony.ai: cream background, deep navy as primary, red used sparingly as a single accent. Keep the existing "Hard Tech" precision feel — mono labels, numbered sections, coordinate markers, phase tracker — just translated to light mode with an editorial serif on top.

## Design tokens (replace in `src/index.css` + `tailwind.config.ts`)

- `--background`: `45 33% 98%` (cream `#FDFCF9`)
- `--foreground` / `--primary` / `navy`: `222 71% 10%` (`#0A1128`)
- `--accent` / `red`: `352 79% 42%` (`#C8102E`) — used only for: small flag block, active nav/phase number, single coordinate label, hover state on subscribe button
- `--ghost` / border: `222 71% 10% / 0.10`
- Keep `--radius: 0px`
- Add serif font: **Fraunces** (italic light + bold) via Google Fonts in `index.html`; keep Inter + JetBrains Mono

## Page-level changes

**Hero (`src/components/HeroSection.tsx`)**
- Drop scroll-lock, TiberRiverMap background, orange loading bar, and the "TIBER + logo → headline" scroll transition. Replace with a centered editorial hero.
- Headline in Fraunces: *"Precision machining for the"* (light italic) + **"American industrial base."** (bold roman) on second line.
- Top eyebrow: small mono row with red `EST. 2025` • `33.4484° N, 112.0740° W` flanked by hairline rules.
- Subcopy: "Scaling defense-grade manufacturing through algorithmic quoting. Instant pricing for aluminum, stainless, and tool steel components."
- Two CTAs: filled navy "START QUOTE" → `/quote`, outline "CAPABILITIES" → `/about`.
- Three asymmetric, slightly-rotated photo cards floating around the hero (CNC close-up, welding/machining, blueprint). Use existing `imagegen` to generate three grayscale industrial images into `src/assets/`.
- Subtle 40px navy grid overlay at 3% opacity.

**Navbar (`src/components/Navbar.tsx`)**
- Light mode: cream bg, navy text, hairline bottom border.
- Numbered links: `01 HOME`, `02 ABOUT`, `03 ROADMAP`, `04 QUOTE` (mono, small caps, `01` dimmed to 40%).
- Replace `[T]` logo treatment to a small navy square with white `[T]` mono mark + "TIBER" wordmark.
- Add right-side outline "BOOK A DEMO →" button (links to `/quote`).
- Remove the hero-scroll fade-in logic; logo always visible.

**Capabilities (`src/components/CapabilitiesSection.tsx`)**
- 3-column grid with hairline dividers, middle cell tinted `navy/2%`.
- Each card: mono label (`01. SYSTEM`, `02. OUTPUT`, `03. VELOCITY`), Fraunces bold italic title, small navy/60 body. Content unchanged (Algorithmic Quoting / Precision Machining / Speed as a Feature).
- Drop the lucide icons.

**Email capture (`src/components/EmailCaptureForm.tsx`)**
- Center-aligned, small flag-block glyph above (navy outline + red top-left quadrant), "Join the mission." in Fraunces bold.
- Single-line input with bottom hairline + navy submit button to the right. Keep Formspree wiring intact.

**Footer (`src/components/Footer.tsx`)**
- Replace with phase tracker: "CHAPTER 01 • THE INDUSTRIAL BASE • 6 PHASES", a row of mono phase numbers `00–05` (current one red), a thin navy rule with red dot at the end. Keep the Phoenix/Sector strip below in mono.

**About + Roadmap + Quote pages**
- No structural changes this round. They'll inherit the new tokens automatically (navy text on cream, mono labels). Spot-fix any place that hardcoded `bg-void`, `text-safety`, or `border-ghost` to make sure nothing looks dark-mode-orphaned. Specifically audit the Roadmap `LOADING` badge (red instead of orange) and About stats grid borders.

## Files touched

- `src/index.css` — token swap, remove dark-mode-only effects (noise overlay stays at 2% opacity, tech-grid switches to navy)
- `tailwind.config.ts` — add `navy`, `cream`, `flag-red`; add `font-serif: Fraunces`
- `index.html` — add Fraunces Google Font link
- `src/components/HeroSection.tsx` — full rewrite to centered editorial layout
- `src/components/Navbar.tsx` — light styling + numbered nav + Book a Demo button
- `src/components/CapabilitiesSection.tsx` — restyle cards (no icons, serif titles)
- `src/components/EmailCaptureForm.tsx` — light restyle + flag glyph
- `src/components/Footer.tsx` — phase tracker layout
- `src/pages/About.tsx`, `src/pages/Roadmap.tsx`, `src/pages/Quote.tsx` — token audit (orange → red, dark borders → navy/10)
- `src/assets/` — three new generated grayscale industrial photos
- `mem://index.md` + a new `mem://design/patriotic-editorial` memory documenting the new palette/aesthetic so future work doesn't drift back to dark+orange

## What is intentionally NOT in scope

- TiberRiverMap (removed from hero, file can stay)
- Scroll-locked hero interaction (removed)
- The orange Safety palette (fully retired)
- Copy rewrites beyond what's shown above