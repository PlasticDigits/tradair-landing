# Traken AI Implementation TODO

Source: STYLE_GUIDE.md (Traken AI). This checklist will be updated as items are completed. Items that require your input are marked with [!].

Completed

- [x] Rebrand assets, UI text, meta/manifest, README
- [x] Theme tokens + gradients; `CosmicBackground.jsx` layered globally
- [x] `Roadmap.jsx` added after `Hero`
- [x] X link added; background videos removed

Active tasks

- [ ] Spacing/scroll polish
  - [ ] Add header offset so content never sits under fixed header (global `scroll-margin-top` and main top padding)
  - [ ] Tighten large empty space at top of page; audit `Hero`/`Roadmap` paddings and container widths
  - [ ] Normalize vertical rhythm between sections; consistent `pt/pb`
- [ ] Background refinement
  - [ ] Reduce/remove horizontal energy streak lines; keep subtle curved grid and soft orbs only
  - [ ] Lighten grid stroke opacity and reduce line density for clarity
  - [ ] Twinkle stars: smaller (1–2px), fewer, softer opacity
- [ ] Wave animation (missing)
  - [ ] Add subtle SVG wave band as section separator; no harsh lines; respects `prefers-reduced-motion`
- [ ] Custom cursor tail polish
  - [ ] Tune trail size/length and fade so dots don’t appear as stationary; verify performance
  - [ ] Ensure proper behavior on all sections and on low FPS

Please share screenshots again after the spacing and background refinements so I can fine‑tune.

I will check off each item as I complete it and remove this file when all items are done.
