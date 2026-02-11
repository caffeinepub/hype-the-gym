# Specification

## Summary
**Goal:** Remove the Before/After transformation section across the site and switch the UI to a premium light theme with a white base and gold accents.

**Planned changes:**
- Remove the entire “Before & After / Transformation” UI everywhere it appears (Home and Gallery), including headings/copy/components, and ensure no before/after images are referenced by rendered UI.
- Update global theme to render in light mode by default (remove any forced dark-mode behavior) with a white/near-white background and readable dark text.
- Replace existing hard-coded accent color usage with reusable white+gold theme tokens/variables and apply consistently across key highlighted UI (Header, Hero, page headings like Gallery/Contact, Footer, CTAs), eliminating prominent red/neon-blue accents.

**User-visible outcome:** The site no longer shows any transformation/before-after section, and the entire UI appears in a consistent premium light (white + gold) theme across all pages.
