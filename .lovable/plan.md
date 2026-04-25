# Pivot to Precision Machining + Instant Quoting

Aligns site copy with the Haas VF-2SS 3+2 machining focus, and replaces the contradictory "24H CAD to Part" messaging with **instant quoting** to match the algorithmic quoting positioning. Production lead time language is removed (since it depends on part complexity) in favor of emphasizing quote speed.

## 1. `src/components/CapabilitiesSection.tsx`
- Replace **INDUSTRIAL COMPOSITES** card → **PRECISION MACHINING**
  - Icon: `Layers` → `Cog`
  - Description: `"Aluminum. Stainless. Tool Steel."`
- Replace **SPEED AS A FEATURE** description:
  - From: `"From CAD to Part in 24 hours."`
  - To: `"From CAD to Quote in seconds."`
- Keep **ALGORITHMIC QUOTING** card unchanged (now reinforced by the speed card).

## 2. `src/pages/About.tsx`
- **Section 02 copy** (line ~80–85): Replace `"Our 24-hour deployment capability eliminates waiting."` with `"Our algorithmic quoting system delivers pricing in seconds, not days."` (and tighten the prior sentence so it doesn't double up).
- **Section 03 — CAPABILITIES**:
  - Headline: `DEFENSE-GRADE / PRECISION` → keep (still fits)
  - Body copy: Replace 3D printing / composites text with:
    > "We specialize in **precision 3+2 CNC machining** of mission-critical metals: 6061 & 7075 aluminum, 4140 tool steel, and 17-4/304/316 stainless steel. Every part we produce meets the exacting standards required by defense, aerospace, and **critical infrastructure applications**."
- **Stats grid** (4 tiles):
  - `24H / CAD TO PART` → `INSTANT / CAD TO QUOTE`
  - `250°C+ / HIGH TEMP` → `±0.0005" / TOLERANCE`
  - `100% / USA MADE` → keep
  - Fourth tile → `3+2 / AXIS MACHINING`

## 3. `src/pages/Roadmap.tsx`
- Reorder milestones so **PRECISION CNC MACHINING** is the current `LOADING` milestone (Phoenix, AZ).
- Move **INDUSTRIAL ADDITIVE MANUFACTURING** to a future milestone (2027).
- Adjust waypoint statuses/years accordingly so the river flows: current → near-future → 2027.

## 4. Files NOT changing
- `index.html` — generic enough, no machining/printing claims.
- `src/pages/Quote.tsx` — already framed around CAD upload + instant algorithmic quoting; copy stays.
- `HeroSection`, `Navbar`, `Footer`, `EmailCaptureForm` — no relevant content.

## Outcome
Messaging becomes internally consistent: **algorithmic quoting → instant quotes**, **Haas VF-2SS → 3+2 precision machining of realistic materials**, and additive manufacturing becomes a future roadmap item rather than a current capability.
