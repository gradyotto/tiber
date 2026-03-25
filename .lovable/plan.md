

# Tiber Design Summary — For Claude Code Analysis

I'll generate a markdown document summarizing the full design system, site structure, and implementation details of the Tiber site. This will be saved to `/mnt/documents/` for you to download and feed to Claude Code.

## What the document will cover

1. **Brand Identity** — Company name, tagline, location, sector, logo assets
2. **Design Philosophy** — Neo-Industrial / Hard Tech aesthetic, inspirations (Linear, Vercel, Kyle Anthony Miller)
3. **Color System** — All CSS custom properties with hex values (Void #080808, Safety Orange #FF5F00, Ghost Grey #27272A, Titanium #EDEDED)
4. **Typography** — Inter Black (weight 900) for headers, JetBrains Mono for body/UI, sizing conventions, uppercase/tracking rules
5. **Layout Patterns** — Grid-based with 1px ghost borders, corner markers (+), coordinate markers, tech-grid backgrounds, noise overlay
6. **Component Inventory** — Navbar, HeroSection (scroll-lock animation), CapabilitiesSection (3-card grid), EmailCaptureForm (Formspree), TiberRiverMap (SVG), Roadmap (river + waypoints), About (numbered sections), Footer
7. **Animation System** — fade-up, fade-in, scale-in, glow, pulse, staggered delays (100-700ms)
8. **Interaction Patterns** — Hero scroll-lock mechanism, card-hover glow effects, navbar logo show/hide based on hero state
9. **Site Architecture** — Routes (/, /about, /roadmap, /quote), shared layout (Navbar + Footer + EmailCapture)
10. **Technical Stack** — React, Vite, TypeScript, Tailwind CSS, shadcn/ui, react-router-dom, Formspree, deployed on Vercel
11. **Key Design Rules** — Dark mode only, 0px border-radius, monospace labels with `>` prefix, section numbering pattern (`01 — TITLE`), status indicators (LOADING badge, dashed circles for future)

## Implementation

Single file: `tiber-design-summary.md` written to `/mnt/documents/`

