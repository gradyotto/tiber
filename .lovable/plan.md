# Fix: Occasionally Unable to Scroll

## Diagnosis

`src/components/HeroSection.tsx` locks page scroll by setting `document.body.style.overflow = 'hidden'` while the hero is in its initial (pre-scroll) state. The lock is only released in two places:

1. After the user triggers the scroll transition and a 500ms timer completes (Phase 2 cleanup).
2. Implicitly when the `location.key` effect re-runs.

The problem: **Phase 1's cleanup function only removes wheel/touch listeners — it never restores `document.body.style.overflow`.** So if the HeroSection unmounts while still locked (e.g., the user clicks "About" / "Roadmap" in the navbar before scrolling), `body` is left with `overflow: hidden` globally. Every other page then can't scroll. Clicking into another browser tab and back can nudge the browser to re-layout or remount, which is why scrolling sometimes "comes back" after tab-switching.

There's also a secondary issue: the `location.key` effect sets `overflow = 'hidden'` on every navigation, even when navigating away from `/`, briefly locking body scroll on pages that don't need the lock.

## Fix

In `src/components/HeroSection.tsx`:

1. In the Phase 1 branch of the scroll-lock `useEffect`, also reset `document.body.style.overflow = ''` inside the cleanup function so unmount always restores scrolling.
2. Add a top-level unmount cleanup (`useEffect(() => () => { document.body.style.overflow = ''; }, [])`) as a guaranteed safety net.
3. Only apply the initial `overflow: hidden` in the `location.key` effect when the hero is actually mounted at `/` and still in its locked phase — keep behavior identical on the homepage, but don't leak the style elsewhere.

No visual or behavioral change to the intended hero interaction; just guarantees scroll is restored when leaving the hero before completing the scroll animation.